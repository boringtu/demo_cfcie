{{~ it :item }}
<div class="chat-content" data-timeline="{{= item.hasTimeline }}">
	{{? item.hasTimeline }}
	<div class="time-line">{{= item.timeline }}</div>
	{{?}}
	<div class="clear {{= item.sideClass }}">
		<div class="msg-bubble">
			<div class="msg-content">{{! item.innerHTML }}</div>
		</div>
		<div class="msg-arrow"><i></i></div>
	</div>
</div>
{{~}}
