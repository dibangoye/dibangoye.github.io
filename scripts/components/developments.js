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

.component('developments', {
  controller: function($scope, filterFilter){
    var self = this;

    self.Softwares = [
			{
				acronym : 'SDM\'Studio',
	      title : 'est une plate-forme de développement de planificateurs “universels” exacts et progressifs pour les problèmes de prise de décisions séquentielles sous forme de MDPs continus',
	      date: '2015-ongoing',
				institution: 'INSA Lyon - INRIA Grenoble Rhône-Alpes',
				language: 'devicon-cplusplus-line',
				tiers : {
									'IBM ILOG CPLEX Optimization Studio' : 'http://www-03.ibm.com/software/products/fr/ibmilogcpleoptistud',
								},
				systems : ['fa fa-linux'],
	      links : {
						url : '',
						pdf : ''
					}
	    },
    {
			acronym : 'FB-HSVI',
      title : 'est une plate-forme de développement de planificateurs “universels” exacts ou à erreurs bornées pour Dec-POMDPs et certaines sous-classes',
      date: '2013',
			institution: 'INRIA Nancy Grand-Est',
			language : 'devicon-java-plain-wordmark',
			systems : ['fa fa-linux','fa fa-apple','fa fa-windows'],
			tiers : {
								'toolbar2' : 'http://www7.inra.fr/mia/T/toulbar2/'
							},
    	links : {
					url : '',
					pdf : ''
				}
    },
    {
			acronym : 'MPS',
			title : 'est un solveur exact pour la recherche de politique de Markov pour les problèmes de contrôle réparti dans l\’incertain et applications',
      date: '2012',
			institution: 'INRIA Nancy Grand-Est',
			language : 'devicon-java-plain-wordmark',
			tiers : {'aolib' : ''},
			systems : ['fa fa-linux','fa fa-apple','fa fa-windows'],
			links : {
					url : '',
					pdf : ''
				}
    },
    {
			acronym : 'Gabao',
			title : 'est un progiciel de résolution distribué de problèmes d’engagement d\’unités. Ce problème formalise la production décentralisée d\’électricité dans un réseau électrique intelligent ou « smart grid »',
      date: '2011',
			institution: 'Ecole des Mines de Douai',
			language : 'devicon-java-plain-wordmark',
			systems : ['fa fa-linux','fa fa-apple','fa fa-windows'],
			links : {
					url : '',
					pdf : ''
				}
    },
    ];

    self.search = {};
    // pagination controls
  	self.currentPage = 1;
  	self.totalItems = self.Softwares.length;
  	self.entryLimit = 2; // avenues per page
  	self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
    // $watch search to update pagination
  	$scope.$watch('search', function (newVal, oldVal) {
  		self.filtered = filterFilter(self.Softwares, newVal);
  		self.totalItems = self.filtered.length;
  		self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
  		self.currentPage = 1;
  	}, true);
  },

  templateUrl: 'views/components/developments.html'
});
