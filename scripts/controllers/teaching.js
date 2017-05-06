/* Whole javascript in strict mode */
'use strict';

// Get a reference to Angular application module angularjsSimpleWebsiteApp.
var WebSiteApp = angular.module('angularjsSimpleWebsiteApp');

/* jshint unused:false */
// The NavigationLinks controller.
// Configure the $routeProvider by defining the routes.
WebSiteApp

.controller('TeachingCtrl', function($scope) {
  $scope.selection = 'courses';

  $scope.selectCourses = function (){
    $scope.selection = 'courses';
  };

  $scope.selectTutorials = function (){
    $scope.selection = 'tutorials';
  };
});
