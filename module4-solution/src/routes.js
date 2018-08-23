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
    templateUrl: 'src/categories.template.html',
    //controller: 'CategoriesController as ctrl'
  })

  .state('items', {
    url: '/items',
    templateUrl: 'src/items.template.html'
    //controller: 'ItemsController as ctrl'
  })
  
  
  ;
}

})();
