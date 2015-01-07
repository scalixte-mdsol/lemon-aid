'use strict';
/**
 * Controller handling the lemon report listing directives
 **/
app.controller('LemonReportListingController', ['$scope', function($scope) {
	var PROFIT_BREAK = 200;

	//Communicate to the child directive the grossProfit and profitability
	this.grossProfit = $scope.reportItem.netSale - $scope.reportItem.costOfGoods;
	this.profitable = this.grossProfit > PROFIT_BREAK ? true : false;
}]);

/**
 * Directive for each report item
 *	parent directive holding report listing footers
 **/
app.directive('lemonReportListingContainer', function() {

	return {
		//Only want attribute directive
		restrict: 'EA',  
		//Isolate scope
    	scope: {
    		//2 way binding on a report object
    		reportItem: '=',
    		//Referencing a method on the parent scope
    		action: '&'
    	},
    	//Include user-defined HTML
    	transclude: true,
    	//We want to deal with an external template
		templateUrl: '/templates/directive/report-listing.html',
		//Utilizing the lemonReportListingController
		controller: 'LemonReportListingController',
		//Link function handles selected click
		link: function(scope, instanceElement, instanceAttrs, lemonReportListingController, transcludeFunction) {

			//Setting flag on parent controller
			scope.reportItem.profitable = lemonReportListingController.profitable;

			//Setting the selected item
			scope.showSelected = function() {
				scope.action({selectedReport: scope.reportItem});
			};

			//Setting up binding on a report item to make it selected
			instanceElement.bind('click', function() {
				//Utilizing jqLite DOM crawling
				//	Removing all 'selected' classes
				instanceElement.parent().children().removeClass('selected');
				//Adding a 'selected' class to the clicked report item
				instanceElement.addClass('selected');
			});
		}
	};
});

app.directive('lemonReportListingFooter', function() {
	
	//Static URL images to display for footer
	var URL = [
		'/images/thumbsUp.png',
		'/images/smiley_face.jpg',
		'/images/hands_clapping.png'
	];

	return {
		//Only want attribute directive
		restrict: 'EA',  
		//No special scope needed
    	scope: {
    		reportProperties: '='
    	},
    	//Requires Lemon Report Listing Outer
    	require: '^lemonReportListingContainer',
 
    	//We want to deal with an external template
    	template: '<footer><img ng-if="profitable" ng-src="{{goodImage}}" alt="Good jiorb" /> Gross Profit: {{grossProfit}}</footer>',
		/**
		 * @param scope
		 * @param instanceElement: <div lemon-report-listing-inner></div>
		 * @param instanceAttrs: attributes on the <div lemon-report-listing-inner></div>
		 *		- In this case none
		 * @param lemonReportListingController: instance of Lemon Report Listing Controller
		 **/
		link: function(scope, instanceElement, instanceAttrs, lemonReportListingController) {
			
			//Setting the footer to be shown
			scope.reportProperties.footerShown = true;
			//Set image url on the controller
			scope.reportProperties.footerImgUrl = URL[0];
			
			//Grab needed controller variables 
			scope.grossProfit = lemonReportListingController.grossProfit;
			scope.profitable = lemonReportListingController.profitable;

			//Choose a random image for footer
			var imageChoice = Math.round(Math.random()*2);
			scope.goodImage = URL[imageChoice];

		}	
	};
});