(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
	$scope.checkLunch = function () {
		if($scope.lunch === undefined || $scope.lunch.length == 0) {
			$scope.result = "Please enter data first"
			return;
		}

		var items = $scope.lunch.split(",");
		
		var itemCount = 0;
		for(var i = 0; i < items.length; i++)
			if(items[i].trim().length > 0) {
				if(itemCount == 3) {
					$scope.result = "Too much!";
					return;
				}				
				itemCount++;
			}
		
		$scope.result = "Enjoy!"
	};
}


})();
