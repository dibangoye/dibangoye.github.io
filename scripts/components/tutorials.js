/* Whole javascript in strict mode */
'use strict';

// Get a reference to Angular application module angularjsSimpleWebsiteApp.
angular.module('angularjsSimpleWebsiteApp')

.filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
})

.component('tutorials', {
  controller: function($scope, filterFilter){
    var self = this;

    self.Tutorials = [
    {
      acronym : 'IAR',
      title : 'Initiez-vous à la nagivation robotique: une solution d\'Intelligence Artificielle',
      date: '2017',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
			acronym : 'IAD',
      title : 'Développer des applications de nagivation pour les drones : une approche  d\'Intelligence Artificielle',
      date: '2017',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    ];

    self.search = {};
    // pagination controls
  	self.currentPage = 1;
  	self.totalItems = self.Tutorials.length;
  	self.entryLimit = 4; // students per page
  	self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
    // $watch search to update pagination
  	$scope.$watch('search', function (newVal, oldVal) {
  		self.filtered = filterFilter(self.Tutorials, newVal);
  		self.totalItems = self.filtered.length;
  		self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
  		self.currentPage = 1;
  	}, true);
  },

  templateUrl: 'views/components/tutorials.html'
});
