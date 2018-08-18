(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('Url', "https://davids-restaurant.herokuapp.com/menu_items.json");

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {
	
	// tänne promise MenuSearchServicelle
	var buyCtrl = this;
	buyCtrl.buy = function buy(index) {
		MenuSearchService.buy(index);
	}

	buyCtrl.items = MenuSearchService.getMatchedMenuItems('sauce');	
}

MenuSearchService.$inject = ['$http', 'Url'];
function MenuSearchService($http, url) {
	var service = this;

	service.getMatchedMenuItems = function getMatchedMenuItems(searchTerm) {
		return $http({
			url: url
		}).then(function (response) {
			// process result and only keep items that match

			var items = response.data.menu_items;
			var found = [];

			for(var i = 0; i < items.length; i++) {
				//console.log(items[i].description);
				if(items[i].description.includes(searchTerm)) {
					found.push(items[i]);
					console.log(items[i]);
				}
			}

			console.log("found " + found.length);
			return found;

		}).catch(function (error) {
			console.log(error);
		})
	};
}

})();
