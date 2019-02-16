start	= ($) ->
	els	= {}
	els.body	= $ 'body'
	els.bd		= $ '<div class="ie-blocker-backgrop">'
	els.ieb		= $ """
		<div class="ie-blocker">
			<div class="ie-blocker-dialog">
				<h3>您的浏览器需要更新</h3>
				<p>为了保证功能正常使用并保护您的信息安全<br>请使用以下最新浏览器</p>
				<div class="box">
					<div class="item">
						<span class="logo logo-chrome"></span>
						<span class="name">Chrome<i></i></span>
						<span class="text">谷歌全新推出的高速浏览器</span>
						<a target="_blank" href="http://www.google.cn/chrome">官网下载</a>
					</div>
					<div class="item">
						<span class="logo logo-opera"></span>
						<span class="name">Opera</span>
						<span class="text">地球上最快的浏览器 内置广告拦截功能</span>
						<a target="_blank" href="http://www.opera.com/zh-cn">官网下载</a>
					</div>
					<div class="item">
						<span class="logo logo-firefox"></span>
						<span class="name">Firefox</span>
						<span class="text">Firefox注重您的信息安全</span>
						<a target="_blank" href="http://www.firefox.com.cn">官网下载</a>
					</div>
				</div>
			</div>
		</div>
	"""
	els.dialog	= els.ieb.find '> .ie-blocker-dialog'

	els.body
		.css overflow: 'hidden'
		.append els.bd
		.append els.ieb
	go	= ->
		els.bd.fadeIn 200
		els.dialog
			.css marginTop: -100, opacity: 0
			.delay 200
			.animate marginTop: 270, opacity: 1, 200
	go()

test	= ->
	setTimeout ->
		if jQuery
			start jQuery
		else
			test()
	, 100
test()
