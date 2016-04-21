(function() {
    
    'use strict';
    
    angular
        .module('app.nav-footer')
        .directive('footerView', footerView);

    footerView.$inject = [];

    function footerView() {
        return {
            restrict: 'E',
            templateUrl: '/app/nav-footer/views/footer.html',
            css: '/styles/css/footer.css'
        }
    }
})();