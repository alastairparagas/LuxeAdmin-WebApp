(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator')
		.run(run);
	
	run.$inject = ['$state', '$timeout', 'AuthService'];
	
	function run($state, $timeout, AuthService) {
		
		AuthService.initialize();
		
		AuthService
			.login()
			.then(function loginSuccess() {
				$timeout(function() {
					if ($state.is('app.login')) {
						$state.go('app.dashboard');
					}
				});
			});
		
	}
	
}(window));