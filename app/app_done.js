(function customersAppIIFE(){
  var app = angular.module('customersApp', ['ngRoute', 'ngMessages']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'customersController as custCtrl',
              templateUrl: 'app/views/customers_done.html'
            }
           )
      .when('/orders/:customerId',
            {
              controller: 'ordersController',
              controllerAs: 'ordersCtrl',
              templateUrl: 'app/views/orders_done.html'
            }
           )
      .otherwise({redirectTo: '/'});
  });

})();
