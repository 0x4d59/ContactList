// controllers

angular.module('ContactList').controller('AppSaverController', ['$scope', '$firebase', function ($scope, $firebase) {
  
  var ref = new Firebase("https://greatcontactlist.firebaseio.com/");
  var sync = $firebase(ref);
  var messagesArray = sync.$asArray();
  $scope.persons = messagesArray;

  $scope.appStyle = 'list';
  $scope.lists = true;
  $scope.appTitle = 'контакты';

  $scope.changeAppstyle = function (button) {
    $scope.appStyle = button;
  };

  $scope.personStyle = function () {
    $scope.lists = false;
    $scope.appTitle = 'контакт';
  };

  $scope.listStyles = function () {
    $scope.lists = true;
    $scope.appStyle = 'list';
    $scope.appTitle = 'контакты';
  }
}]);

angular.module('ContactList').controller('AddPersonController', ['$scope', '$firebase', function ($scope, $firebase) {
  $scope.newPerson = {
    'name': '',
    'surname': '',
    'email': '',
    'phone': '',
    'photo': ''
  };
  $scope.basePush = function () {

    var ref = new Firebase("https://greatcontactlist.firebaseio.com/");
    var sync = $firebase(ref);

    var messages = sync.$asArray();
    messages.$add($scope.newPerson);
    messages.$save($scope.newPerson)
  };

  $scope.resetForm = function () {
    $scope.newPerson = {
      'name': '',
      'surname': '',
      'email': '',
      'phone': '',
      'photo': ''
    };
  };
}]);

angular.module('ContactList').controller('ListController', ['$scope', '$location', function ($scope, $location) {
  $scope.goToPersonPage = function (id) {
    $scope.personStyle();
    $location.path('/personpage/' + id);
  };
}]);

angular.module('ContactList').controller('PersonDataController', ['$scope', '$location', function ($scope, $location) {
  $scope.getId = function () {
    return $location.url().slice($location.url().lastIndexOf('/') + 1);
  }
  $scope.idName = $scope.getId();
}])