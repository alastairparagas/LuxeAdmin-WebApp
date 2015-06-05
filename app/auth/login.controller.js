(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator')
		.controller('LoginController', LoginController);
	
	LoginController.$inject = ['$state', 'AuthService'];
	
	function LoginController($state, AuthService) {
		
		var $this = this;
		
		if (AuthService.isLoggedIn()) {
			$state.go('app.dashboard');
		}
		
		$this.message = "";
		
		$this.login = function login(username, password) {
			AuthService
				.login(username, password)
				.then(function loginSuccess() {
					$state.go('app.dashboard');
				}, function loginFailure(errorMessage) {
					$this.message = errorMessage;
				});
		};
		
	}
	
}(window));