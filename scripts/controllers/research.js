/* Whole javascript in strict mode */
'use strict';

// slider configuration (the list of links)
/* see http://www.jshint.com/docs/ if you want to know what this is: */
/* global Slides */
/* global Articles */

// Get a reference to Angular application module angularjsSimpleWebsiteApp.
var WebSiteApp = angular.module('angularjsSimpleWebsiteApp');



/* jshint unused:false */
// The SliderCrtl controller.
WebSiteApp

.controller('ResearchCtrl', ['$scope', function ResearchCtrl($scope)  {
  $scope.selection = 'publications';

  $scope.selectPublications = function (){
    $scope.selection = 'publications';
  };

  $scope.selectProjects = function (){
    $scope.selection = 'projects';
  };

  $scope.selectCommittees = function (){
    $scope.selection = 'committees';
  };

  $scope.selectStudents = function (){
    $scope.selection = 'students';
  };

}])

.animation('.fade-animation',  function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      $(element).fadeIn(2000, function() {
        done();
      });
    },

    leave: function(element, done) {
      element.css('display', 'none');
    },

    move: function(element, done) {
      element.css('display', 'none');
      $(element).slideDown(500, function() {
        done();
      });
    }
  }
});
