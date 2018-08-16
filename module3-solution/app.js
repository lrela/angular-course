(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService', '$http'];

function NarrowItDownController(MenuSearchService) {
	
	// tänne promise MenuSearchServicelle
	
	var buyCtrl = this;
	buyCtrl.buy = function buy(index) {
		MenuSearchService.buy(index);
	}

	buyCtrl.items = MenuSearchService.getMatchedMenuItems();
	
}


function MenuSearchService() {
	var service = this;
	
	service.getMatchedMenuItems = function getMatchedMenuItems(searchTerm) {
		return $http({
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		}).then(function (response) {
			// process result and only keep items that match
			var foundItems = response.data;
			console.log(foundItems);

			// return processed items
			return foundItems;
		});
	};
	
}


/*
function MenuSearchService() {
	var service = this;
	
	service.getMatchedMenuItems = function getMatchedMenuItems(searchTerm) {
		return toBuyItems;
	};
	
}
*/

})();
