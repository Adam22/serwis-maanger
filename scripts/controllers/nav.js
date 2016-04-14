/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

app.controller('NavController', function($scope, $location, Auth){
    
    $scope.signedIn = function (){
        return true;
    };
    $scope.logout = function(){        
        Auth.logout();
        $location.path('/');
    };    
});