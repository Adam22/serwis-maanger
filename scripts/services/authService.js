/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

app.factory('Auth', function(FURL, $firebaseAuth){
    var ref = new Firebase(FURL);
    return $firebaseAuth(ref); 
});
    
    