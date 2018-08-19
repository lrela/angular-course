(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('Url', "http://localhost/module3-solution/menu.json")
.directive('foundItems', FoundItemsDirective);

//https://davids-restaurant.herokuapp.com/menu_items.json

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
	restrict: 'E',
    scope: {
      items: '<',
      remove: '&'
	  
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
		});
		
	};
	
	ctrl.remove = function(index) {
		console.log("remove" + index);
		ctrl.found.splice(index, 1);
    };
}

MenuSearchService.$inject = ['$http', 'Url'];
function MenuSearchService($http, url) {
	var service = this;

	service.getMatchedMenuItems2 = function (searchTerm) {
		return $http({
			url: url
		}).then(function (response) {

			var items = response.data.menu_items;
			var found = []

			var len = items.length;
			for(var i = 0; i < len; i++) {
				if(items[i].description.indexOf(searchTerm) != -1) {
					//console.log(items[i].description);
					found.push(items[i]);
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
