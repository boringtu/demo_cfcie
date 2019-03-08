<div class="dialog-box init-box">
	<div class="dialog-mask"></div>
	<div class="dialog-content">
		<div class="line"></div>
		{{? it.msg.length > 0 }} <h2>{{= it.msg }}</h2> {{?}}



		<ul>
{{~ it.list :item }}
	{{ if (item.ban) continue; }}
				<li>
					<label>{{= item.name }}{{? item.require }}<i>*</i>{{?}}</label>
					<input name="{{= item.filed }}"
	{{
		var attrs = ALPHA.initAttrs[item.filed] || {};
		for (var k in attrs) {
			v = attrs[k];
	}}
						{{= ' ' + k + '="' + v + '"' }}
	{{
		}
	}}
					>
				</li>
{{~}}

		</ul>
		<div>
			<button>立即咨询</button>
		</div>
	</div>
</div>
