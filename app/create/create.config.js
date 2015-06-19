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
				controller: 'CreateSummaryController',
				controllerAs: 'CreateSummaryController',
				templateUrl: 'app/create/createSummary.partial.html'
			})
			.state('app.create.details', {
				url: '/create/details',
				controller: 'CreateDetailsController',
				controllerAs: 'CreateDetailsController',
				templateUrl: 'app/create/createDetails.partial.html'
			})
			.state('app.create.photos', {
				url: '/create/photos',
				controller: 'CreatePhotosController',
				controllerAs: 'CreatePhotosController',
				templateUrl: 'app/create/createPhotos.partial.html'
			});
		
	}
	
}(window));