(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController);

//.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope'];
AlreadyBoughtController.$inject = ['$scope'];

var toBuyItems = [
	{ name: "cookies", quantity: 10 },
	{ name: "candies", quantity: 10 },
	{ name: "haggis", quantity: 10 },
	{ name: "surstroemming", quantity: 10 },
	{ name: "maemmi", quantity: 10 }
];

var boughtItems = [];

function ToBuyController($scope) {
	console.log('buy');	
	$scope.toBuyItems = toBuyItems;
	$scope.buy = function buy(index) {
		console.log(index);
		boughtItems.push(toBuyItems[index])
		toBuyItems.splice(index, 1)
	}
}

function AlreadyBoughtController ($scope) {
	console.log('already b');	
	$scope.boughtItems = boughtItems;

}

})();
