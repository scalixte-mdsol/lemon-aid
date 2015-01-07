'use strict';
/**
 *  Directive to be used across all page headers.
 **/
app.directive('diHomeBiDirectionalObject', function() {
	return {
        //Only allowing element and attribute implementations
		restrict: 'EA',
		scope: {
            //Bi-directional binding strategy
			diLinkArgs: '=',
		},
        //Inline template for simplicity
        //  The only place we can do the one time binding is on the property itself
        //  i.e. we couldn't do the following in our template declaration:
        //      <di-home-bi-directional-object di-link-args="::linkArgs"></di-home-bi-directional-object>
    	template: '<p><a href="{{diLinkArgs.diUrl}}" target="_blank">{{diLinkArgs.diLinkText}}</a> <button>Change Me!</button></p>',
    	/**
         * Handles user interaction with the directive.
         * @param scope: the scope connected with the directive
         * @param instanceElement: the rendered directive element
         **/
        link: function(scope, instanceElement) {
            console.log('link args: diLinkArgs.diLinkText:' + scope.diLinkArgs.diLinkText);
            //Utilizing jQlite for handling a click from user
    		instanceElement.bind('click', function() {
                //Forcing a kick-off of the Angular digest loop
    			scope.$apply(function() {
                    //What will happen with a one-time binding?
                    //  Will the diLinkText on the parent scope be changed?
    				scope.diLinkArgs.diLinkText = 'Changed';
    			});	
    		});
    	}
	};
});





