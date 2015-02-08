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
  $scope.appStyle = 'list';
  $scope.lists = true;
  $scope.appTitle = 'контакты';

  $scope.changeAppstyle = function (button) {
    $scope.appStyle = button;
  };

  $scope.addPersonForm = function () {
    $scope.lists = false;
    $scope.appTitle = 'контакт';
  };

  $scope.listStyles = function () {
    $scope.lists = true;
    $scope.appStyle = 'list';
    $scope.appTitle = 'контакты';
  }
});