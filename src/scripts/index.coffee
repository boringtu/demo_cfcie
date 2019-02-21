define [
	'jquery'
	'doT'
	'text!../templates/headbar.tpl'
	'text!../templates/advertisingbar.tpl'
	'text!../templates/historyItems.tpl'
	'text!../templates/initBox.tpl'
	'text!../templates/closedNotice.tpl'
], (
	$, doT
	TplHeadbar
	TplAdvertisingbar
	TplHistoryItems
	TplInitBox
	TplClosedNotice
) ->
	"use strict"

	# 历史消息区 消息 class 类名（区分己方/对方）
	getSideClass = (side) ->
		switch side
			when 1
				'msg-opposite'
			when 2
				'msg-self'

	# 消息时间线
	calcTimeline = (stamp) ->
		date = new Date stamp
		today = new Date()
		M = date.getMonth() + 1
		M = if (M + '').length > 1 then M else '0' + M
		d = date.getDate()
		d = if (d + '').length > 1 then d else '0' + d
		H = date.getHours()
		H = if (H + '').length > 1 then H else '0' + H
		m = date.getMinutes()
		m = if (m + '').length > 1 then m else '0' + m
		s = date.getSeconds()
		s = if (s + '').length > 1 then s else '0' + s
		if today.getMonth() is date.getMonth() and today.getDate() is date.getDate()
			"#{ H }:#{ m }:#{ s }"
		else
			"#{ M }-#{ d } #{ H }:#{ m }:#{ s }"

	# 渲染消息
	getInnerHTML = (msg) ->
		return '' unless msg and msg.message
		switch msg.messageType
			when 1
				# 文本消息
				text = msg.message
				text = text.replace /\n|\ /g, (char) ->
					switch char
						when '\n'
							'<br/>'
						when ' '
							'&nbsp;'
						else
							char
				text.encodeHTML()
			when 2
				# 图片
				"""
					<a href="/#{ msg.message.encodeHTML() }" target="_blank">
						<img src="/#{ msg.message.encodeHTML() }" />
					</a>
				"""

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
			isLoadingHistory: 0
			noMoreHistory: 0
			msgInitCount: 20
			msgAppendCount: 20
			referTimeStamp: 0
			chatHistoryList: []
			newUnreadElList: []
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
		els: do ->
			app = $ '#app'
			headbar = app.children '.tab-box'
			contentBox = app.children '.content-box'
			chatBox = contentBox.children '.chat-box'
			queueNum = chatBox.find '.queueNum'
			chatHistory = chatBox.children '.chat-history'
			unreadCountWrap = chatHistory.children '.unreadCount'
			unreadCount = unreadCountWrap.find 'strong span'
			chatWindow = chatHistory.children '.chat-window'
			loadingHistory = chatWindow.children '.loading-history'
			chatWrapper = chatWindow.children '.chatWrapper'
			chatToolbar = chatBox.children '.chat-toolbar'
			chatSendBox = chatBox.children '.chat-sendbox'

			body: $ 'body'
			app: app
			headbar: headbar
			closingConfirmBox: headbar.find '.closing-confirm-box'
			contentBox: contentBox
			chatBox: chatBox
			queueNum: queueNum
			chatHistory: chatHistory
			unreadCountWrap: unreadCountWrap
			unreadCount: unreadCount
			chatWindow: chatWindow
			loadingHistory: loadingHistory
			chatWrapper: chatWrapper
			chatToolbar: chatToolbar
			chatSendImg: chatToolbar.find 'input[type="file"]'
			chatSendBox: chatSendBox
			chatTextarea: chatSendBox.find 'textarea'
			chatSendBtn: chatSendBox.find 'button'
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

			@els.body.on 'click', '.tab-box .close', @eventCloseTheChat
			@els.body.on 'click', '.tab-box .closing-confirm-box button[data-type="cancel"]', => @els.closingConfirmBox.hide()
			@els.body.on 'click', '.tab-box .closing-confirm-box button[data-type="okey"]', => @els.closingConfirmBox.hide(); window.close()
			@els.body.on 'keyup', '.init-box input[name="name"]', @eventKeyupName
			@els.body.on 'keyup', '.init-box input[name="phone"]', @eventKeyupPhone
			@els.body.on 'keydown', '.init-box input[name="phone"]', @eventKeydownPhoneNum
			@els.body.on 'click', '.init-box button', @eventStartChatting
			@els.body.on 'focus', '.chat-sendbox textarea', => @els.contentBox.addClass 'active'
			@els.body.on 'blur', '.chat-sendbox textarea', => @els.contentBox.removeClass 'active'
			@els.body.on 'keydown', '.chat-sendbox textarea', @eventTextareaKeydown
			@els.body.on 'keyup', '.chat-sendbox textarea', @eventTextareaKeyup
			@els.body.on 'click', '.chat-sendbox button.send', @eventSend

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

		eventTextareaKeydown: (event) =>
			if event.keyCode is 13 and not event.shiftKey
				event.preventDefault()
				@eventSend()

		eventTextareaKeyup: (event) =>
			@data.inputText = val = event.currentTarget.value
			@els.chatSendBtn.prop disabled: !val.trim()

		eventSend: =>
			return unless @data.inputText.trim()
			# 转义（防xss）
			text = @data.inputText.encodeHTML()
			# 发送消息体（messageType 1: 文字 2: 图片）
			sendBody = messageType: 1, message: text
			# 发送消息
			@wsSend ALPHA.API_PATH.WS.SEND_CODE.MESSAGE, JSON.stringify sendBody
			# 清空消息框
			@data.inputText = ''
			@els.chatTextarea.val ''
			@els.chatSendBtn.prop disabled: true

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
					@chattingClosed()
					# 滚动到最底部
					@scrollToBottom()

		# Event: 结束当前对话
		eventCloseTheChat: =>
			@els.closingConfirmBox.show()

		# 结束当前对话
		closingTheChat: ->
			window.close()

		chattingClosed: ->
			@els.chatTextarea.prop readonly: yes
			@els.chatSendImg.prop disabled: yes

		# 获取历史消息数据
		fetchHistory: (isReset) ->
			return if @data.isLoadingHistory
			# 更改是否正在加载历史数据的状态
			@data.isLoadingHistory = 1
			@els.loadingHistory.show()

			## 请求参数
			params = {}
			# 请求的消息条数
			if isReset
				params.size = @data.msgInitCount
			else
				params.size = @data.msgAppendCount
			# 目前最前面的那条消息的 timestamp（非首屏）
			params.timestamp = @data.referTimeStamp unless isReset
			
			# 发起请求
			promise = Utils.ajax ALPHA.API_PATH.user.history,
				params: params
			promise.then (data) =>
				list = data.data
				unless list.length
					## 无更多数据
					# 更改是否正在加载历史数据的状态
					@data.isLoadingHistory = 0
					@els.loadingHistory.hide()
					# 无更多数据的状态
					@data.noMoreHistory = 1
					return

				# 新请求来的消息条数
				newMsgCount = list.length

				# 追加数据（包含首屏数据的情况）
				@data.chatHistoryList = [...list, ...@data.chatHistoryList]
				# TODO
				# 刷新 timeline 的数据
				@refreshTimeline list
				@els.chatWrapper.prepend @tpls.historyItems list

				# 更改是否正在加载历史数据的状态
				@data.isLoadingHistory = 0
				@els.loadingHistory.hide()
				if isReset
					## 首屏时，滚动到最底部
					@scrollToBottom 0
				else
					## 非首屏时，保持当前窗口中的可视消息位置
					els = [].slice.apply @els.chatWrapper.children()
					h = 0
					for i in [0..newMsgCount]
						el = els[i]
						break unless el
						h += el.offsetHeight
					@els.chatWindow[0].scrollTop = h

		# 刷新 timeline 的数据
		refreshTimeline: (list, isAdd) ->
			return unless list.length
			# 刷新 referTimeStamp
			@data.referTimeStamp = list[0].timeStamp
			multiple = 0
			for item, i in list
				item.timeline = calcTimeline item.timeStamp
				item.sideClass = getSideClass item.sendType
				item.innerHTML = getInnerHTML item
				if (i is 0 and not isAdd) or (isAdd and not @data.chatHistoryList.length)
					item.hasTimeline = 1
					continue
				referTimeStamp = @data.referTimeStamp
				if isAdd
					tempList = @data.chatHistoryList
					tempLen = tempList.length
					for j in [tempLen - 1..0]
						temp = tempList[j]
						continue unless temp.hasTimeline
						referTimeStamp = temp.timeStamp
						break
				# 5 为 5分钟
				tempMultiple = ~~( (item.timeStamp - referTimeStamp) / (5 * 60 * 1000) )
				if tempMultiple > multiple
					item.hasTimeline = 1
					multiple = tempMultiple
				else
					item.hasTimeline = 0

		# 历史消息滚动到指定位置
		scrollTo: (targetY = 0, duration = 200) ->
			#@els.chatWindow[0].velocity scrollTop: "#{ targetY }px", {duration: duration}
			@els.chatWindow.animate scrollTop: "#{ targetY }px", duration

		# 历史消息滚动到最底部
		scrollToBottom: (duration = 200) ->
			# window element
			win = @els.chatWindow
			# window height
			winH = win[0].offsetHeight
			# content height
			conH = @els.chatWrapper[0].offsetHeight
			# difference value
			diff = conH - winH
			return if diff < 0
			#win.velocity('finish').velocity scrollTop: "#{ diff + 20 }px", {duration: duration}
			win.stop(true, true).animate scrollTop: "#{ diff + 20 }px", duration

		# 历史消息区当前位置是否位于最底部
		isLocateBottom: ->
			# window element
			win = @els.chatWindow[0]
			# window height
			winH = win.offsetHeight
			# content height
			conH = @els.chatWrapper[0].offsetHeight
			# difference value
			diff = conH - winH
			# 如果内容没满一屏
			return 1 if diff < 0

			# all chat element list
			allEls = [].slice.apply @els.chatWrapper.children()
			# the last chat element
			el = allEls.last()

			# 备注：
			# 9:	.msg-self/.msg-opposite padding-top/padding-bottom
			# 34/2	.msg-bubble half height

			# window scrollTop
			sT = win.scrollTop
			# total height
			tH = @els.chatWrapper[0].offsetHeight

			console.log sT, winH, tH
			console.log sT + winH > tH - 9 - 34 / 2
			return sT + winH > tH - 9 - 34 / 2
		
		# 服务器推送来的消息（包括己方发送的消息）
		addMessage: (msg) ->
			list = @data.chatHistoryList
			# 刷新 timeline 的数据
			@refreshTimeline [msg], 1
			setTimeout (=> @els.chatWrapper.append @tpls.historyItems [msg]), 0
			@data.chatHistoryList = [...list, msg]
			if msg.sendType is 2
				# 己方消息，滚动到底部
				setTimeout ( => @scrollToBottom 80), 0
			else
				if @isLocateBottom()
					setTimeout ( => @scrollToBottom()), 0
				else
					# 对方消息，追加到 newUnreadElList
					@data.newUnreadElList.push msg

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
