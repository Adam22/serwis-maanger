/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

app.controller('AuthController', function($scope, $location, Auth){
    $scope.register = function(user){
        console.log('reg');
    };
    $scope.login = function(user){
        Auth.$authWithPassword({
            email: user.email, 
            password: user.password
        }).then(function(authData){
            console.log(authData);
            $location.path('/');
        }).catch(function(error){
            console.log(error);
        });
    };
    $scope.logout = function(){
        Auth.$unauth();
    };
    $scope.changePassword = function(user){
        console.log('cahnge p');
    };
});