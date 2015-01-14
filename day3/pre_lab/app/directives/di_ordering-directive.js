'use strict';
/**
 *  First directive fun.
 **/
app.directive('diFirst', function() {
    return {
        //Lowest priority of the bunch
        priority: 1,
        controller: function() {
            console.log('First controller');
        },
        // /**  Compile straight up **/
        // compile: function() {
        //     console.log('First compile');
        // },
        // /**  Compile returning a linking function **/
        // compile: function() {
        //     console.log('First compile');
        //     return function() {
        //         console.log('First link');
        //     };
        // },
        // /**  Compile returning pre/post link functions **/
        // compile: function(templateElement, templateAttributes) {
        //     console.log('First compile');
        //     return {
        //         pre: function(scope, instanceElement, instanceAttributes) {
        //             console.log('First pre-link');
        //             instanceElement.addClass('hat');
        //             var listElement = angular.element('<li>Hat is a go...</li>');
        //             instanceElement.append(listElement);

        //         },
        //         post: function(scope, instanceElement, instanceAttributes) {
        //             console.log('First post-link');
        //             var listElement = angular.element('<li>First is a go...</li>');
        //             instanceElement.append(listElement);
        //             instanceElement.parent().css({backgroundColor: 'orange'});
        //             instanceElement.addClass('shoe');
        //         }
        //     };
        // }
        // /**  Link straight up **/
        link: function(scope, instanceElement) {
            console.log('First link');
            var listElement = angular.element('<li>First is a go...</li>');
            instanceElement.append(listElement);
            instanceElement.parent().css({backgroundColor: 'orange'});
        }        
    };
});

/**
 *  Second directive fun.
 **/
app.directive('diSecond', function() {
    return {
        priority: 2,
        controller: function() {
            console.log('Second controller');
        },       
        // /**  Compile straight up **/
        // compile: function() {
        //     console.log('Second compile');
        // },
        // /**  Compile returning a linking function **/        
        // compile: function() {
        //     console.log('Second compile');
        //     return function() {
        //         console.log('Second link');
        //     };
        // },        
        // /**  Compile returning pre/post link functions **/
        // compile: function() {
        //     console.log('Second compile');
        //     return {
        //         pre: function() {
        //             console.log('Second pre-link');
        //         },
        //         post: function() {
        //             console.log('Second post-link');
        //         }
        //     };
        // } 
        /**  Link straight up **/                  
        link: function(scope, instanceElement) {
            console.log('Second link');            
            var listElement = angular.element('<li>Second is a go...</li>');
            instanceElement.append(listElement);
            instanceElement.parent().css({backgroundColor: 'pink'});
        }        
    };
});

/**
 *  Third directive fun.
 **/
app.directive('diThird', function() {
    return {
        priority: 3,
        controller: function() {
            console.log('Third controller');
        },        
        // /**  Compile straight up **/        
        // compile: function() {
        //     console.log('Third compile');
        // },
        // /**  Compile returning a linking function **/        
        // compile: function() {
        //     console.log('Third compile');
        //     return function() {
        //         console.log('Third link');
        //     };
        // }, 
        // /**  Compile returning pre/post link functions **/        
        // compile: function() {
        //     console.log('Third compile');
        //     return {
        //         pre: function() {
        //             console.log('Third pre-link');
        //         },
        //         post: function() {
        //             console.log('Third post-link');
        //         }
        //     };
        // } 
        /**  Link straight up **/                    
        link: function(scope, instanceElement) {
            console.log('Third link');
            instanceElement.append('<li>Third is a go...</li>');
            instanceElement.parent().css({backgroundColor: 'blue'});
        }        
    };      
});

/**
 *  Fourth directive fun.
 **/
app.directive('diFourth', function() {
    return {
        //Highest priority of the bunch
        priority: 4,
        controller: function() {
            console.log('Fourth controller');
        },        
        // /**  Compile straight up **/        
        // compile: function() {
        //     console.log('Fourth compile');
        // },
        // /**  Compile returning a linking function **/        
        // compile: function() {
        //     console.log('Fourth compile');
        //     return function() {
        //         console.log('Fourth link');
        //     };
        // }, 
        // /**  Compile returning pre/post link functions **/        
        // compile: function() {
        //     console.log('Fourth compile');
        //     return {
        //         pre: function() {
        //             console.log('Fourth pre-link');
        //         },
        //         post: function() {
        //             console.log('Fourth post-link');
        //         }
        //     };
        // }
        // /**  Link straight up **/                   
        link: function(scope, instanceElement) {
            console.log('Fourth link boat');
            instanceElement.append('<li>Fourth is a go...</li>');
            instanceElement.parent().css({backgroundColor: 'firebrick'});
        }        
    };      
});





