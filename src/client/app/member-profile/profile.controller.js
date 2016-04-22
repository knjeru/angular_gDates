(function() {

    'use strict';

    angular
        .module('app.member-profile')
        .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['memberApiService', '$stateParams'];

    function ProfileCtrl (memberApiService, $stateParams) {
        var vm = this;
        var slug  = $stateParams.slug;
        vm.loading = true;
        memberApiService.getAllNoOffset()
            .success(function(data) {
                data.data.map(function(el) {
                    if (el.slug === slug) {
                        vm.member = el;
                    }
                })
            })
            .finally(function() {
                vm.loading = false;
            })
    }
})();
