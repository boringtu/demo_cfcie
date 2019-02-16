###
 # 项目配置文件
###
define [], ->
	"use strict"

	### 私有函数 ###

	### ALPHA 命名空间 ###
	window.ALPHA =
		# 枚举: 接口地址
		API_PATH:
			## WebSocket ##
			WS:
				# 用于建立 WebSocket 连接
				url: '/api/chat'
				# 枚举：发送 ws 数据的类型
				SEND_CODE:
					# 发送消息
					MESSAGE: 1
				# 枚举：接收 ws 数据的类型
				RECEIVE_CODE:
					p2p:
						# 推送消息
						MESSAGE: 1
						# 排队系统 前面排的人数
						QUEUENUM: 4
						# 会话已结束
						CLOSED: 5
				## 以下用于用以建立的 ws 监听和发送
				# 点对点
				p2p: -> "/user/#{ ALPHA.userId }/c/chatting"
				# 发送
				send: '/c/chatting'
			## 通用 ##
			common:
				# 服务器时间戳
				timestamp: '/api/common/timestamp'
				# 上传文件
				upload: '/api/common/upload'
				# 获取配置
				conf: '/api/common/conf'
			user:
				# 用户初始化数据
				init: '/api/user/init'
				# 立即咨询
				new: '/api/user/new'
				# 历史消息记录
				history: '/api/user/history'

	window.ALPHA
