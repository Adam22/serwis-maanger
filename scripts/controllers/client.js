/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.controller('ClientController', function($scope, FURL, $firebase, $location, $routeParams){
    
    var ref = new Firebase(FURL);
    var fbClients = $firebase(ref.child('clients')).$asArray();
    var clientId = $routeParams.clientId;
    
    if(clientId){
        $scope.selectedClient = getClient(clientId);
    }
    
    function getClient(clientId){
        return $firebase(ref.child('clients').child(clientId)).$asObject();
    }
    
    $scope.updateClient = function(client){
        $scope.selectedClient.$save(client);
        $location.path('/browse');
    };
    
    $scope.clients = fbClients;  
    
    $scope.createClient = function(client){
        fbClients.$add(client);
        $location.path('/browse');
    };
});