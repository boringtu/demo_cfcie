module.exports = (grunt) ->

	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'
		watch:
			options:
				livereload: 23333
				dateFormat: (time) ->
					grunt.log.writeln "The watch finished in #{ time }ms at#{ new Date().toString() }"
					grunt.log.writeln 'Waiting for more changes...'
			test:
				files: ['<%= pkg.path.src.path %>**/*']
				tasks: ['x-compile']
			forCoffee:
				files: [
					'<%= pkg.path.src.scripts %>**/*.coffee'
				]
				tasks: ['newer:coffee']
			forSass:
				files: [
					'<%= pkg.path.src.styles %>**/*.sass'
					'<%= pkg.path.src.styles %>**/*.scss'
				]
				tasks: ['sass']

		bowercopy:
			options:
				clean: false
			assets:
				options:
					destPrefix: 'dist/assets'
				files: '<%= pkg.bower.copyfiles %>'
		clean:
			tempJs:
				src: ['./dist/tempJs/']
			templates:
				src: ['./dist/templates/']


			dist:
				src: ['./dist/']
			forBower:
				src: '<%= pkg.bower.removefiles %>'
			assets:
				src: ['./assets/']
			styles:
				src: ['./dist/styles/']
			js:
				src: ['./dist/js/']
			tempCss:
				src: ['./dist/tempCss/']

		requirejs:
			options:
				baseUrl: '<%= pkg.path.dist.tempJs %>'
				#baseUrl: './'
				optimize: 'uglify'	# 压缩方式（此处选择不压缩是因为，不知为何会把注释段提到文本开头位置）
				removeCombined: true	# 删除之前压缩合并的文件
				preserveLicenseComments: false	# 不保留License信息

			cssCommon:
				options:
					cssIn: '<%= pkg.path.src.styles %>main.css'	# 配置文件目录
					out: '<%= pkg.path.dist.css %>index.css'	# 输出文件
					optimizeCss: 'standard'	# 压缩方式

			jsMain:
				options:
					mainConfigFile: '<%= pkg.path.dist.tempJs %>main.js'	# 配置文件目录
					name: 'main'
					out: '<%= pkg.path.dist.js %>app.js'
					exclude: [
						'jquery'
						'jquery.form'
					]

		uglify:
			options:
				ie8: true
				preserveComments: 'some'

			#test:
				# files: [
				# 	expand: true
				# 	cwd: '<%= pkg.path.dist.tempJs %>'
				# 	src: ['*.js']
				# 	dest: '<%= pkg.path.dist.scripts %>'
				# ]

			forTpls:
				files: [
					expand: true
					cwd: '<%= pkg.path.dist.templates %>'
					src: ['*.js']
				]

			jsSingleFiles:
				files:
					'<%= pkg.path.dist.js %>ie-blocker.js': '<%= pkg.path.dist.tempJs %>ie-blocker.js'

			forBower:
				files: '<%= pkg.bower.uglifyfiles %>'

		sass:
			dist:
				options:
					sourcemap: 'none'
				files: [
					expand: true
					cwd: '<%= pkg.path.src.styles %>'
					src: ['*.sass']
					dest: '<%= pkg.path.dist.tempCss %>'
					ext: '.css'
				]

		copy:
			forNpm:
				files:
					'<%= pkg.path.assets %>sockjs.min.js': '<%= pkg.path.node_modules %>sockjs-client/dist/sockjs.min.js'
					'<%= pkg.path.assets %>stomp.min.js': '<%= pkg.path.node_modules %>stompjs/lib/stomp.min.js'
					'<%= pkg.path.assets %>polyfill.min.js': '<%= pkg.path.node_modules %>@babel/polyfill/dist/polyfill.min.js'
					'<%= pkg.path.assets %>velocity.min.js': '<%= pkg.path.node_modules %>velocity-animate/velocity.min.js'
					'<%= pkg.path.assets %>jquery.form.min.js': '<%= pkg.path.node_modules %>jquery-form/dist/jquery.form.min.js'
					'<%= pkg.path.assets %>twemoji.min.js': '<%= pkg.path.node_modules %>twemoji/2/twemoji.min.js'
			forIE8L:
				files:
					'<%= pkg.path.dist.css %>ie-blocker.css': '<%= pkg.path.dist.tempCss %>ie-blocker.css'
			forTpls:
				files: [
					expand: true
					cwd: '<%= pkg.path.src.templates %>'
					src: ['**']
					dest: '<%= pkg.path.dist.templates %>'
				]
			forImages:
				files: [
					expand: true
					cwd: '<%= pkg.path.src.images %>'
					src: ['**']
					dest: '<%= pkg.path.dist.images %>'
				]
			forFonts:
				files: [
					expand: true
					cwd: '<%= pkg.path.src.styles %>'
					src: ['fonts/**']
					dest: '<%= pkg.path.dist.tempCss %>'
				]
			forFavicon:
				files:
					'<%= pkg.path.dist.path %>favicon.ico': '<%= pkg.path.src.path %>favicon.ico'
			forTwemojiPics:
				files: [
					expand: true
					cwd: '<%= pkg.path.src.images %>twemoji/'
					src: ['**']
					dest: '<%= pkg.path.dist.images %>twemoji/'
				]

		cssmin:
			forBower:
				files: '<%= pkg.bower.cssminfiles %>'
			forCompiled:
				files: [
					expand: true
					cwd: '<%= pkg.path.dist.tempCss %>'
					src: [
						'index.css'
					]
					dest: '<%= pkg.path.dist.tempCss %>'
				]

		autoprefixer:
			options:
				browsers: ['last 2 versions', 'ie 8']
			styles:
				src: [
					'<%= pkg.path.dist.tempCss %>base.css'
				]

		babel:
			options:
				presets: ['@babel/preset-env']
			forJs:
				files: [
					expand: true
					cwd: '<%= pkg.path.dist.tempJs %>'
					src: ['*.js']
					dest: '<%= pkg.path.dist.tempJs %>'
				]
			forTpls:
				files: [
					expand: true
					cwd: '<%= pkg.path.dist.templates %>'
					src: ['*.js']
					dest: '<%= pkg.path.dist.templates %>'
				]

		coffee:
			options:
				sourceMap: false
			root:
				options:
					sourceMapDir: '<%= pkg.path.sourceMap %>'
				files: [
					expand: true
					cwd: '<%= pkg.path.src.scripts %>'
					src: ['*.coffee']
					dest: '<%= pkg.path.dist.tempJs %>'
					ext: '.js'
				]

		pug:
			prd:
				options:
					#amd: true
					client: true
					namespace: 'ALPHA.tpls'
					processName: (path) ->
						name = path.match /.*\/(\w+)\.pug/
						name = name[1]
						# console.log path, name
						name
				files: [
					expand: true
					cwd: '<%= pkg.path.src.templates %>'
					src: ['*.pug']
					dest: '<%= pkg.path.dist.templates %>'
					ext: '.js'
				]
			index:
				files:
					'<%= pkg.path.dist.path %>/index.html': '<%= pkg.path.src.path %>/index.pug'

		'string-replace':
			forTpls:
				options:
					replacements: [
						pattern: /\}function/g
						replacement: '};function'
					]
				files: [
					expand: true
					cwd: '<%= pkg.path.dist.templates %>'
					src: ['*.js']
					dest: '<%= pkg.path.dist.templates %>'
				]


	# 任务加载
	require('load-grunt-tasks') grunt, scope: 'devDependencies'

	grunt.registerTask 'x-assets', ['clean:assets', 'bowercopy', 'uglify:forBower', 'cssmin:forBower', 'clean:forBower', 'copy:forNpm']
	grunt.registerTask 'x-styles', [
		'sass'
		'copy:forFonts'
		'cssmin:forCompiled'
		'autoprefixer'
		'requirejs:cssCommon'
		'copy:forIE8L'
		'clean:tempCss'
	]

	grunt.registerTask 'x-scripts', [
		'coffee'
		'babel:forJs'
		'requirejs:jsMain'
		'uglify:jsSingleFiles'
		'clean:tempJs'
	]

	grunt.registerTask 'x-tpls', [
		'pug:index'
		'clean:templates'
		'copy:forTpls'
	]
	grunt.registerTask 'x-tpls1', [
		'pug:index'
		'clean:templates'
		'pug:prd'
		'string-replace:forTpls'
		'uglify:forTpls'
		#'babel:forTpls'
	]

	grunt.registerTask 'x-watch', ['coffee', 'sass', 'watch']

	grunt.registerTask 'x-compile', [
		'x-assets'
		'x-tpls'
		'x-scripts'
		'clean:templates'
		'x-styles'
		'copy:forImages'
	]

	grunt.registerTask 'default', [
		'x-compile'
		'copy:forFavicon'
		'copy:forTwemojiPics'
		'watch:test'
	]


