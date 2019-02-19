<a class="logo" href="{{= it.logo_href }}" target="_blank">
	<img src="{{= it.logo_media_id }}" height="40" />
</a>
<button class="close" @click="eventCloseTheChat">
	<i class="icon icon-close"></i>
</button>
<div class="closing-confirm-box">
	<span class="box-arrow"><i></i></span>
	<p>确定要结束对话吗？</p>
	<div>
		<button data-type="default" @click="confirmToClose = 0">取消</button>
		<button data-type="primary" @click="confirmToClose = 0, closingTheChat()">确定</button>
	</div>
</div>
