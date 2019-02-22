# 入口文件
"use strict"
require.config
	paths:
		'jquery': '../assets/jquery.min'
		'jquery.form': '../assets/jquery.form.min'
		'text': '../assets/text.min'
		'doT': '../assets/doT.min'
		#'base64': '../assets/base64.min'
		'md5': '../assets/md5.min'
		#'underscore': '../assets/underscore.min'

require ['jquery', 'alpha', 'utils', 'index', 'jquery.form'], ($, ALPHA, Utils) ->
	window.Utils = Utils
