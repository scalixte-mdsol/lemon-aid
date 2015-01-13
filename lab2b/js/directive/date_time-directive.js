/**
 * Created by scalixte on 1/7/15.
 */
'use strict';
/**
 *  Directive to be used across all page headers.
 **/
app.directive('dateTime', function() {
    return {
        restrict: 'EA',
        //Isolate scope
        scope: {
            day: '@',
            action: '&'
        },
        //Include user-defined HTML
        transclude: true,
        //We want to deal with an external template
        templateUrl: '/templates/directive/date-time.html',
        link: function(scope) {
            scope.day = new Date().toLocaleString();
        }
    };
});