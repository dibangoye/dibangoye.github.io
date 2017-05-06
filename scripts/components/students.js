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
		return '';
	};
})

.component('students', {
  controller: ['$scope', 'filterFilter', function($scope, filterFilter){
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
				'Olivier Buffet' : '',
				'Ahmed Yahia Trad' : '',
				'Charles Bessonnet' : '',
				'Ouaouicha Medhi' : '',
				'Cédric Grard and Benoit Bastien' : '',
				'Mihai Indricean' : '',
				'Lorcan Charonnat, Yifan Xiong, Yuting Zhang' : ''
			};

    // Define the bibliography using a format building upin that of bibtex.
    self.Students = [
			{
        subject: 'Planning and Optimization for Cooperative Robotic Systems in Dynamic Environments',
        name: 'Alessandro Renzaglia',
        cosupervisors: ['Olivier Simonin'],
				begin: '2017',
				end:'ongoing',
				program:'Post-doctoral Fellow',
				institution:'INRIA Grenoble Rhône-Alpes',
				links : {
					'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
					'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
					'url' : 'http://dx.doi.org/10.1016/j.engappai.2015.05.007',
				},
				abstract : ''
      },
			{
        subject: 'Optimisation dans l\’incertain de la distribution de marchandises par une flotte de véhicules autonomes',
        name: 'Guillaume Bono',
        cosupervisors: ['Olivier Simonin',  'Laëtitia Matignon',  'Pereyron Florian'],
				begin: '2016',
				end:'ongoing',
				program:'Ph.D. candidate',
				institution:'Chair VOLVO - INSA  Lyon',
				links : {
					'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
					'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
					'url' : 'http://dx.doi.org/10.1016/j.engappai.2015.05.007',
				},
				abstract : ''
      },
			{
        subject: 'Optimally solving zero-sum stochastic games: a convex optimization approach',
        name: 'Mihai Indricean',
        cosupervisors: [],
				begin: 'Oct. 2016',
				end:'Jan. 2017',
				program:'Engineering School Final Project',
				institution:'INSA Lyon',
				links : {
					'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
					'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
				},
				abstract : ''
      },
			{
        subject: 'Apprentissage par renforcement appliqué à l’acquisition d’information par une flotte de robots mobiles',
        name: 'Lorcan Charonnat, Yifan Xiong, Yuting Zhang',
        cosupervisors: ['Jacques Saraydaryan'],
				begin: 'Oct. 2016',
				end:'Jan. 2017',
				program:'Engineering School Final Project',
				institution:'INSA Lyon',
				links : {
					'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
					'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
				},
				abstract : ''
      },
			{
        subject: 'Interaction and decision models for coordination between artificial agents and humans in open systems',
        name: 'Jonathan Cohen',
        cosupervisors: ['Abdel-Illah Mouaddib'],
				begin: '2015',
				end:'ongoing',
				program:'Ph.D. candidate',
				institution:'Université de Caen Basse-Normandie',
				links : {
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url' : 'http://dx.doi.org/10.1016/j.engappai.2015.05.007',
				},
				abstract : ''
      },
			{
				subject: 'Perception active et collaboration par plusieurs robots mobiles',
        name: 'Ahmed Yahia Trad',
        cosupervisors: ['Jacques Saraydaryan'],
				begin: 'Feb. 2016',
				end:'June 2016',
				program:'Msc',
				institution:'Université de Lyon Claude Bernard',
				links : {
					'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
				}
			},
			{
        subject: 'Une approche bayesienne pour l\’exploration robotique d\’un environnement inconnu',
        name: 'Mamoun Idrissi',
        cosupervisors: ['Olivier Simonin'],
				begin: 'Feb. 2015',
				end:'Avr. 2015',
				program:'Engineering School Final Project',
				institution:'INSA Lyon',
				links : {
					'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
				}
      },
			{
        subject: 'Algorithmes de prise de décision dans l\’incertain',
        name: 'Martin Pugnet',
        cosupervisors: [],
				begin: 'Feb. 2015',
				end:'Avr. 2015',
				program:'Msc',
				institution:'Université de Lyon Claude Bernard',
				links : {
					'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
				}
      },
      {
        subject: 'Planning-based motion prediction for collision risk estimation in autonomous driving scenarios',
        name: 'David Sierra Gonzàlez',
        cosupervisors: ['Emmanuel Mazer', 'Christian Laugier'],
				begin: '2014',
				end:'ongoing',
				program:'Ph.D. candidate',
				institution:'Inria Grenoble Rhône-Alpes',
				links : {
					'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
					'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
					'url' : 'http://dx.doi.org/10.1016/j.engappai.2015.05.007',
				},
				abstract : ''
      },
			{
        subject: 'Etude d\’algorithmes de recherche arborescence « anytime »',
        name: 'Cédric Grard and Benoit Bastien',
        cosupervisors: ['Olivier Buffet'],
				begin: 'Feb. 2014',
				end:'Jun. 2014',
				program:'2nd year Internship',
				institution:'Télécom Nancy'
      },
			{
        subject: 'Développement C++ d\’un planificateur « universel »',
        name: 'Charles Bessonnet',
        cosupervisors: ['Olivier Buffet'],
				begin: 'Feb. 2013',
				end:'Jun. 2013',
				program:'2nd year Internship',
				institution:'Télécom Nancy'
      },
			{
        subject: 'Vers un système d\’aide à la décision pour la gestion d\’une smart grid',
        name: 'Ouaouicha Medhi',
        cosupervisors: ['Arnaud Doniec'],
				begin: 'Feb. 2012',
				end:'Jun. 2012',
				program:'Engineering School Final Project',
				institution:'Ecole des Mines de Douai'
      },
			// {
      //   subject: '',
      //   name: '',
      //   cosupervisors: [],
			// 	begin: '',
			// 	end:'',
			// 	program:'',
			// 	institution:''
      // },
			// {
      //   subject: '',
      //   name: '',
      //   cosupervisors: [],
			// 	begin: '',
			// 	end:'',
			// 	program:'',
			// 	institution:''
      // },
			// {
      //   subject: '',
      //   name: '',
      //   cosupervisors: [],
			// 	begin: '',
			// 	end:'',
			// 	program:'',
			// 	institution:''
      // },
			// {
      //   subject: '',
      //   name: '',
      //   cosupervisors: [],
			// 	begin: '',
			// 	end:'',
			// 	program:'',
			// 	institution:''
      // },
			// {
      //   subject: '',
      //   name: '',
      //   cosupervisors: [],
			// 	begin: '',
			// 	end:'',
			// 	program:'',
			// 	institution:''
      // },
			// {
      //   subject: '',
      //   name: '',
      //   cosupervisors: [],
			// 	begin: '',
			// 	end:'',
			// 	program:'',
			// 	institution:''
      // },
    ];

    self.search = {};

    // pagination controls
  	self.currentPage = 1;
  	self.totalItems = self.Students.length;
  	self.entryLimit = 2; // students per page
  	self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);

    // $watch search to update pagination
  	$scope.$watch('search', function (newVal, oldVal) {
  		self.filtered = filterFilter(self.Students, newVal);
  		self.totalItems = self.filtered.length;
  		self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
  		self.currentPage = 1;
  	}, true);
  }],
  templateUrl: 'views/components/students.html'
});
