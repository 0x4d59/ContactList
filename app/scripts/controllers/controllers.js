var app = angular.module('ContactList', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../../views/list.html',
        controller: 'AppSaverCntrl'
      }).
      when('/tile', {
        templateUrl: '../../views/tile.html',
        controller: 'AppSaverCntrl'
      }).
      when('/addperson', {
        templateUrl: '../../views/addcontact.html',
        controller: 'AppSaverCntrl'
      })
  }]);

app.controller('AppSaverCntrl', function ($scope) {
});