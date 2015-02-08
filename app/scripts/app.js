// module

angular.module('ContactList', ['ngRoute', 'firebase']);

angular.module('ContactList').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../../views/list.html',
        controller: 'ListController'
      }).
      when('/tile', {
        templateUrl: '../../views/tile.html',
        controller: 'ListController'
      }).
      when('/addperson', {
        templateUrl: '../../views/addcontact.html',
        controller: 'AppSaverController'
      }).
      when('/personpage/:id', {
        templateUrl: '../../views/personpage.html',
        controller: 'PersonDataController'
      })
  }]);