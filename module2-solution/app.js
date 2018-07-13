(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
	var buyCtrl = this;
	buyCtrl.buy = function buy(index) {
		ShoppingListCheckOffService.buy(index);
	}

	buyCtrl.items = ShoppingListCheckOffService.getToBuyItems();
	
}

function AlreadyBoughtController (ShoppingListCheckOffService) {
	var boughtCtrl= this;
	boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {

	var service = this;
	var toBuyItems = [
		{ name: "cookies", quantity: 10 },
		{ name: "candies", quantity: 10 },
		{ name: "haggis", quantity: 10 },
		{ name: "surstroemming", quantity: 10 },
		{ name: "maemmi", quantity: 10 }
	];

	var boughtItems = [];

	service.buy = function(index) {
		boughtItems.push(toBuyItems[index])		
		toBuyItems.splice(index, 1)
	};
	
	service.getToBuyItems = function() {
		return toBuyItems;
	};

	service.getBoughtItems = function() {
		return boughtItems;
	};
	
}

})();
