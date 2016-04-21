(function() {

    'use strict';

    angular
        .module('app.home')
        .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider'];

        function config ($stateProvider, $urlRouterProvider) {
            var vm = this;

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                      '': {
                        templateUrl: '/app/home/views/main.html'
                      },
                      'testimonials@home': {
                        templateUrl: '/app/home/views/testimonials.html'
                      }
                    },
                    controller: 'HomeCtrl',
                    controllerAs:  'vm',
                    css: '/app/styles/css/home.css'
                });
        }

})();
