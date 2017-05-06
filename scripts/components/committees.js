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

.component('committees', {
  controller: function($scope, filterFilter){
    var self = this;

    self.Committees = [
    {
			acronym : 'AIJ',
      title : 'Artificial Intelligence Journal',
      date: '2013, 2014, 2015, 2016',
      url : ''
    },
    {
			acronym : 'JAIR',
			title : 'Journal of Artificial Intelligence Research',
      date: '2013, 2014, 2015',
      url : ''
    },
    {
			acronym : 'AMAI',
			title : 'Annals of Mathematics and Artificial Intelligence',
      date: '2014, 2015, 2016, 2017',
      url : ''
    },
    {
			acronym : 'TRO',
			title : 'IEEE Transaction on Robotics',
      date: '2015',
      url : ''
    },
    {
			acronym : 'JAAMAS',
			title : 'Journal of  Autonomous Agent and Multi-Agent Systems',
      date: '2012, 2013',
      url : ''
    },
    {
			acronym : 'TSMC',
			title : 'IEEE Transaction on Systems, Man and Cybernetics',
      date: '2008, 2009',
      url : ''
    },
    {
			acronym : 'IJCAI',
			title : 'International Joint Conference on Artificial Intelligence',
      date: '2012, 2013, 2014, 2015',
      url : ''
    },
    {
			acronym : 'AAMAS',
			title : 'International Conference on Autonomous Agents and Multiagent Systems',
      date: '2013, 2014, 2015, 2016',
      url : ''
    },
    {
			acronym : 'AAAI',
			title : 'Conference on Artificial Intelligence',
      date: '2013, 2014',
      url : ''
    },
		{
			acronym : 'MSDM',
			title : 'International Workshop on Multiagent Sequential Decision Making Under Uncertainty',
      date: '2012, 2013, 2014',
			url : ''
    },
		{
			acronym : 'IROS\' Workshop',
			title : 'International Workshop on On-line decision-making in multi-robot coordination at the International Conference on Intelligent Robots and Systems',
      date: '2015',
			url : ''
    },
		{
			acronym : 'JFSMA',
			title : 'Les Journées Francophones sur les Systèmes Multi-Agents',
      date: '2016',
			url : ''
    },
		{
			acronym : 'RIA',
			title : 'Revue d\'Intelligence Artificielle',
      date: '2016',
			url : ''
    },
    ];

    self.search = {};
    // pagination controls
  	self.currentPage = 1;
  	self.totalItems = self.Committees.length;
  	self.entryLimit = 4; // avenues per page
  	self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
    // $watch search to update pagination
  	$scope.$watch('search', function (newVal, oldVal) {
  		self.filtered = filterFilter(self.Committees, newVal);
  		self.totalItems = self.filtered.length;
  		self.noOfPages = Math.ceil(self.totalItems / self.entryLimit);
  		self.currentPage = 1;
  	}, true);
  },

  templateUrl: 'views/components/committees.html'
});
