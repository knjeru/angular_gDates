(function() {

    'use strict';

    angular
        .module('app.member-hub')
        .controller('HubCtrl', HubCtrl);

    HubCtrl.$inject = ['memberApiService'];

    function HubCtrl (memberApiService) {
        console.log('her in this ctrl');
        var vm = this;
        vm.members = [];

        memberApiService.getAll()
            .success(function(data) {
                console.log(data);
                data.map(function(el) {
                    if (el.active === true) {
                        vm.members.push(el);
                    }
                })
            });
    }
})();
