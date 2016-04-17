/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

app.controller('AuthController', function($scope, $location, Auth){
        $scope.auth = Auth.signedIn();        
        Auth.loadProfile(function(){
            $scope.authData = Auth.user
            $scope.userProfile = Auth.user.profile;
        });
        $scope.auth.$onAuth(function(authData){
            $scope.authData = authData;
        });
        $scope.register = function(user){
            Auth.reginster(user);
        };
        $scope.login = function(user){
            Auth.login(user);
            $location.path('/');
        };
        $scope.logout = function(){
            Auth.logout();
        };
        $scope.test = function(){
            console.log($scope.authData);
        };
        $scope.changePassword = function(user){
            console.log('cahnge p');
        };
    }
);