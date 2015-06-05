(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator')
		.run(run);
	
	run.$inject = ['$state', '$timeout', 'AuthService'];
	
	function run($state, $timeout, AuthService) {
		
		AuthService
			.login()
			.then(function loginSuccess() {
				// State.go bug. Wrap in timeout call
				$timeout(function() {
					$state.go('app.dashboard');
				});
			});
		
	}
	
}(window));