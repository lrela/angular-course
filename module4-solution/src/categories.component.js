angular.module('MenuApp', [])
//.controller('ShoppingListController', ShoppingListController)
//.factory('ShoppingListFactory', ShoppingListFactory)
.component('categories', {
  templateUrl: 'categories.template.html',
//  controller: ShoppingListComponentController,
  bindings: {
    items: '<'
  }
});