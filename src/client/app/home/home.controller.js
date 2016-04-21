(function() {

    'use strict';

    angular
        .module('app.home')
        .controller('HomeCtrl', HomeCtrl);

        HomeCtrl.$inject = ['memberApiService'];

        function HomeCtrl (memberApiService) {
            var vm = this;

            memberApiService.getAll()
                .success(function(data) {
                    vm.testmonials = data;
                });
        }

})();
