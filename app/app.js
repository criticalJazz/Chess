'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope, $http) {
  
  $http.get("http://localhost:8080/chess/1/1").then (function (response) {
        $scope.oneone = response.data;
      });
  $http.get("http://localhost:8080/chess/1/2").then (function (response) {
        $scope.onetwo = response.data;
      });
  $http.get("http://localhost:8080/chess/1/3").then (function (response) {
        $scope.onethree = response.data;
      });
  $http.get("http://localhost:8080/chess/1/4").then (function (response) {
        $scope.onefour = response.data;
      });
  $http.get("http://localhost:8080/chess/1/5").then (function (response) {
        $scope.onefive = response.data;
      });
  $http.get("http://localhost:8080/chess/1/6").then (function (response) {
        $scope.onesix = response.data;
      });
  $http.get("http://localhost:8080/chess/1/7").then (function (response) {
        $scope.oneseven = response.data;
      });
  $http.get("http://localhost:8080/chess/1/8").then (function (response) {
        $scope.oneeight = response.data;
      });



  $http.get("http://localhost:8080/chess/2/1").then (function (response) {
        $scope.twoone = response.data;
      });
  $http.get("http://localhost:8080/chess/2/2").then (function (response) {
        $scope.twotwo = response.data;
      });
  $http.get("http://localhost:8080/chess/2/3").then (function (response) {
        $scope.twothree = response.data;
      });
  $http.get("http://localhost:8080/chess/2/4").then (function (response) {
        $scope.twofour = response.data;
      });
  $http.get("http://localhost:8080/chess/2/5").then (function (response) {
        $scope.twofive = response.data;
      });
  $http.get("http://localhost:8080/chess/2/6").then (function (response) {
        $scope.twosix = response.data;
      });
  $http.get("http://localhost:8080/chess/2/7").then (function (response) {
        $scope.twoseven = response.data;
      });
  $http.get("http://localhost:8080/chess/2/8").then (function (response) {
        $scope.twoeight = response.data;
      });
});
