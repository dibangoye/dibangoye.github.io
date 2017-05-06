/* Whole javascript in strict mode */
'use strict';

// navigation configuration (the list of links)
// Define the paths, the partials (page templates) and the link names.
var Pages = {
  '/'        : ['home.html','Home', 'HomeCtrl', 'H'],
  '/research': ['research.html','Research', 'ResearchCtrl',')'],
  '/teaching': ['teaching.html','Teaching', 'TeachingCtrl','t'],
  '/software': ['software.html', 'Software', 'SoftwareCtrl','('],
  '/about'   : ['about.html','About', 'AboutCtrl','i']
};

/* see http://www.jshint.com/docs/ if you want to know what this is: */
/* global Pages */

// Where do all these partials live?
var TemplatePrefix = 'views/';

// Create Angular application module angularjsSimpleWebsiteApp.
// Declare ngRoute as a dependency. http://docs.angularjs.org/api/ngRoute
// Declare ngAnimate as a dependency. http://docs.angularjs.org/api/ngAnimate
var WebSiteApp = angular.module('angularjsSimpleWebsiteApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

WebSiteApp.config(function ($routeProvider) {
  // register the routes and the templates
  // See http://docs.angularjs.org/api/ngRoute.$routeProvider
  for ( var path in Pages ) {
    var template = Pages[path][0];
    var customized_controller = Pages[path][2];

    $routeProvider
    .when(path, {
      templateUrl: TemplatePrefix + template,
      controller: customized_controller
    });
  }

  $routeProvider
  .when('/contact', {
    templateUrl: TemplatePrefix + 'contact.html',
    controller: 'HomeCtrl'
  });

  // the default route
  $routeProvider
  .otherwise({
    redirectTo: '/'
  });
});
