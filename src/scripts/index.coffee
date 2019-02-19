define [
	'jquery'
	'doT'
	'text!../templates/headbar.tpl'
	'text!../templates/advertisingbar.tpl'
	'text!../templates/historyItems.tpl'
	'text!../templates/initBox.tpl'
], (
	$, doT
	TplHeadbar
	TplAdvertisingbar
	TplHistoryItems
	TplInitBox
) ->
	"use strict"

	class SendWS
		constructor: (@ws, @socket, data) ->
			unless @send data
				@handle = setInterval (=> @send data), 20
		send: (data) ->
			return 0 unless @socket?.readyState is 1
			clearInterval @handle
			# 发送数据
			@ws.send.apply @ws, data
			@ws = null
			@socket = null
			return 1

	class View
		data:
			form:
				name: ''
				phone: ''
			conf:
				# logo link
				logo_href: ''
				# logo img src
				logo_media_id: ''
				# right ad link
				right_ad_href: ''
				# right ad img src
				right_ad_media_id: ''
		els:
			body: $ 'body'
			app: $ '#app'
			headbar: $ '.tab-box'
			contentBox: $ '.content-box'
			chatBox: $ '.chat-box'
			queueMsg: $ '.queue-msg'
			queueNum: $ '.queueNum'
			chatHistory: $ '.chat-history'
			chatToolbar: $ '.chat-toolbar'
			chatSendBox: $ '.chat-sendbox'
			advertisingbar: $ '.advertising-box'
		tpls:
			headbar: doT.template TplHeadbar
			advertisingbar: doT.template TplAdvertisingbar
			historyItems: doT.template TplHistoryItems
			initBox: doT.template TplInitBox

		constructor: ->
			# 来源地址
			origin = Utils.getUrlParams().origin
			if origin
				origin = decodeURIComponent origin
			else
				origin = ''

			Utils.ajax ALPHA.API_PATH.user.init,
				method: 'POST'
				data:
					channel: 0
					origin: origin
			.then (res) =>
				data = res.data
				ALPHA.userId = @userId = data.userId
				popup = +data.popup
				unless popup
					# 创建 WebSocket 连接
					@connectWSLink()
					# 加载首屏历史消息数据
					@fetchHistory 1
				else
					@showInitBox()

			Utils.ajax ALPHA.API_PATH.common.conf, params: type: 'pc_dialog'
			.then (res) =>
				data = res.data
				for item in data
					if /_media_id$/.test item.key
						@data.conf[item.key] = "/#{ item.other }"
					else
						@data.conf[item.key] = if item.value then "https://#{ item.value }" else 'javascript:;'
				@els.headbar.append @tpls.headbar @data.conf
				@els.advertisingbar.append @tpls.advertisingbar @data.conf

			# 如页面被关闭，关闭 WebSocket 连接
			window.addEventListener 'unload', =>
				@closingActively = 1
				@socket?.close()
				@ws?.disconnect()

			@els.body.on 'keyup', '.init-box input[name="name"]', @eventKeyupName
			@els.body.on 'keyup', '.init-box input[name="phone"]', @eventKeyupPhone
			@els.body.on 'keydown', '.init-box input[name="phone"]', @eventKeydownPhoneNum
			@els.body.on 'click', '.init-box button', @eventStartChatting

		showInitBox: ->
			@els.initBox = content = $ @tpls.initBox()
			@els.app.append content

		hideInitBox: ->
			return unless @els.initBox
			@els.initBox.remove()
			delete @els.initBox

		eventKeyupName: (event) =>
			@data.form.name = event.currentTarget.value

		eventKeyupPhone: (event) =>
			@data.form.phone = event.currentTarget.value

		eventKeydownPhoneNum: (event) =>
			keyCode = event.keyCode
			return if keyCode is 8
			event.preventDefault() unless keyCode in [48..57].concat [96..105]
			event.preventDefault() if @data.form.phone.length > 10

		# 建立 WebSocket 连接
		connectWSLink: ->
			@socket?.close()
			@ws?.disconnect()
			@socket = socket = new SockJS ALPHA.API_PATH.WS.url
			@ws = ws = Stomp.over socket
			# 断线重连机制
			socket.addEventListener 'close', => @connectWSLink() unless @closingActively
			ws.connect {}, (frame) =>
				# 添加监听
				ws.subscribe ALPHA.API_PATH.WS.p2p(), @monitorP2P

		###
		 # @params SEND_CODE <int> 发送消息类型。严禁直接传值，要用枚举：ALPHA.API_PATH.WS.SEND_CODE（备注：1: 发送消息，2: 客服接单，3: 消息已读
		 # @params message <JSON String> 消息体。只在 SEND_CODE 为 1 时存在
		###
		wsSend: (SEND_CODE, message) ->
			new SendWS @ws, @socket, [ALPHA.API_PATH.WS.send, {}, "#{ SEND_CODE }|#{ message or '' }"]

		# 监听 点对点
		monitorP2P: (res) =>
			body = res.body
			console.log 'RECEIVE: ', body
			# 消息类型
			type = +body.match(/^(\d+)\|/)[1]
			body = body.replace /^\d+\|/, ''
			switch type
				when ALPHA.API_PATH.WS.RECEIVE_CODE.p2p.MESSAGE
					## 1: 消息推送
					## 1|message Object|
					body = body.replace /\|$/, ''
					msg = body.toJSON()
					# 追加消息
					@addMessage msg
				when ALPHA.API_PATH.WS.RECEIVE_CODE.p2p.QUEUENUM
					## 4: 排队系统 前面排的人数
					## 4|num|
					body = +body.replace /\|$/, ''
					@els.queueNum.text body
					@els.chatBox[if body then 'addClass' else 'removeClass'] 'waitting'
				when ALPHA.API_PATH.WS.RECEIVE_CODE.p2p.CLOSED
					## 5: 会话已结束
					## 5||
					@isClosed = true
					# 滚动到最底部
					@$nextTick => @scrollToBottom()

		# Event: 结束当前对话
		eventCloseTheChat: ->
			@confirmToClose = 1

		# 结束当前对话
		closingTheChat: ->
			window.close()

		# 获取历史消息数据
		fetchHistory: (isReset) ->
			return if @isLoadingHistory
			# 更改是否正在加载历史数据的状态
			@isLoadingHistory = 1

			## 请求参数
			params = {}
			# 请求的消息条数
			if isReset
				params.size = @msgInitCount
			else
				params.size = @msgAppendCount
			# 目前最前面的那条消息的 timestamp（非首屏）
			params.timestamp = @referTimeStamp unless isReset
			
			# 发起请求
			promise = Utils.ajax ALPHA.API_PATH.user.history,
				params: params
			promise.then (data) =>
				list = data.data
				unless list.length
					## 无更多数据
					# 更改是否正在加载历史数据的状态
					@isLoadingHistory = 0
					# 无更多数据的状态
					@noMoreHistory = 1
					return

				# 新请求来的消息条数
				newMsgCount = list.length

				# 追加数据（包含首屏数据的情况）
				@chatHistoryList = [...list, ...@chatHistoryList]
				# 刷新 timeline 的数据
				@refreshTimeline()

				# 更改是否正在加载历史数据的状态
				@isLoadingHistory = 0
				if isReset
					## 首屏时，滚动到最底部
					@$nextTick =>
						# 滚动到最底部
						@scrollToBottom 0
				else
					## 非首屏时，保持当前窗口中的可视消息位置
					els = [].slice.apply @$refs.chatWrapper.children
					h = 0
					for i in [0..newMsgCount]
						el = els[i]
						break unless el
						h += el.offsetHeight
					@$refs.chatWindow.scrollTop = h

		# Event: 立即咨询点击事件
		eventStartChatting: =>
			Utils.ajax ALPHA.API_PATH.user.new,
				method: 'POST'
				data: @data.form
			.then (res) =>
				@hideInitBox()
				# 创建 WebSocket 连接
				@connectWSLink()
				# 加载首屏历史消息数据
				@fetchHistory 1


	window.x = new View()
