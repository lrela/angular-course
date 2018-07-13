(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {
	var buyCtrl = this;
	buyCtrl.buy = function buy(index) {
		MenuSearchService.buy(index);
	}

	buyCtrl.items = MenuSearchService.getToBuyItems();
	
}

function MenuSearchService() {
	var service = this;
	
	service.getMatchedMenuItems = function getMatchedMenuItems(searchTerm) {
		return toBuyItems;
	};
	
}

})();
