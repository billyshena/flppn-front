'use strict';

/**
 * @ngdoc function
 * @name flppnApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the flppnApp
 */
angular.module('flppnApp')
  .controller('LoginCtrl', function ($scope, $state) {

    console.log('loginctrl');

    /* Login function */
    $scope.login = function() {
      console.log('login function');
      $state.go('home');
    }

  });
