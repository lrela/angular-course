angular.module('MenuApp', [])
//.controller('ShoppingListController', ShoppingListController)
//.factory('ShoppingListFactory', ShoppingListFactory)
.component('items', {
  templateUrl: 'items.template.html',
//  controller: ShoppingListComponentController,
  bindings: {
    items: '<',
    myTitle: '@title',
    onRemove: '&'
  }
});

