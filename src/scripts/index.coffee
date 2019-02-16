define [
	'jquery'
	'doT'
	'text!../templates/historyItems.tpl'
], ($, doT, TplHistoryItems) ->
	"use strict"
	class View
		tpls:
			historyItems: doT.template TplHistoryItems

		constructor: ->
			x = ['a', 'b']
			alert [...x, 'c'].toString()
			console.log $('#app')[0]
			# console.log @tpls.historyItems 123
			# Utils.ajax ALPHA.API_PATH.user.init,
			# 	method: 'POST'
			# 	data:
			# 		channel: 0
			# 		origin: 'abc'

	window.onload = -> new View()
