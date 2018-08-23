(function () {
'use strict';

angular.module('Data')
.component('shoppingList', {
  templateUrl: 'src/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
