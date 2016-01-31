'use strict';

/**
 * @ngdoc function
 * @name flppnApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the flppnApp
 */
angular.module('flppnApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
