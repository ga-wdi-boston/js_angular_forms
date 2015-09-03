(function ordersControllerIIFE(){

  var OrdersController = function($routeParams, customersFactory){
    var customerId = $routeParams.customerId;
    var vm = this;
    vm.customer = null;
    vm.orders = [];


    function init(){
      // Search for the customer by id
      // this.customer = customersFactory.getCustomer(customerId);
      customersFactory.getCustomer(customerId)
        .then(function(result){
          vm.customer = result.data;
          vm.orders = vm.customer.orders;
        },function(data, status, headers, config){
          console.log("Error getting a customer from the remote api");
          alert();("Error getting a customer from the remote api");
        });
    }

    init();
  };

  // Prevent the minifier from breaking dependency injection.
  OrdersController.$inject = ['$routeParams', 'customersFactory'];

  // The Controller is part of the module.
  angular.module('customersApp').controller('ordersController', OrdersController);

})();
