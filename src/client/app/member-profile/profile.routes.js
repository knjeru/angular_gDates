(function() {

    'use strict';

    angular
        .module('app.member-profile')
        .config(config);

    config.$inject = ['$stateProvider', '$httpProvider'];

    function config ($stateProvider, $httpProvider) {
        var vm = this;

        $stateProvider
            .state('profile', {
                url: '/profile/member/:id',
                views: {
                    '': {
                        templateUrl: '/app/member-profile/views/main.html',
                        controller: 'ProfileCtrl',
                        controllerAs: 'vm'
                    },
                    'user@profile': {
                        templateUrl: '/app/member-profile/views/user.html'
                    },
                    'edit@profile': {
                        templateUrl: '/app/member-profile/views/edit.html'
                    }
                },
                css: '/styles/css/profile.css'
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
