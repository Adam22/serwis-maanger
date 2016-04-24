/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
app.controller('OrderController', function($scope, FURL, $location, $firebaseArray, $firebaseObject){
    var ref = new Firebase(FURL);
    $scope.orders = $firebaseArray(ref.child('orders'));
    $scope.createOrder = function(order){
        $scope.orders.$add(order);
    };
    $scope.editOrder = function(order){};
    $scope.assignOrder = function(order){};
    $scope.viewOrder = function(order){};
});