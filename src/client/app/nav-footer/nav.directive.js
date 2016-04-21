(function() {
    'use strict';

    angular
        .module('app.nav-footer')
        .directive('navbarView', navbarView)
        .controller('NavCtrl', NavCtrl);

    navbarView.$inject = [];
    NavCtrl.$inject = [];

    function navbarView() {
        return {
            restrict: 'E',
            templateUrl: '/app/nav-footer/views/navbar.html',
            controller: 'NavCtrl',
            css: '/styles/css/nav.css'
        }
    }

    function NavCtrl() {
    // navbar controller
    }
})();