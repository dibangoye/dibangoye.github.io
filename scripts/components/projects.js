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

.component('projects', {
  controller: function($scope, filterFilter){
    var self = this;

		self.Web = {
				'Olivier Simonin' : 'http://perso.citi-lab.fr/osimonin/',
				'Laëtitia Matignon' : 'http://liris.cnrs.fr/laetitia.matignon/',
				'Pereyron Florian' : '',
				'Guillaume Bono' : '',
				'David Sierra Gonzàlez' : '',
				'Emmanuel Mazer' : 'https://team.inria.fr/e-motion/emmanuel-mazer/',
				'Christian Laugier' : 'http://emotion.inrialpes.fr/laugier/',
				'Abdel-Illah Mouaddib' : 'https://mouaddib.users.greyc.fr',
				'Jacques Saraydaryan' : '',
				'Alessandro Renzaglia' : 'https://sites.google.com/site/arenzaglia/',
				'Olivier Buffet' : 'https://members.loria.fr/olivier.buffet/',
				'Christopher Amato' : 'http://www.cs.unh.edu/~camato/',
				'François Charpillet' : 'https://members.loria.fr/FCharpillet/',
				'Jilles Steeve Dibangoye' : '',
			};

    self.Projects = [
			{
				acronym : 'Dronem',
        title : 'Optimizing Data Delivery in Multi-Robot Network Patrolling using Machine Learning',
        last: '2017 – 2018',
        leader: 'Olivier Simonin',
        budget : '30k€',
        institution: 'INSA Lyon and Cluj University in Romania',
        call : 'PHC Project',
        url : ''
			},
      {
        acronym : 'ENABLE',
        title : 'European Initiative to Enable Validation Autonomated Safe and Secure Systems',
        last: '2016 – 2019',
        leader: 'Christian Laugier',
        budget : '700k€',
        institution: 'INRIA Grenoble Rhône-Alpes',
        call : 'H2020  Ecsel',
        url : ''
      },
      {
        acronym : 'CROME',
        title : 'Coordination d\’une flotte de robots mobiles pour l\’analyse multi-vue de scènes complexes',
        last: 'Dec. 2014 — Dec. 2016',
        leader: 'Olivier Simonin',
        budget : '30K€',
        institution: 'Ecole centrale de Lille',
        call : 'BQR INSA Lyon',
        url : ''
      },
			{
				acronym : 'MUROTEX',
				title : 'Multi-Agent Coordination in Robotic Exploration and Reconnaissance Missions',
				last: 'Jan. 2014 – Dec. 2015',
				leader: 'Olivier Simonin and Jan Faigl',
				budget : '30K€',
				institution: 'INSA Lyon and CTU University of Prague',
				call : 'PHC  (Barande) French-Czech bilateral project'
			},
      {
        acronym : 'AgentVPP',
        title : 'Applications des systèmes multi-agents à la supervision de centrale virtuelle',
        last: 'Dec. 2009 – Apr. 2012',
        package : 'Optimisation distribuée et systèmes multi-agents',
        leader: 'Xavier Guillaud',
        budget : '369k€',
        institution: 'Ecole centrale de Lille',
        call : 'ADEME',
        url : ''
      },
    ];

    self.search = {};

    // pagination controls
  	self.currentPage = 1;
  	self.totalItems = self.Projects.length;
  	self.entryLimit = 3; // students per page
  	self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);

    // $watch search to update pagination
  	$scope.$watch('search', function (newVal, oldVal) {
  		self.filtered = filterFilter(self.Projects, newVal);
  		self.totalItems = self.filtered.length;
  		self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
  		self.currentPage = 1;
  	}, true);

		console.log('I am in projects.html');
  },

  templateUrl: 'views/components/projects.html'
});
