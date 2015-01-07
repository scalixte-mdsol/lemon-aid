'use strict';
/**
 *  Directive to be used across all page headers.
 **/
app.directive('diHomeLocal', function() {
	return {
        //Only allowing element and attribute implementations
		restrict: 'EA',
		scope: {
            //Local scope binding strategy
			diUrl: '@',
            //Local binding strategy
			diLinkText: '@'
		},
        //Inline template for simplicity
    	template: '<p><a href="{{diUrl}}" target="_blank">{{diLinkText}}</a> <button>Change Me!</button></p>',
    	/**
         * Handles user interaction with the directive.
         * @param scope: the scope connected with the directive
         * @param instanceElement: the rendered directive element
         **/
        link: function(scope, instanceElement) {
            //Utilizing jQlite for handling a click from user
    		instanceElement.bind('click', function() {
                //Forcing a kick-off of the Angular digest loop
    			scope.$apply(function() {
                    //What will happen if we change the diLinkText scope property?
                    //  Will the diLinkText on the parent scope be changed?
    				scope.diLinkText = 'Changed';
    			});	
    		});
    	}
	};
});





