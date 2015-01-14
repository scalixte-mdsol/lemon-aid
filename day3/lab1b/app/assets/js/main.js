'use strict';

//Creating an angular app
var app = angular.module('lemonadeApp', 
	['ui.router', 'app.filters'])
		.run(['$rootScope', '$state', '$stateParams', 
			function($rootScope, $state, $stateParams) {
				//Allows us to access state across all scopes
				$rootScope.$state = $state;
		        $rootScope.$stateParams = $stateParams;
			}]);
