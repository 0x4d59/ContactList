var app = angular.module('ContactList', ['ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../../views/list.html',
        controller: 'ListCntrl'
      }).
      when('/tile', {
        templateUrl: '../../views/tile.html',
        controller: 'ListCntrl'
      }).
      when('/addperson', {
        templateUrl: '../../views/addcontact.html',
        controller: 'AppSaverCntrl'
      })
  }]);

app.controller('AppSaverCntrl', function ($scope, $firebase) {
  var ref = new Firebase("https://greatcontactlist.firebaseio.com/");
  var sync = $firebase(ref);
  var messagesArray = sync.$asArray();
  console.log(messagesArray);
  $scope.persons = messagesArray;



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

app.controller('ListCntrl', function ($scope) {
  // var ref = new Firebase("https://greatcontactlist.firebaseio.com/");
  // var sync = $firebase(ref);
  // var messagesArray = sync.$asArray();
  // console.log(messagesArray);
  // $scope.persons = messagesArray;

})