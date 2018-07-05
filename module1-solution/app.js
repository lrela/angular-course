(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
	$scope.checkLunch = function () {
		if($scope.lunch === undefined || $scope.lunch.length === 0)
			$scope.result = "Please enter data first"
		else {
			var items = $scope.lunch.split(",");
			if(items.length > 3)
				$scope.result = "Too much!"
			else
				$scope.result = "Enjoy!"
		}
	};
}


})();
