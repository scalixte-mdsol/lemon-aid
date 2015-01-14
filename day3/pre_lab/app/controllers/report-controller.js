'use strict';

/**
 * Report Controller for the reporting of sales.
 **/
 app.controller('ReportController', ['$scope', function($scope) {

 	$scope.carMake = 'Nissan';
 	$scope.carModel = 'Leaf';

	$scope.setAReference = function(carModel, carMake) {
		$scope.carModel = carModel;
		$scope.carMake = carMake;
	}; 	

 }]);