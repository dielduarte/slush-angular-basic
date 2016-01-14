module.exports = function(config) {
	
  var wiredep = require('wiredep');
  var bowerFiles = wiredep({devDependencies: true}).js;

  config.set({

		basePath: './',
			
		frameworks: ['jasmine'],

	  angularFilesort: {
		  whitelist: [
			  'app/**/*.js'
		  ]
	  },

		files: bowerFiles.concat([
			'app/common/config/env.js',	
			'app/app.js',
			'app/common/config/app.routes.js',
			'test/**/*.js'
		]),

		exclude: [
		],

		preprocessors: {
			"app/**/*.js": ["coverage"]
		},

		reporters: ["mocha", "coverage"],

		port: 9876,

		colors: true,

		logLevel: config.LOG_INFO,

		autoWatch: true,

		browsers: ['PhantomJS'],

		singleRun: false
  })
}
