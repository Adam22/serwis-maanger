/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

app.controller('AuthController', function($scope, $location, Auth){
    $scope.register = function(user){
        Auth.register(user).then(function(){
            console.log('Success');
            $location.path('/');
        }, function(err){
            console.log('Error...');
        });
    };
    $scope.login = function(user){
        Auth.login(user).then(function(){
            console.log("loged in");
        }, function(err){
            console.log("error");
        });
    };
    $scope.changePassword = function(user){
        Auth.changePassword(user).then(function(){
            
        });
    };
    
});

