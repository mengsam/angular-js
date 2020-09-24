(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.messageOnClick = "";
        $scope.name = "";
        $scope.nameStringSplit = "";
        $scope.nameStringSplitLength = "";
        $scope.txtColor = "";
        $scope.sendMsg = function () {
            $scope.nameStringSplit = $scope.name.split(',');
            $scope.nameStringSplitLength = $scope.nameStringSplit.length;
            if ($scope.nameStringSplitLength > 3) {
                $scope.messageOnClick = "Too much!"
                $scope.txtColor = '#5F9EA0'
            } else if ($scope.nameStringSplitLength > 0) {
                if ($scope.name === "") {
                    $scope.messageOnClick = "Please enter data first!"
                    $scope.txtColor = '#DC143C'
                } else {
                    $scope.messageOnClick = "Enjoy!"
                    $scope.txtColor = '#5F9EA0'
                }
            }
            return $scope.messageOnClick 
        }
    };
})();