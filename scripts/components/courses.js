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

.component('courses', {
  controller: function($scope, filterFilter){
    var self = this;

    self.Classes = [
    {
      acronym : 'TC-3-I-PIT',
      title : 'Passeport Informatique Télécoms',
      cm : '0',
      td : '0',
      tp : '0',
      project: '21',
      date: '2016-2017',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-5-IAR',
      title : 'IA pour la Robotique',
      cm : '4',
      td : '0',
      tp : '4',
      project: '2',
      date: '2016-2017',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-4-R-PRF',
      title : 'Performances de Réseaux',
      cm : '0',
      td : '16',
      tp : '0',
      project: '0',
      date: '2016-2017',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-3-I-AGP',
      title : 'Algorithmique et Programmation',
      cm : '0',
      td : '20',
      tp : '4',
      project: '0',
      date: '2016-2017',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-3-I-WEB',
      title : 'Web dynamique',
      cm : '0',
      td : '8',
      tp : '8',
      project: '20',
      date: '2016-2017',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'PC-S4-P2i6-TF',
      title : 'Parcours Innovation par la mécatronique et la robotique',
      cm : '0',
      td : '0',
      tp : '17',
      project: '0',
      date: '2016-2017',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-3-I-WEB',
      title : 'Web dynamique',
      cm : '0',
      td : '12',
      tp : '18',
      project: '12',
      date: '2015-2016',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-3-I-AGP',
      title : 'Algorithmique et Programmation',
      cm : '0',
      td : '26',
      tp : '32',
      project: '0',
      date: '2015-2016',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TCA-5-OT',
      title : 'Option Transversale',
      cm : '4',
      td : '2',
      tp : '2',
      project: '2',
      date: '2015-2016',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TCA-3-I-AGP',
      title : 'Algorithmique et Programmation',
      cm : '0',
      td : '4',
      tp : '24',
      project: '0',
      date: '2015-2016',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'PC-S4-P2i6-TF',
      title : 'Parcours Innovation par la mécatronique et la robotique',
      cm : '0',
      td : '29,50',
      tp : '0',
      project: '0',
      date: '2015-2016',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'MIF-UE15',
      title : 'Systèmes embarqués',
      cm : '0',
      td : '4',
      tp : '0',
      project: '0',
      date: '2015-2016',
      institution: 'Université de Lyon Claude Bernard',
      department : 'Informatique',
      url : ''
    },
		{
      acronym : 'TC-4-R-PRF',
      title : 'Performances de Réseaux',
      cm : '0',
      td : '0',
      tp : '16',
      project: '0',
      date: '2015-2016',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TCA-3-I-SDE',
      title : 'Système d\'Exploitation',
      cm : '14',
      td : '14',
      tp : '20',
      project: '0',
      date: '2014-2015',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-3-I-SDE',
      title : 'Système d\'Exploitation',
      cm : '14',
      td : '4',
      tp : '52',
      project: '0',
      date: '2014-2015',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-3-I-AGP',
      title : 'Algorithmique et Programmation',
      cm : '0',
      td : '0',
      tp : '28',
      project: '0',
      date: '2014-2015',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-3-I-WEB',
      title : 'Web dynamique',
      cm : '0',
      td : '0',
      tp : '8',
      project: '20',
      date: '2014-2015',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-4-P-ASDS',
      title : 'Analyse et Synthèse de Documents Scientifiques',
      cm : '0',
      td : '10',
      tp : '0',
      project: '0',
      date: '2014-2015',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },
    {
      acronym : 'TC-5-OT-5A-',
      title : 'Objets et robots communicants',
      cm : '4',
      td : '4',
      tp : '0',
      project: '2',
      date: '2014-2015',
      institution: 'INSA Lyon',
      department : 'Télécommunication, Services et Usages',
      url : ''
    },

    ];

    self.search = {};
    // pagination controls
  	self.currentPage = 1;
  	self.totalItems = self.Classes.length;
  	self.entryLimit = 4; // students per page
  	self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
    // $watch search to update pagination
  	$scope.$watch('search', function (newVal, oldVal) {
  		self.filtered = filterFilter(self.Classes, newVal);
  		self.totalItems = self.filtered.length;
  		self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
  		self.currentPage = 1;
  	}, true);
  },

  templateUrl: 'views/components/courses.html'
});
