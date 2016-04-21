(function() {

    'use strict';

    angular
        .module('app.auth')
        .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider'];

        function config ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: '/app/auth/views/login.html',
                    controller: 'AuthCtrl',
                    controllerAs:  'vm'
                })
                .state('register', {
                  url: '/register',
                  templateUrl: '/app/auth/views/register.html',
                  controller: 'AuthCtrl',
                  controllerAs: 'vm'
                })
        }

})();
