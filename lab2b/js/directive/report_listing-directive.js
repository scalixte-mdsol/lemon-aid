'use strict';

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
		/** 
		 * Link function - Different form of transclusion 
		 * - Doesn't utilize the ng-transclude directive
		 * - Utilizes transclude function parameter in the link function signature
 		 **/
		link: function(scope, instanceElement, instanceAttrs, lemonReportListingController, transcludeFunction) {
			console.log('link parent');
			
			//Set the grossProfit on the parent controller
			scope.reportItem.grossProfit = scope.reportItem.netSale - scope.reportItem.costOfGoods;

			//Setting flag on parent controller
			scope.reportItem.profitable = scope.reportItem.grossProfit > 200 ? true : false;

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

			//Utilizing the transclude function instead of the ng-transclude
			transcludeFunction(scope, function(clone) {
				//Decoration
				instanceElement.append(clone);
			});
		}
	};
});

/**
 * Footer to be placed within our report listing directive.
 **/
app.directive('lemonReportListingFooter', function() {
	console.log('directive');
	//Static URL images to display for footer
	var URL = [
		'/images/thumbsUp.png',
		'/images/smiley_face.jpg',
		'/images/hands_clapping.png'
	];

	return {
		//Only want attribute directive
		restrict: 'EA',   
    	//We want to deal with an external template
    	template: '<footer><img ng-if="reportItem.profitable" ng-src="{{goodImage}}" alt="Good jiorb" /> Gross Profit: {{grossProfit}}</footer>',
		/**
		 * Compiling the non-DOM essential information.
		 **/
		compile: function() {
			console.log('compile child');
			/**
			 * Choose a new number based on a random seed.
			 * @return a URL string that will be interpolated into an ng-src image
			 **/
			var chooseImage = function() {
				var imageChoice = Math.round(Math.random()*2);
				return URL[imageChoice];
			};

			/**
			 * Link function
			 **/
			return function(scope) {
					console.log('link child');
					//Setting the footer to be shown
					scope.reportItem.footerShown = true;
					//Set image url on the controller
					scope.reportItem.footerImgUrl = URL[0];
					//Setup a default image
					scope.goodImage = chooseImage();
				};
		}
	};
});