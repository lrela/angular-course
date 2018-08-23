(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/main-categories.template.html',
    controller: 'CategoriesController as catCtrl',
		resolve: {
			categories: ['MenuDataService', function ( MenuDataService) {
				return MenuDataService.getAllCategories();
            }]
        }	
  });
  
  console.log('routes');
}

})();
