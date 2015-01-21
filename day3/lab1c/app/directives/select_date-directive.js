/**
 * Created by scalixte on 1/14/15.
 */
'use strict';
/**
 *  Directive to be used across all page headers.
 **/
app.directive('selectDate', ['$parse',function() {
    return {
        restrict: 'AE',
        replace: true,
        scope: true,
        templateUrl: '/app/views/directive/select-date.html',

        compile: function(templateElement, templateAttributes) {
            //Compile phase work here
            return function(){
                //Link phase work here
            };
        }

    };
}]);
