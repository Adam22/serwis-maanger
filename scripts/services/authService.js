/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

app.factory('Auth', function(FURL, $firebaseAuth){
        var ref = new Firebase(FURL);    
        var auth = $firebaseAuth(ref);  

        var Auth = {
            login: function(user){
                auth.$authWithPassword({
                    email: user.email, 
                    password: user.password
                }, function(error, authData){
                    if(error){
                        console.log("Error: " + error);
                    }else{
                        console.log("Logged in " + authData);
                    }
                });
            },
            logout: function(){
                auth.$unauth();
                console.log('logged out');
            },                
            reginster: function(user){
                auth.$createUser({
                    email: user.email, 
                    password: user.password
                }).then(function(userData){
                    console.log("User :" + userData.uid + "succes");
                    return Auth.login(user);
                }).catch(function(error){
                    console.log("Error", error);
                });
            },
            signedIn: function(){
                return auth;
            }
        };

        return Auth;
    }
);
