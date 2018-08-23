(function () {

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('BaseUrl', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'BaseUrl'];
function MenuDataService($http, BaseUrl) {
  var service = this;

  // getAllCategories - this method should return a promise which is a result of using 
  // the $http service, using the following REST API endpoint: 
  // https://davids-restaurant.herokuapp.com/categories.json
  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (BaseUrl + "/categories.json")
    });
	console.log("MenuDataService categories");
    return response;
	  
  };

  // getItemsForCategory(categoryShortName) - this method should return a promise 
  // which is a result of using the $http service, using the following REST API 
  // endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=, 
  // where, before the call to the server, your code should append whatever 
  // categoryShortName value was passed in as an argument into the getItemsForCategory 
  // method.
  service.getItemsForCategory = function (categoryName) {
	console.log("getItemsForCategory="+categoryName);
    var response = $http({
      method: "GET",
      url: (BaseUrl + "/menu_items.json"),
      params: {
        category: categoryName
      }
    });
	console.log("MenuDataService items");
    return response;
  };
}


})();
