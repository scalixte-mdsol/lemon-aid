'use strict';

/**
 * Configure our application to give us basic routing
 **/
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	//Take me to the lemonaide route
	$urlRouterProvider.otherwise('/lemonaide/');

	$stateProvider
		//Base lemonaide state ... /lemonaide
		//	automatically redirects to lemonaide/ because of otherwise above
		.state('lemonaide', {
			url:'/lemonaide',
			abstract: true,
			views: {
				'': {
					template: '<div ui-view></div>'
				},
				'header': {
					templateUrl: 'app/views/header.html',
					controller: 'HeaderController'
				},
				'footer': {
					templateUrl: 'app/views/footer.html',
					controller: 'FooterController'					
				}
			}			
		})
		//home state ... /lemonaide/home
		.state('home', {
			url:'/',
			parent: 'lemonaide',
			templateUrl: 'app/views/home.html',
			controller: 'HomeController'
		});
}]);

