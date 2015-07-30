(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator.dashboard')
		.config(config);
	
	config.$inject = ['$stateProvider'];
	
	function config($stateProvider) {
		
		$stateProvider
			.state('app.dashboard', {
				url: '/dashboard',
				controller: 'DashboardController',
				controllerAs: 'DashboardController',
				templateUrl: 'app/dashboard/dashboard.partial.html'
			});
		
	}
	
}(window));