(function() {

    'use strict';

    angular
        .module('app.member-hub')
        .controller('HubCtrl', HubCtrl);

    HubCtrl.$inject = ['memberApiService'];

    function HubCtrl (memberApiService) {
        var vm = this;
        vm.members = [];
        vm.offset = 1;

        vm.pagination = function (input) {
            if (input === 'more') {
                vm.offset = vm.offset + 5;
            } else if (input === 'back') {
                vm.offset = vm.offset - 5;
            }

            memberApiService.getAll(vm.offset)
                .success(function(data) {
                    data.data.map(function(el) {
                        if (el.active === true && el.names.firstName !== "String") {
                            var updatedEl = el.names.firstName.substring(0,1)
                            vm.members.push(el);
                        }
                    });
                });
        };

        memberApiService.getAll(vm.offset)
            .success(function(data) {
                data.data.map(function(el) {
                    if (el.active === true && el.names.firstName !== "String") {
                        vm.members.push(el);
                    }
                });
                console.log(vm.members);
            });
    }
})();
