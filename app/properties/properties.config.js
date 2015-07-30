(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator.create')
		.config(config);
	
	config.$inject = ['$stateProvider'];
	
	function config($stateProvider) {
		
		$stateProvider
			.state('app.create', {
				url: '',
				abstract: true,
				controller: 'CreateController',
				controllerAs: 'createController',
				template: '<ui-view/>'
			})
			.state('app.create.summary', {
				url: '/create/summary',
				templateUrl: 'app/create/createSummary.partial.html'
			})
			.state('app.create.details', {
				url: '/create/details',
				templateUrl: 'app/create/createDetails.partial.html'
			})
			.state('app.dashboard', {
				url: '/dashboard',
				controller: 'DashboardController',
				controllerAs: 'DashboardController',
				templateUrl: 'app/dashboard/dashboard.partial.html'
			})
			.state('app.create.photos', {
				url: '/create/photos',
				templateUrl: 'app/create/createPhotos.partial.html'
			});
		
	}
	
}(window));