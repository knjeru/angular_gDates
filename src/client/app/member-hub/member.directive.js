(function() {

    'use strict';

    angular
        .module('app.member-hub')
        .directive('memberItem', memberItem);
    
    function memberItem() {
        return {
            restrict: 'E',
            scope: 'true',
            templateUrl: '/app/member-hub/views/member_item.html'
        }
    }
})();