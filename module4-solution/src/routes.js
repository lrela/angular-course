(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider

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
  })

  .state('items', {
	url: '/items/{categoryName}',
    templateUrl: 'src/main-items.template.html',
    controller: 'ItemsController as itemCtrl',
		resolve: {
			items: [ 'MenuDataService','$stateParams', function ( MenuDataService, $stateParams) {
				return MenuDataService.getItemsForCategory($stateParams.categoryName);
            }]
        }
  })
  
  ;
  
  console.log('RoutesConfig');
}

})();
