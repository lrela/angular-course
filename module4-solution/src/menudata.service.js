(function () {

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBaseUrl', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBaseUrl'];
function MenuDataService($http, ApiBaseUrl) {
  var service = this;

  // getAllCategories - this method should return a promise which is a result of using 
  // the $http service, using the following REST API endpoint: 
  // https://davids-restaurant.herokuapp.com/categories.json
  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBaseUrl + "/categories.json")
    });

    return response;
	  
  };

  // getItemsForCategory(categoryShortName) - this method should return a promise 
  // which is a result of using the $http service, using the following REST API 
  // endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=, 
  // where, before the call to the server, your code should append whatever 
  // categoryShortName value was passed in as an argument into the getItemsForCategory 
  // method.
  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBaseUrl + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });

    return response;
  };
}


})();
