/* Whole javascript in strict mode */
'use strict';

// Get a reference to Angular application module angularjsSimpleWebsiteApp.
var WebSiteApp = angular.module('angularjsSimpleWebsiteApp');

/* jshint unused:false */
// The NavigationLinks controller.
// Configure the $routeProvider by defining the routes.
WebSiteApp.controller('HomeCtrl', function($scope, $location) {
    // $routeChangeSuccess is an event that is fired,
    // when the app has switched from one route to another.
    // http://docs.angularjs.org/api/ngRoute.$route
    // here we subscribe to that event.
    $scope.$on('$routeChangeSuccess', function() {
      $scope.locationPath = $location.path();
      console.log('locationPath: ' + $location.path() );
    });
});
