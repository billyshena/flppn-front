'use strict';

/**
 * @ngdoc overview
 * @name flppnApp
 * @description
 * # flppnApp
 *
 * Main module of the application.
 */
angular
  .module('flppnApp', [
    'ui.router',
    'pascalprecht.translate'
  ])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $translateProvider) {

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push('AuthInterceptor');

    // Specify locales folder path for the translate module
    $translateProvider.useStaticFilesLoader({
      prefix: 'locales/locale-',
      suffix: '.json'
    });

    $translateProvider.useSanitizeValueStrategy('escape');

    // Set the lang either to FR or EN according to the browser language
    var lang = (window.navigator.userLanguage || window.navigator.language).toLowerCase();
    if(lang.substr(0, 2) == 'fr') {
      $translateProvider.use('fr');
    }
    else {
      $translateProvider.use('en');
    }

    $stateProvider
      .state('landing', {
        url: '/',
        controller: "LandingCtrl",
        templateUrl: "/views/landing.html"
      })
      .state('login', {
        url: '/login',
        controller: "LoginCtrl",
        templateUrl: "/views/login.html"
      })
      .state('home', {
        url: '/home',
        controller: "HomeCtrl",
        templateUrl: "/views/home.html"
      });

  });
