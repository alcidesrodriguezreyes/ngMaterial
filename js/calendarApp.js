/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var calendarApp = angular.module('calendarApp', ['ngMaterial']);

calendarApp.controller('mainCtrl', function($scope, $mdSidenav){
    $scope.toggleLeftNav = function(){
        $mdSidenav('left').toggle();
    };
});
