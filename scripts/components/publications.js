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

.component('publications', {
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
				'Olivier Buffet' : 'https://members.loria.fr/olivier.buffet/',
				'Christopher Amato' : 'http://www.cs.unh.edu/~camato/',
				'François Charpillet' : 'https://members.loria.fr/FCharpillet/',
				'Jilles Steeve Dibangoye' : '',
			};

    // Define the bibliography using a format building upin that of bibtex.
    self.Articles = [
      {
        title: 'Optimally Solving Dec-POMDPs as Continuous-State MDPs',
        authors: ['Jilles Steeve Dibangoye', 'Christopher Amato', 'Olivier Buffet', 'François Charpillet'],
        publication: 'Journal of Artificial Intelligence Research (JAIR)',
        month: 'August',
        year: '2016',
        editors: 'Springer',
        pages:'443-497',
        volume: '55',
        number:'10',
        links : {
          'pdf': 'pdf/JSD-JAIR16.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/person-re-identification/',
          'url': 'http://dx.doi.org/10.1613/jair.4623',
        },
        abstract: 'Decentralized partially observable Markov decision processes (Dec-POMDPs) provide a general model for decision-making under uncertainty in decentralized settings, but are difficult to solve optimally (NEXP-Complete). As a new way of solving these problems, we introduce the idea of transforming a Dec-POMDP into a continuous-state deterministic MDP with a piecewise-linear and convex value function. This approach makes use of the fact that planning can be accomplished in a centralized offline manner, while execution can still be decentralized. This new Dec-POMDP formulation, which we call an occupancy MDP, allows powerful POMDP and continuous-state MDP methods to be used for the first time. To provide scalability, we refine this approach by combining heuristic search and compact representations that exploit the structure present in multi-agent domains, without losing the ability to converge to an optimal solution. In particular, we introduce a feature-based heuristic search value iteration (FB-HSVI) algorithm that relies on feature-based compact representations, point-based updates and efficient action selection. A theoretical analysis demonstrates that FB-HSVI terminates in finite time with an optimal solution. We include an ex- tensive empirical analysis using well-known benchmarks, thereby demonstrating that our approach provides significant scalability improvements compared to the state of the art.'
      },
      {
        title: 'High-speed highway scene prediction based on driver models learned from demonstrations',
        authors: ['David Sierra Gonzàlez', 'Jilles Steeve Dibangoye', 'Christian Laugier'],
        publication: '19th IEEE International Conference on Intelligent Transportation Systems (ITSC)',
        year: '2016',
        pages: '149-155',
        month: 'November',
        location: 'Rio de Janeiro, Brazil',
        editors:'Eds. Armin Biere and Roderick Bloem',
        links : {
          'pdf': 'pdf/DSG-ITSC16.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url': 'http://dx.doi.org/10.1109/ITSC.2016.7795546',
        },
        abstract: 'Design pattern into how it builds client-side web applications. AngularJS design pattern into how it builds client-side web applications. AngularJS does not implement MVC in the traditional sense, but rather something closer  to MVVM (Model-View-ViewModel).'
      },
      {
        authors   : ['Jilles Steeve Dibangoye', 'Arnaud Doniec','Hicham Fakham','Frédéric Colas', 'Xavier Guillaud'],
        title     : 'Distributed economic dispatch of embedded generation in smart grids',
        publication   : 'Engineering Applications of Artificial Intelligence',
        volume    : '44',
        pages     : '64-78',
        year      : '2015',
        doi       : '10.1016/j.engappai.2015.05.007',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/journals/eaai/DibangoyeDFCG15',
        links : {
          'pdf': 'pdf/JSD-EAAI15.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url' : 'http://dx.doi.org/10.1016/j.engappai.2015.05.007',
        },
        abstract : ''
      },
      {
        editors    : 'Eds.  Qiang Yang and Michael Wooldridge',
        authors    : ['Jilles Steeve Dibangoye','Olivier Buffet','Olivier Simonin'],
        title     : 'Structural Results for Cooperative Decentralized Control Models',
        publication : 'Proceedings of the Twenty-Fourth International Joint Conference on Artificial Intelligence (IJCAI)',
        location : 'Buenos Aires, Argentina',
        month: 'July',
        date: '25-31',
        pages     : '46-52',
        year      : '2015',
        crossref  : 'DBLP:conf/ijcai/2015',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/ijcai/DibangoyeB015',
        links : {
          'pdf': 'pdf/JSD-IJCAI15.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://ijcai.org/Abstract/15/014',
        },
        abstract : ''
      },
      {
        editors    : 'Eds.  Qiang Yang and Michael Wooldridge',
        authors    : ['Jilles Steeve Dibangoye',
                     'Christopher Amato',
                     'Olivier Buffet',
                     'François Charpillet'],
        title     : 'Exploiting Separability in Multiagent Planning with Continuous-State MDPs (Extended Abstract)',
        publication : 'Proceedings of the Twenty-Fourth International Joint Conference on Artificial Intelligence (IJCAI)',
        location : 'Buenos Aires, Argentina',
        month:  'July',
        date: '25-31',
        pages     : '4254-4260',
        year      : '2015',
        crossref  : 'DBLP:conf/ijcai/2015',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/ijcai/DibangoyeABC15',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
					'pdf': 'pdf/JSD-IJCAI15-2.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://ijcai.org/Abstract/15/605',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. Ana L. C. Bazzan and Michael N. Huhns and Alessio Lomuscio and Paul Scerri',
        authors    : ['Jilles Steeve Dibangoye' ,
                    'Christopher Amato' ,
                     'Olivier Buffet' ,
                     'François Charpillet'],
        title     : 'Exploiting separability in multiagent planning with continuous-state MDPs',
        publication : 'International conference on Autonomous Agents and Multi-Agent Systems (AAMAS)',
        location: 'Paris, France',
        month: 'May',
        date: '5-9',
        pages     : '1281-1288',
        year      : '2014',
        crossref  : 'DBLP:conf/atal/2014',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/atal/DibangoyeABC14',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
          'pdf': 'pdf/JSD-AAMAS14.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://dl.acm.org/citation.cfm?id=2617452',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. Toon Calders and Floriana Esposito and Eyke Hüllermeier and Rosa Meo',
        authors    : ['Jilles Steeve Dibangoye',
                     'Olivier Buffet',
                     'François Charpillet'],
        title     : 'Error-Bounded Approximations for Infinite-Horizon Discounted Decentralized POMDPs',
        publication : 'Proceedings of Machine Learning and Knowledge Discovery in Databases - European Conference (ECML/PKDD) - Part (I)',
        location :  'Nancy, France',
        month: 'September',
        date:  '15-19',
        pages     : '338-353',
        year      : '2014',
        crossref  : 'DBLP:conf/pkdd/2014-1',
        doi       : '10.1007/978-3-662-44848-9_22',
        timestamp : 'Mon, 08 Sep 2014 12:35:00 +0200',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/pkdd/DibangoyeBC14',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
          'pdf': 'pdf/JSD-ECML14.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'      : 'http://dx.doi.org/10.1007/978-3-662-44848-9_22',
        },
        abstract : ''
      },
      {
        title : 'Optimally solving Dec-POMDPs as Continuous-State MDPs: Theory and Algorithms',
         authors : ['Jilles Steeve Dibangoye',  'Christopher Amato',  'Olivier Buffet',  'François Charpillet'],
         publication : 'Research Report',
         number : 'RR-8517',
         pages : '77',
         institution : 'INRIA',
         year : '2014',
         month:  'April',
         keywords : 'Decentralized Control ; Decentralized Partially Observable Markov Decision processes ; Dec-POMDPs ; automated planning ; multi-agent systems ; uncertainty',
         hal_id : 'hal-00975802',
         hal_version : 'v1',
         links : {
           'pdf' : 'https://hal.inria.fr/hal-00975802/file/RR-8517.pdf',
           'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
           'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
           'url' : 'https://hal.inria.fr/hal-00975802',
         },
         abstract : ''
      },
      {
        title : 'Résolution topologique des problèmes de Markov partiellement observables',
         authors : ['Jilles Steeve Dibangoye'],
         publication : 'Research Report',
         number : 'RR-8517',
         pages : '30',
         institution : 'INRIA',
         year : '2014',
         month:  'April',
         keywords : 'Partially Observable Markov Decision processes ; POMDPs ; automated planning ; single-agent systems ; uncertainty',
         hal_id : 'hal-00975802',
         hal_version : 'v1',
         links : {
           'pdf' : 'https://hal.inria.fr/hal-00975802/file/RR-8517.pdf',
           'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
           'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
           'url' : 'https://hal.inria.fr/hal-00975802',
         },
         abstract : ''
      },
      {
        editors    : 'Eds. Maria L. Gini and Onn Shehory and Takayuki Ito and Catholijn M. Jonker',
      authors    : ['Jilles Steeve Dibangoye' ,
                     'Christopher Amato' ,
                     'Arnaud Doniec' ,
                     'François Charpillet'],
        title     : 'Producing efficient error-bounded solutions for transition independent decentralized MDPs',
        publication : 'International conference on Autonomous Agents and Multi-Agent Systems (AAMAS)',
        location : 'Saint Paul, MN, USA',
        month: 'May',
        date:  '6-10',
        pages     : '539-546',
        year      : '2013',
        crossref  : 'DBLP:conf/atal/2013',
        timestamp : 'Fri, 28 Jun 2013 12:19:40 +0200',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/atal/DibangoyeADC13',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
          'pdf': 'pdf/JSD-AAMAS13.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://dl.acm.org/citation.cfm?id=2485006',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. Francesca Rossi',
        authors    : ['Jilles Steeve Dibangoye' ,
                     'Christopher Amato' ,
                     'Olivier Buffet' ,
                     'François Charpillet'],
        title     : 'Optimally Solving Dec-POMDPs as Continuous-State MDPs',
        publication :  'Proceedings of the 23rd International Joint Conference on Artificial Intelligence (IJCAI)',
        location  : 'Beijing, China',
        month: 'August',
        date: '3-9',
        pages     : '90-96',
        year      : '2013',
        crossref  : 'DBLP:conf/ijcai/2013',
        timestamp : 'Wed, 20 Jul 2016 15:16:56 +0200',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/ijcai/DibangoyeABC13',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
					'pdf': 'pdf/JSD-IJCAI13.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://www.aaai.org/ocs/index.php/IJCAI/IJCAI13/paper/view/6958',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. Nando de Freitas and Kevin P. Murphy',
        authors    : ['Jilles Steeve Dibangoye' ,
                     'Christopher Amato' ,
                     'Arnaud Doniec'],
        title     : 'Scaling Up Decentralized MDPs Through Heuristic Search',
        publication : 'Proceedings of the Twenty-Eighth Conference on Uncertainty in Artificial Intelligence',
        location: 'Catalina Island, CA, USA',
        month: 'August',
        date: '14-18',
        pages     : '217--226',
        year      : '2012',
        crossref  : 'DBLP:conf/uai/2012',
        timestamp : 'Wed, 29 Mar 2017 16:45:26 +0200',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/uai/DibangoyeAD12',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
					'pdf': 'pdf/JSD-UAI12.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'https://dslpitt.org/uai/displayArticleDetails.jsp?mmnu=1&smnu=2&article_id=2284&proceeding_id=28',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. Liz Sonenberg and Peter Stone and Kagan Tumer and Pinar Yolum',
        authors    : ['Jilles Steeve Dibangoye',
                     'Abdel-Illah Mouaddib',
                     'Brahim Chaib-draa'],
        title     : 'Toward error-bounded algorithms for infinite-horizon DEC-POMDPs',
        publication : '10th International Conference on Autonomous Agents and Multiagent Systems (AAMAS)',
        location: 'Taipei, Taiwan',
        month:  'May',
        date: '2-6',
        volume: 'Volume 1-3',
        pages     : '947--954',
        year      : '2011',
        crossref  : 'DBLP:conf/atal/2011',
        timestamp : 'Fri, 18 Nov 2011 09:09:28 +0100',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/atal/DibangoyeMC11',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
          'pdf': 'pdf/JSD-AAMAS11.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://portal.acm.org/citation.cfm?id=2034404&CFID=69154334&CFTOKEN=45298625',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. Wiebe van der Hoek and Gal A. Kaminka and Yves Lespérance and Michael Luck and Sandip Sen',
        authors    : ['Frans A. Oliehoek',
                     'Matthijs T. J. Spaan',
                     'Jilles Steeve Dibangoye',
                     'Christopher Amato'],
        title     : 'Heuristic search for identical payoff Bayesian games',
        publication : '9th International Conference on Autonomous Agents and Multiagent Systems (AAMAS)',
        location: 'Toronto, Canada',
        month: 'May',
        date: '10-14',
        volume: 'Volume 1-3',
        pages     : '1115--1122',
        year      : '2010',
        crossref  : 'DBLP:conf/atal/2010',
        doi       : '10.1145/1838206.1838357',
        timestamp : 'Fri, 18 Nov 2011 09:07:49 +0100',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/atal/OliehoekSDA10',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
          'pdf': 'http://dblp.uni-trier.de/rec/bib/conf/ijcai/DibangoyeABC15',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://doi.acm.org/10.1145/1838206.1838357',
        },
        abstract : ''
      },
      {
        title:'Fermeture efficiente d\'un système complexe',
        authors:['François Bourdon' , 'Jilles Steeve Dibangoye'],
        publication : 'Journée de lancement de l\'Institut des Sciences Complexes en Normandie (ISCN)',
        year: '2010'
      },
      {
        editors    : 'Eds. Brahim-Chaid Draa and Abdel-Illah Mouaddid',
        authors    : ['Jilles Steeve Dibangoye'],
        title     : 'Contributions to solving Markov decision processes centralized and decentralized: algorithms and theory',
        school    : 'Laval University',
        location: 'Québec City, Quebec, Canada',
        year      : '2010',
        publication: 'PhD Thesis',
        timestamp : 'Thu, 14 Jul 2016 01:00:00 +0200',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/phd/hal/Dibangoye09',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
          'pdf': 'http://dblp.uni-trier.de/rec/bib/conf/ijcai/DibangoyeABC15',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'https://tel.archives-ouvertes.fr/tel-01082941',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. Alfonso Gerevini and Adele E. Howe and Amedeo Cesta and Ioannis Refanidis',
        authors     : ['Christopher Amato',
                     'Jilles Steeve Dibangoye',
                     'Shlomo Zilberstein'],
        title     : 'Incremental Policy Generation for Finite-Horizon DEC-POMDPs',
        publication : 'Proceedings of the 19th International Conference on Automated Planning and Scheduling, (ICAPS)',
        location: 'Thessaloniki, Greece',
        month: 'September',
        date: '19-23',
        year      : '2009',
        crossref  : 'DBLP:conf/aips/2009',
        timestamp : 'Thu, 13 Dec 2012 00:00:00 +0100',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/aips/AmatoDZ09',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
          'pdf': 'http://dblp.uni-trier.de/rec/bib/conf/ijcai/DibangoyeABC15',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://aaai.org/ocs/index.php/ICAPS/ICAPS09/paper/view/711',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. Carles Sierra and Cristiano Castelfranchi and Keith S. Decker and Jaime Simao Sichman',
        authors    : ['Jilles Steeve Dibangoye',
                     'Abdel-Illah Mouaddib',
                     'Brahim Chaib-draa'],
        title     : 'Point-based incremental pruning heuristic for solving finite-horizon DEC-POMDPs',
        publication : '8th International Joint Conference on Autonomous Agents and Multiagent Systems (AAMAS)',
        location: 'Budapest, Hungary',
        month: 'May',
        date: '10-15',
        volume: 'Volume 1',
        pages     : '569--576',
        year      : '2009',
        crossref  : 'DBLP:conf/atal/2009-1',
        doi       : '10.1145/1558013.1558092',
        timestamp : 'Wed, 01 Jul 2009 08:35:44 +0200',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/atal/DibangoyeMC09',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
					'pdf': 'pdf/JSD-AAMAS09.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://doi.acm.org/10.1145/1558013.1558092',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. Craig Boutilier',
        authors    : ['Jilles Steeve Dibangoye',
                     'Guy Shani',
                     'Brahim Chaib-draa',
                     'Abdel-Illah Mouaddib'],
        title     : 'Topological Order Planner for POMDPs',
        publication : 'Proceedings of the 21st International Joint Conference on Artificial Intelligence',
        location: 'Pasadena, California, USA',
        month: 'July',
        date: '11-17',
        pages     : '1684--1689',
        year      : '2009',
        crossref  : 'DBLP:conf/ijcai/2009',
        timestamp : 'Wed, 20 Jul 2016 14:02:05 +0200',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/ijcai/DibangoyeSCM09',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
          'pdf': 'http://dblp.uni-trier.de/rec/bib/conf/ijcai/DibangoyeABC15',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://ijcai.org/Proceedings/09/Papers/281.pdf',
        },
        abstract : ''
      },
      {
        title:'Policy Iteration Algorithms for DEC-POMDPs with Discounted Rewards.',
        authors:['Jilles S. Dibangoye', 'Brahim Chaib-draa', 'Abdel-Illah Mouaddib'] ,
        publication: 'Proceedings of the Workshop on Multi-Agent Sequential Decision Making in Uncertain Domains (MSDM\'09)',
        location: 'Budapest, Hungary',
        year: '2009',
        links : {
					'pdf': 'pdf/JSD-MSDM09.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://www2.ift.ulaval.ca/~chaib/publications/JSD-msdm09.pdf',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. David Wilson and H. Chad Lane',
        authors    : ['Jilles Steeve Dibangoye',
        'Brahim Chaib-draa',
        'Abdel-Illah Mouaddib'],
        title     : 'A Novel Prioritization Technique for Solving Markov Decision Processes',
        publication : 'Proceedings of the Twenty-First International Florida Artificial Intelligence Research Society Conference',
        month: 'May',
        date: '15-17',
        location: 'Coconut Grove, Florida, USA',
          pages     : '537--542',
          year      : '2008',
          crossref  : 'DBLP:conf/flairs/2008',
          timestamp : 'Thu, 23 Jun 2016 15:53:29 +0200',
          biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/flairs/DibangoyeCM08',
          bibsource : 'dblp computer science bibliography, http://dblp.org',
          links : {
            'pdf': 'pdf/JSD-FLAIRS08.pdf',
            'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
            'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
            'url'       : 'http://www.aaai.org/Library/FLAIRS/2008/flairs08-123.php',
          },
          abstract : ''
      },
      {
      title: 'Planification à base d\'ordres topologiques pour la résolution des POMDPs.',
      authors:['Jilles S. Dibangoye', 'Brahim Chaib-draa', 'Abdel-Illah Mouaddib'],
      publication: 'Les Actes des 3es JFPDA',
      year: '2008',
      links : {
				'pdf': 'pdf/JSD-JFPDA08.pdf',
        'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
        'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
        'url'       : 'http://www2.ift.ulaval.ca/~chaib/publications/08/JSD-JFPDA08.pdf',
      },
      abstract : ''
      },
      {
        editors    : 'Eds. René Mandiau and Pierre Chevaillier',
        authors    : ['Jilles Steeve Dibangoye',
                     'Abdel-Illah Mouaddib',
                     'Brahim Chaib-draa'],
        title     : 'Recherche incrémentale à base de points pour la résolution des DEC-POMDPs (présentation courte)',
        publication : 'Systèmes Multi-Agents, Communautés virtuelles et naturelles - (JFSMA) 08 - Seizièmes journées francophones sur les systèmes multi-agents',
        location: 'Brest, France',
        month: 'October',
        date: '15-17',
        pages     : '75--84',
        year      : '2008',
        crossref  : 'DBLP:conf/jfsma/2008',
        timestamp : 'Tue, 07 Feb 2012 21:02:53 +0100',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/jfsma/DibangoyeMC08',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
					'pdf': 'pdf/JSD-JFSMA08.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
        },
        abstract : ''
      },
      {
        editors    : 'Eds. Edmund H. Durfee and Makoto Yokoo and Michael N. Huhns and Onn Shehory',
        authors    : ['Jilles Steeve Dibangoye',
                     'Abdel-Illah Mouaddib',
                     'Brahim Chaib-draa'],
        title     : 'Periodic real-time resource allocation for teams of progressive processing agents',
        publication : '6th International Joint Conference on Autonomous Agents and Multiagent Systems (AAMAS)',
        location: 'Honolulu, Hawaii, USA',
        month: 'May',
        date: '14-18',
        pages     : '115',
        year      : '2007',
        crossref  : 'DBLP:conf/atal/2007',
        doi       : '10.1145/1329125.1329267',
        timestamp : 'Wed, 08 Jul 2009 01:00:00 +0200',
        biburl    : 'http://dblp.uni-trier.de/rec/bib/conf/atal/DibangoyeMC07',
        bibsource : 'dblp computer science bibliography, http://dblp.org',
        links : {
          'pdf': 'pdf/JSD-AAMAS07.pdf',
          'project': 'https://gcushen.github.io/hugo-academic-demo/project/deep-learning/',
          'details': 'https://gcushen.github.io/hugo-academic-demo/publication/object-re-identification/',
          'url'       : 'http://doi.acm.org/10.1145/1329125.1329267',
        },
        abstract : ''
      },
      {
        editors : 'Eds. Etienne Grandjean',
        title:'Problèmes de satisfaction de contraintes acycliques et leurs généralisations',
        authors:['Jilles Steeve Dibangoye'],
        publication : 'Master Thesis',
        institution: 'University Caen Basse-Normandie',
        year: '2005'
      },
    ];

    self.search = {};

    // pagination controls
  	self.currentPage = 1;
  	self.totalItems = self.Articles.length;
  	self.entryLimit = 2; // articles per page
  	self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);

    // $watch search to update pagination
  	$scope.$watch('search', function (newVal, oldVal) {
  		self.filtered = filterFilter(self.Articles, newVal);
  		self.totalItems = self.filtered.length;
  		self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
  		self.currentPage = 1;
  	}, true);

    // console.log('self.totalItems = ' + self.totalItems);
    // console.log('self.noOfPages = ' + self.noOfPages);
  }],
  templateUrl: 'views/components/publications.html'
});
