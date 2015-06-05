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
				url: '/createSite/summary',
				controller: 'CreateSummaryController',
				controllerAs: 'createSummaryController',
				templateUrl: 'app/createSite/createSummary.partial.html'
			})
			.state('app.create.details', {
				url: '/createSite/details',
				controller: 'CreateDetailsController',
				controllerAs: 'createDetailsController',
				templateUrl: 'app/createSite/createDetails.partial.html'
			})
			.state('app.create.photos', {
				url: '/createSite/photos',
				controller: 'CreatePhotosController',
				controllerAs: 'createPhotosController',
				templateUrl: 'app/createSite/createPhotos.partial.html'
			});
		
	}
	
}(window));