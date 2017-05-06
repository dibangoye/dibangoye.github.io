/* Whole javascript in strict mode */
'use strict';

// Get a reference to Angular application module angularjsSimpleWebsiteApp.
angular.module('angularjsSimpleWebsiteApp')

.component('highlights', {
  controller: function($interval){
    var self = this;
    // Define the paths, the partials (page templates) and the link names.
    self.Slides = [
      {
        title: 'Occupancy-State MDPs',
        cite: 'Journal of Artificial Intelligence Research',
        image: 'images/jair.jpg',
        url: 'http://dx.doi.org/10.1613/jair.4623',
        message: 'Decentralized partially observable Markov decision processes (Dec-POMDPs) provide a general model for decision-making under uncertainty in decentralized settings, but are difficult to solve optimally. As a new way of solving these problems, we introduce the idea of transforming a Dec-POMDP into a continuous-state deterministic MDP with a piecewise-linear and convex value function.'
      },
      {
        title: 'AAMAS\'14 Best-Paper Award',
        cite: 'AAMAS Conference',
        image: 'images/aamas14.jpg',
        url : '',
        message: 'Recent years have seen significant advances in techniques for optimally solving multiagent problems represented as decentralized partially observable Markov decision processes (Dec-POMDPs). A new method achieves scalability gains by converting Dec-POMDPs into continuous state MDPs.'
      },
      {
        title: 'A Beautiful Theory ...',
        cite: 'Work in Progress',
        image: 'images/jvn.jpg',
        message: 'The increasing penetration of multi-agent systems in the society will require a paradigm shift—from single- to multi-agent planning and learning algorithms. To this end, we aim at designing a generic software that can efficiently compute rational strategies for a group of cooperating or competing agents in spite of stochasticity and sensing uncertainty.'
      },
      // {
      //   title: 'AI for Social Good',
      //   cite: 'Milind Tambe',
      //   image: 'http://lorempixel.com/150/150/sports',
      //   message: 'Design pattern into how it builds client-side web applications. AngularJS design pattern into how it builds client-side web applications. AngularJS does not implement MVC in the traditional sense, but rather something closer  to MVVM (Model-View-ViewModel).'
      // }
    ];

    self.number = 0;
    self.slide  = self.Slides[0];

    $interval( function(){
      self.number++;
      self.slide = self.Slides[self.number % self.Slides.length];
    }, 12000);
  },

  templateUrl: 'views/components/highlights.html'
});
