/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var fruRoutes = angular.module('fruRoutes', ['ngRoute', 'ngProgress']);

fruRoutes.config(function($routeProvider, $locationProvider, $provide){
    $provide.decorator('$templateRequest', function($delegate) {
        var mySilentProvider = function(tpl, ignoreRequestError) {
            return $delegate(tpl, true);
        }
        return mySilentProvider;
    });
    $routeProvider
    .when('/', {
        templateUrl: 'home.do'
    })
    .when('/:page', {
        templateUrl: function(params){
            return params.page + '.do';
        }
    })
    .when('/404/:current', {
        templateUrl: '404.do',
        controller: 'notFoundController'
    })
    /*
    .otherwise({
        templateUrl: '404.do',
        controller: 'notFoundController'
    });
    */
    
})
.run(function($rootScope, ngProgress, $location) {
    $rootScope.$on('$routeChangeStart', function() {
        ngProgress.color('#222222');
        ngProgress.start();
    });
    $rootScope.$on('$routeChangeSuccess', function() {
        ngProgress.complete();        
    });
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        ngProgress.complete();
        $location.path('/404/' + current.pathParams.page).replace();
    });
});

fruRoutes.controller('notFoundController', function($scope, $routeParams) {
     $scope.name = "Error: 404, page not found";
     $scope.route = $routeParams.current;
 });