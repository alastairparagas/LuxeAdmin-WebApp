(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator')
		.config(config);
	
	config.$inject = ['$stateProvider', '$urlRouterProvider', 
					  '$compileProvider'];
	
	function config($stateProvider, $urlRouterProvider, 
					 $compileProvider) {
		
		$stateProvider
			.state('app', {
				url: '',
				abstract: true,
				controller: 'AppController',
				controllerAs: 'AppController',
				templateUrl: 'app/app.partial.html'
			});
		
		$urlRouterProvider.otherwise('/login');
		
		$compileProvider.debugInfoEnabled(true);
		
	}
	
}(window));