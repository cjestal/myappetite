angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    id: '1',
    scope: $scope
  }).then(function(modal) {
    $scope.oModal1 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/search.html', {
    id: '2',
    scope: $scope
  }).then(function(modal) {
    $scope.oModal2 = modal;
  });

  /*open either modals*/
  $scope.openModal = function(index) {
      if (index == 1) $scope.oModal1.show();
      else $scope.oModal2.show();
    };

  $scope.closeModal = function(index) {
      if (index == 1) $scope.oModal1.hide();
      else $scope.oModal2.hide();
    };
  
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.$on('$destroy', function() {
      $scope.oModal1.remove();
      $scope.oModal2.remove();
    });

})


.controller('RestaurantsCtrl', function($scope, $ionicModal, $timeout) {
  $scope.restaurants = [
    { name: 'Jolibee', id: 1, thumb: '/img/jollibee.png', rating: 4, review: 3, address: 'cebu city', reserve: true },
    { name: 'McDonals', id: 2, thumb: '/img/mcdo.png', rating: 4, review: 3, address: 'cebu city', reserve: true },
    { name: 'KFC', id: 3, thumb: '/img/kfc.jpg', rating: 4, review: 3, address: 'cebu city', reserve: false },
    { name: 'Dimsum Break', id: 4, thumb: '/img/dimsum-break.jpg', rating: 4, review: 3, address: 'cebu city', reserve: false },
    { name: 'Chowking', id: 5, thumb: '/img/chowking.png', rating: 4, review: 3, address: 'cebu city', reserve: true },
    { name: 'Army Navy', id: 6, thumb: '/img/armynavy.jpg', rating: 4, review: 3, address: 'cebu city', reserve: true }
  ];

})

.controller('RestaurantCtrl',function($scope){

})

.controller('HomeCtrl',function($scope){

})

.controller('PromosCtrl',function($scope){

})



;
