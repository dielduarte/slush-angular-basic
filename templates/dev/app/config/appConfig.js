/**
	*
	* AppRoutes.js
	*
	*
	*	This file contens all config for app
	* routes, httpProviders and others..
	* 
	* @dependency - $routeProvider
	* @dependency - $httpProvider
	*
**/
(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

		//inject dependencies for config function
		config.$inject = ['$routeProvider', '$httpProvider'];
 		
 		//config function 
		function config($routeProvider, $httpProvider) {

			$routeProvider.
				when('/', {
					templateUrl: 'views/index.html'
				}).
				otherwise({
	        redirectTo: '/'
	      });

		}


})();