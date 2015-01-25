'use strict';

angular
  .module('webApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');
      
      $stateProvider
          .state('home', {
              url: '/',
              templateUrl: 'views/main.html',
          });
      }]);
