(function() {

    'use strict';

    angular
        .module('app.member-hub')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
        var vm = this;

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('hub', {
                url: '/hub',
                templateUrl: '/app/member-hub/views/main.html',
                controller: 'HubCtrl',
                controllerAs:  'vm',
                css: '/styles/css/hub.css'
            })
            .state('hub.selected', {
                url: '/selected/:slug',
                templateUrl: 'app/member-hub/views/selected.html',
                controller: 'ProfileCtrl',
                controllerAs: 'vm',
                css: '/styles/css/selected_member.css'
            })
            .state('hub.chat', {
                url: '/:id/chat',
                templateUrl: '/app/member-hub/views/chat.html',
                controller: 'ProfileCtrl',
                controllerAs: 'vm',
                css: '/style/css/chat.css'
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
