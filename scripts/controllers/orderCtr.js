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
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        order.recivedDate = datetime;
        $scope.orders.$add(order);
    };
    $scope.editOrder = function(order){};
    $scope.assignOrder = function(order){};
    $scope.viewOrder = function(order){};
    

});