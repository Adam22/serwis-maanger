/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
app.controller('OrderController', function($scope, FURL, $location, $routeParams, $firebaseArray, $firebaseObject){
    var ref = Firebase(FURL);
    $scope.orders = $firebaseArray(ref.child('orders'));
    
});
