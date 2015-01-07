'use strict';

/**
 * Report Controller for the reporting of sales.
 **/
 app.controller('ReportController', ['$scope', function($scope) {
 	
 	//Setting the page properties
 	$scope.page = {
 		title: 'Sales History'
 	};

  //Report information
  $scope.report = {
    limit: 24,
    selectedReport: ''
  };

  /**
   * Allows for a selected report to be analyed.
   * @param reportToShow will show the report the user clicks
   **/
  $scope.setSelectedReport = function(reportToShow) {
    $scope.report.selectedReport = reportToShow;
  };

  //Simple sales data
 	$scope.sales = [{
 		date: '1-1-2012',
 		quantity: '500',
 		netSale: '750',
 		costOfGoods: '400'
 	}, {
  		date: '2-1-2012',
 		quantity: '425',
 		netSale: '650',
 		costOfGoods: '300'			
 	}, {
  		date: '3-1-2012',
 		quantity: '300',
 		netSale: '450',
 		costOfGoods: '300'
 	}, {
  		date: '4-1-2012',
 		quantity: '600',
 		netSale: '750',
 		costOfGoods: '400'
 	}, {
  		date: '5-1-2012',
 		quantity: '100',
 		netSale: '250',
 		costOfGoods: '175'			
 	}, {
  		date: '6-1-2012',
 		quantity: '100',
 		netSale: '250',
 		costOfGoods: '150' 		 		 	
 	}, {
  		date: '7-1-2012',
 		quantity: '425',
 		netSale: '750',
 		costOfGoods: '400'			
 	}, {
  		date: '8-1-2012',
 		quantity: '300',
 		netSale: '450',
 		costOfGoods: '250'
 	}, {
  		date: '9-1-2012',
 		quantity: '650',
 		netSale: '850',
 		costOfGoods: '650'			
 	}, {
  		date: '10-1-2012',
 		quantity: '100',
 		netSale: '350',
 		costOfGoods: '250'
 	}, {
  		date: '11-1-2012',
 		quantity: '100',
 		netSale: '350',
 		costOfGoods: '250' 		 		 	
 	}, {
  		date: '12-1-2012',
 		quantity: '300',
 		netSale: '450',
 		costOfGoods: '250'			
 	}, {
 		date: '1-1-2013',
 		quantity: '300',
 		netSale: '550',
 		costOfGoods: '350'
 	}, {
  		date: '2-1-2013',
 		quantity: '650',
 		netSale: '750',
 		costOfGoods: '450'			
 	}, {
  		date: '3-1-2013',
 		quantity: '300',
 		netSale: '450',
 		costOfGoods: '250'
 	}, {
  		date: '4-1-2013',
 		quantity: '650',
 		netSale: '850',
 		costOfGoods: '650'
 	}, {
  		date: '5-1-2013',
 		quantity: '100',
 		netSale: '350',
 		costOfGoods: '150'			
 	}, {
  		date: '6-1-2013',
 		quantity: '100',
 		netSale: '250',
 		costOfGoods: '150' 		 		 	
 	}, {
  		date: '7-1-2013',
 		quantity: '500',
 		netSale: '350',
 		costOfGoods: '250'			
 	}, {
  		date: '8-1-2013',
 		quantity: '500',
 		netSale: '750',
 		costOfGoods: '550'
 	}, {
  		date: '9-1-2013',
 		quantity: '650',
 		netSale: '850',
 		costOfGoods: '550'			
 	}, {
  		date: '10-1-2013',
 		quantity: '300',
 		netSale: '550',
 		costOfGoods: '350'
 	}, {
  		date: '11-1-2013',
 		quantity: '100',
 		netSale: '350',
 		costOfGoods: '250' 		 		 	
 	}, {
  		date: '12-1-2013',
 		quantity: '150',
 		netSale: '450',
 		costOfGoods: '150'
 	}];

}]);