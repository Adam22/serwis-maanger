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
    .when('/#/', {
        templateUrl: 'views/main.html'        
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
    .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'       
      })
    .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'ClientController'
      })
    .when('/client', {
        templateUrl: 'views/client.html',
        controller: 'ClientController'
      })
    .when('/editClient/:clientId', {
        templateUrl: 'views/editClient.html',
        controller: 'ClientController'
      })
    .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrderController'
    })
    .when('/editOrder', {
        templateUrl: 'views/editOrder.html',
        controller: 'OrderController'
    })
    .otherwise({
        redirectTo: '/'
      });
  });