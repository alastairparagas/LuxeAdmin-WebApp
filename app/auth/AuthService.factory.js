(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator')
		.factory('AuthService', AuthService);
	
	AuthService.$inject = ['$rootScope', '$q', '$http', '$state', '$window'];
	
	function AuthService($rootScope, $q, $http, $state, $window) {
		
		var _loggedIn,
			_loggedInUser;
		
		(function bootstrap() {
			_resetAuth();
			
			function authGuard(event, toState, toParams, 
										  fromState, fromParams) {
				var statePermissions = toState && 
						toState.data && 
						toState.data.permissions;
				
				if (statePermissions && angular.isArray(statePermissions)) {
					if (!isLoggedIn()) {
						event.preventDefault();
						$state.go('app.login');
					} else {
						var matchedPermissions = 
							statePermissions.filter(function (element) {
								if (getUser().permissions.indexOf(element) > -1) {
									return true;
								}
								return false;
							});
						if (matchedPermissions.length !== 
								statePermissions.length) {
							event.preventDefault();
							$state.go('app.login');
						}
					}
				}
				
			}
			$rootScope.$on('$stateChangeStart', authGuard);
		}());
		
		return {
			isLoggedIn: isLoggedIn,
			login: login,
			logout: logout,
			getUser: getUser
		};
		
		function _resetAuth() {
			_loggedIn = false;
			_loggedInUser = {
				name: null,
				id: null,
				clientToken: null,
				email: null,
				permissions: []
			};
			$window.sessionStorage.removeItem('session');
		}
		
		function isLoggedIn() {
			return _loggedIn;
		}
		
		function login(username, password) {
			
			function execute(resolve, reject) {
				if (username && password) {
					_resetAuth();
					_loggedIn = true;
					_loggedInUser = {
						name: "Alastair Paragas",
						id: "1",
						clientToken: "",
						email: "alastairparagas@gmail.com",
						permissions: ['publish', 
									  'create', 
									  'administrate_users']
					};
					
					$window
						.localStorage
						.setItem('session', JSON.stringify(_loggedInUser));
					resolve();
				} else {
					var savedUser = 
							JSON.parse($window.localStorage.getItem('session'));
					
					if (savedUser && angular.isObject(savedUser) &&
					   		savedUser.hasOwnProperty('name') &&
					   		savedUser.hasOwnProperty('id') &&
					   		savedUser.hasOwnProperty('clientToken') &&
					   		savedUser.hasOwnProperty('email') &&
					   		savedUser.hasOwnProperty('permissions')) {
						_loggedInUser = savedUser;
						_loggedIn = true;
						resolve();
					} else {
						reject();	
					}
				}
			}
			
			return $q(execute);
		}
		
		function logout() {
			function execute(resolve, reject) {
				_resetAuth();
				resolve();
			}
			
			return $q(execute);
		}
		
		function getUser() {
			return angular.copy(_loggedInUser);
		}
		
	}
	
}(window));