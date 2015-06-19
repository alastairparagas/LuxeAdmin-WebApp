(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular
		.module('luxeSiteGenerator', ['ui.router',
									  'luxeSiteGenerator.profile',
									  'luxeSiteGenerator.api',
									  'luxeSiteGenerator.auth',
									  'luxeSiteGenerator.dashboard',
									  'luxeSiteGenerator.create']);
	
}(window));