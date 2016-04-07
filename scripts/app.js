'use strict';

var app = angular
  .module('SerwisManager', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase'
  ])
  .constant('FURL', 'https://serwis-manager.firebaseio.com/')    
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'        
      })
    .when('/login', {
        templateUrl: 'views/login.html'
        
      })
    .when('/register', {
        templateUrl: 'views/register.html'
        
      })
    .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'ClientController'
      })
    .when('/client', {
        templateUrl: 'views/client.html',
        controller: 'ClientController'
      })
    .when('/edit/:clientId', {
        templateUrl: 'views/edit.html',
        controller: 'ClientController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
