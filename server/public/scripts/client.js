console.log(data);
var myApp = angular.module("myApp", []);

myApp.controller("ListingController", ['$scope', function ($scope){
  $scope.data = data;

  $scope.dataNumber = 0;
$scope.setDataNumber = function(index) {
    $scope.data.splice(index, 1);
};
}]);
