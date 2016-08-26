var app = angular.module("Porfolio", ['ngRoute', 'angular-loading-bar'])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html'
    }).when('/experience', {
        templateUrl: 'pages/experience.html'
    }).when('/education', {
        templateUrl: 'pages/education.html'
    }).when('/opensource', {
        templateUrl: 'pages/opensource.html'
    }).when('/contact', {
        templateUrl: 'pages/contact.html'
    }).otherwise({
        redirectTo: '/'
    });
}]);