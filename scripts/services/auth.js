/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.factory('Auth', function(FURL, $firebaseAuth, $firebase){
    var ref = new Firebase(FURL);
    var auth = $firebaseAuth(ref);
    
    var Auth = {
        login: function(user){
            return auth.$authWithPassword(
                {email: user.email, password: user.password}
            );
        },
        
        register: function(user) {
            return auth.$createUser({email: user.email, password: user.password})
                .then(function() {
                // authenticate so we have permission to write to Firebase
                  return Auth.login(user);
            });
        },
        
        logout: function() {
            auth.$unauth();
        },

	changePassword: function(user) {      
            return auth.$changePassword({email: user.email, oldPassword: user.oldPass, newPassword: user.newPass});
	},
        
        signedIn: function(){
            return !!Auth.user.previder;
        }
    };
    
    auth.$onAuth(function(authData){
        if(authData){
            angular.copy(authData, Auth.user);
        }else{
            angular.copy({}, Auth.user);
        }
    });
    
    return Auth;
});