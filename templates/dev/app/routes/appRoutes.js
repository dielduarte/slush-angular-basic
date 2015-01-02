(function() {
	'use strict';

	angular
		.module('app')
		.config(['$routeProvider', routes]);
 
	function routes($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/index.html'
			}).
			otherwise({
        		redirectTo: '/'
      		});
	}

})();