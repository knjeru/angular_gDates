(function() {

    'use strict';

    angular
        .module('app.auth')
        .controller('AuthCtrl', AuthCtrl);

        AuthCtrl.$inject = ['memberApiService'];

        function AuthCtrl (memberApiService) {
          
            var vm = this;


        }

})();
