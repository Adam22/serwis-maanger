/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

app.controller('NavController', function($scope, $location, Auth){
    
    $scope.signedIn = Auth.signedIn();
    $scope.logout = function(){
        Auth.logout();
        console.log("Looged out");
        $location.path('/');
    };
    
});