(function() {

    'use strict';

    angular
        .module('app')
        .filter('capitalize', capitalize);
    
    function capitalize() {
        return function (input) {
            return (angular.isString(input) && input.length > 0) ? input[0].toUpperCase() + input.substr(1).toLowerCase() : input;
        }
        
    }
})();