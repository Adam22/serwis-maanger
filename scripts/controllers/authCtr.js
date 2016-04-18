/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

app.controller('AuthController', function($scope, $location, Auth){
        $scope.register = function(user){
            Auth.reginster(user);
        };
        $scope.login = function(user){
            Auth.login(user);
            $location.path('/browse');
        };
        $scope.logout = function(){
            Auth.logout();
        };
        $scope.changePassword = function(user){
            Auth.changePassword(user);
            $location.path('/');
        };
    }
);