/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

app.controller('ClientController', function($scope, FURL, $location, $routeParams, $firebaseArray, $firebaseObject){
    
    var ref = new Firebase(FURL + '/clients');
    $scope.clients = $firebaseArray(ref);
    var clientId = $routeParams.clientId;    
        
    if(clientId){
        $scope.selectedClient = $firebaseObject(ref.child(clientId));
    }
    
    function getClient(clientId){
        
    }
    
    $scope.updateClient = function(client){
        $scope.selectedClient.$save(client);
        $location.path('/browse');
    };
    
    $scope.createClient = function(client){
        $scope.clients.$add(client);
        $location.path('/browse');
    };
});