(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator.auth')
		.config(config);
	
	config.$inject = ['$stateProvider'];
	
	function config($stateProvider) {
		
		$stateProvider
			.state('app.login', {
				url: '/login',
				controller: 'LoginController',
				controllerAs: 'LoginController',
				templateUrl: 'app/auth/login.partial.html'
			});
		
	}
	
}(window));