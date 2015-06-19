(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator')
		.controller('AppController', AppController);
	
	AppController.$inject = ['$state', 'AuthService'];
	
	function AppController($state, AuthService) {
		
		var $this = this;
		
		$this.user = AuthService.getUser();
		
		$this.isLoggedIn = function () {
			return AuthService.isLoggedIn();
		};
		
		$this.logout = function logout() {
			AuthService
				.logout()
				.then(function logoutSuccess() {
					$state.go('app.login');	
				}, function logoutFailure(errorMessage) {
					$this.message = errorMessage;
				});
		};
		
	}
	
}(window));