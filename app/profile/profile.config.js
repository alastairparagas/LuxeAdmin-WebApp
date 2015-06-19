(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator.profile')
		.config(config);
	
	config.$inject = ['$stateProvider'];
	
	function config($stateProvider) {
		
		$stateProvider
			.state('app.profile', {
				url: '',
				abstract: true,
				template: '<ui-view/>'
			})
			.state('app.profile.edit', {
				url: '/profile/edit',
				controller: 'ProfileEditController',
				controllerAs: 'ProfileEditController',
				templateUrl: 'app/profile/profileEdit.partial.html'
			});
		
	}
	
}(window));