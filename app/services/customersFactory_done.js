(function customersFactoryIIFE(){

  // Create a customers factory
  var customersFactory = function($http){
    var customersAPI = {};

    customersAPI.getCustomers = function(){
      // allow access to the list of customers
      return  $http.get('http://localhost:3000/customers');
    };

    customersAPI.getCustomer = function(customerId){
      return  $http.get('http://localhost:3000/customers/' + customerId);
    };

    customersAPI.createCustomer = function(customer){
      return  $http.post('http://localhost:3000/customers/', {'customer': customer});
    };

    return customersAPI;
  };

  customersFactory.$inject = ['$http'];

  angular.module('customersApp').factory('customersFactory', customersFactory);
})();
