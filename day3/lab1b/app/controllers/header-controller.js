'use strict';

/**
 * Header Controller for the application header.
 **/
 app.controller('HeaderController', 
 	['$scope', 
 		function($scope) {
 	
 	var date = new Date();

 	//Setting the page properties
 	$scope.date = {
 		human: date,
 		machine: date
 	};

 }]);