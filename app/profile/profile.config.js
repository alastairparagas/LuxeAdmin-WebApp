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
			.state('app.profile.manage', {
				url: '/profile/manage',
				controller: 'ProfileManageController',
				controllerAs: 'ProfileManageController',
				templateUrl: 'app/profile/profileManage.partial.html'
			})
			.state('app.profile.edit', {
				url: '/profile/:id/edit',
				controller: 'ProfileEditController',
				controllerAs: 'ProfileEditController',
				templateUrl: 'app/profile/profileEdit.partial.html'
			})
			.state('app.profile.create', {
				url: '/profile/create',
				controller: 'ProfileCreateController',
				controllerAs: 'ProfileCreateController',
				templateUrl: 'app/profile/profileCreate.partial.html'
			});
		
	}
	
}(window));