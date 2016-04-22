(function() {

    'use strict';

    angular
        .module('app.home')
        .controller('TestimonialsCtrl', TestimonialsCtrl);

        TestimonialsCtrl.$inject = ['testimonials', '$interval'];

        function TestimonialsCtrl(testimonials, $interval) {
            var vm = this;
            vm.testimonials = [];
            vm.offset = 0;
            vm.testimonials = testimonials.data[0];

            $interval(function() {
                if (vm.offset < testimonials.data.length) {
                    vm.testimonials = testimonials.data[vm.offset++];
                    console.log(vm.testimonials);
                } else {
                    vm.offset = 0;
                }
            }, 2500);

        }
})();