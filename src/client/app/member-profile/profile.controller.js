(function() {

    'use strict';

    angular
        .module('app.member-profile')
        .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['memberApiService', '$stateParams'];

    function ProfileCtrl (memberApiService, $stateParams) {
        var vm = this;
        var id  = $stateParams.id;

        memberApiService.getOne(id)
            .success(function(data) {
                 vm.member = data.data;
                console.log('members indiv', vm.member);
            });
    }
})();
