/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

app.controller('NavController', function(FURL, $scope, $location, Auth, $firebaseObject){
    var ref = new Firebase(FURL + 'profiles');            

    Auth.auth.$onAuth(function(authData){
        if(authData){
            angular.copy(authData, Auth.user);
            Auth.user.profile = $firebaseObject(ref.child(authData.uid));
            $scope.authData = Auth.signedIn();
            $scope.userProfile = Auth.user.profile;        
        }else{
        if (Auth.user && Auth.user.profile){
            Auth.user.profile.$destroy();
        }
        angular.copy({}, Auth.user);
        $scope.authData = Auth.signedIn();
        $scope.userProfile = Auth.user.profile;
        }
    });
    $scope.logout = function(){        
        Auth.logout();
        $location.path('/');
    };    
});