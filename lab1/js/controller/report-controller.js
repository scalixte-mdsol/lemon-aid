'use strict';

/**
 * Report Controller for the reporting of sales.
 **/
 app.controller('ReportController', ['$scope', function($scope) {
 	
 	//Setting the page properties
 	$scope.page = {
 		title: 'Sales History'
 	};

 	//Scope property interaction
  	$scope.diUrl = 'http://www.developintelligence.com';
  	$scope.diLinkText = 'Welcome home';

  	//Scope object based interaction
 	$scope.linkArgs = {
 		diUrl: 'http://www.developintelligence.com',
 		diLinkText: 'Welcome home'
 	};

 	$scope.modifyScopeObject = function() {
 		console.log('changing the $scope');
 		//Only used for scope property interaction
 		$scope.diLinkText = 'Changed';
 		//Only used for scope object interaction
 		$scope.linkArgs.diLinkText = 'Changed';
 	};

 }]);