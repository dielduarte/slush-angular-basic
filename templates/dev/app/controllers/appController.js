/**
	*
	* AppController
	*
	* @author Diel Duarte
	* 
	* @dependency - $http
	*
**/
(function(){
	'use strict'
	angular
		.module('app')
		.controller('appController', appController);

		//inject dependency	
		appController.$inject = [	'$http',
															'$location' ];

		/**
			*
			* appController
			*
			* @author Diel Duarte
			* 
			* @dependency - $http, 
			*								$location 
			*
		**/

		function appController($http, $location) {
			var vm = this;
		}; // end appController

})();