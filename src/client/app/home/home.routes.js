(function() {

    'use strict';

    angular
        .module('app.home')
        .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

        function config ($stateProvider, $urlRouterProvider, $httpProvider) {
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
                    css: '/styles/css/home.css'
                });

            $httpProvider
                .interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {

                return {
                    'request': function (config) {
                        config.headers = config.headers || {};
                        if ($localStorage.token) {
                            config.headers['x-access-token'] = $localStorage.token;
                        }
                        return config;
                    },
                    'responseError': function (response) {
                        if (response.status === 401 || response.status === 403) {
                            $location.path('/login');
                        }
                        return $q.reject(response);
                    }
                };
            }]);
        }

})();
