(function() {
  'use strict';

  angular
    .module('myApp')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/review', {
        templateUrl: 'app/review/review.html',
        controller: 'ReviewController',
        controllerAs: 'review'
      })
      .otherwise({
        redirectTo: '/'
      });

      // use the HTML5 History API
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }

})();
