/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var calendarApp = angular.module('calendarApp', ['ngMaterial', 'fruRoutes']);

calendarApp.controller('mainCtrl', function($scope, $mdSidenav){
    $scope.toggleLeftNav = function(){
        $mdSidenav('left').toggle();
    };
    $scope.onSwipeRight = function(){
        $mdSidenav('left').open();
    };
    $scope.onSwipeLeft = function(){
        $mdSidenav('left').close();
    };
});

 /* controllers */
calendarApp.controller('HomeController', function($scope, $routeParams) {
     $scope.name = "homeController";
     $scope.params = $routeParams;
 });
 calendarApp.controller('FixController', function($scope, $routeParams) {
     $scope.name = "FixController";
     $scope.params = $routeParams;
 });
 calendarApp.controller('pageController', function($scope, $routeParams) {
     $scope.name = "Error: 404, page not found";
 });
 calendarApp.controller('helpController', function($scope, $routeParams) {
     $scope.name = "helpController";
 });