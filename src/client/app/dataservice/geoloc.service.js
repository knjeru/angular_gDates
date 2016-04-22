(function() {

    'use strict';

    angular
        .module('app')
        .service('geoloc', geoloc);

    geoloc.$inject = ['$http'];

    function geoloc($http) {
        var urlBase = 'http://ip-api.com/json';

        return {

            getLocation: function () {
                return $http.get(urlBase);
            }
            
        }
    }
})();