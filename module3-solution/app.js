(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('Url', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
	restrict: 'E',
    scope: {
      items: '<',
	  /*
      myTitle: '@title',
      badRemove: '=',
      onRemove: '&'
	  */
    },
	/*
    controller: NarrowItDownController,
    controllerAs: 'ctrl',
    bindToController: true
	*/
  };

  return ddo;
}

NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
	// tänne promise MenuSearchServicelle
	var ctrl = this;
	ctrl.searchTerm = "";
	ctrl.found = [];
	
	ctrl.getMatchedMenuItems = function () {
		var promise = MenuSearchService.getMatchedMenuItems2(ctrl.searchTerm); 
		
		promise.then(function(result) {
			ctrl.found = result;
			console.log('items len ' + ctrl.found.length);
		})
		
	}
}

MenuSearchService.$inject = ['$http', 'Url'];
function MenuSearchService($http, url) {
	var service = this;

	service.getMatchedMenuItems2 = function (searchTerm) {
		return $http({
			url: url
		}).then(function (response) {
			// process result and only keep items that match222

			var items = response.data.menu_items;
			var found = []

			for(var i = 0; i < items.length; i++) {
				if(items[i].description.includes(searchTerm)) {
					//console.log(items[i].name);
					found.push(items[i]);
					//console.log(found.pop());

				}
			}
	
			console.log("found len: " + found.length);
			return found;

		}).catch(function (error) {
			console.log(error);
		})
	};
}



})();
