(function(){

    'use strict';

    angular
        .module('app')
        .service('testimonials', testimonials);

    testimonials.$inject = [];

    function testimonials() {
       return {
           data: [
               {
                   "author": "Lisa and Mark",
                   "text": "Mark and I met on February 23, 2009. Neither " +
                   "of us imagined we would ever meet our soul mates on online.",
                   "imageUrl": "http://static.eharmony.com/assets/success/couples/thumbs/2585-1371850453.jpg"
               },
               {
                   "author": "Bruce and Lorri",
                   "text": "Since meeting the love of my life on your site I " +
                   "wanted to convey our thanks, and let you know of our future plans...",
                   "imageUrl": "http://static.eharmony.com/assets/success/couples/thumbs/2469-1365540015.jpg"
               },
               {
                   "author": "Theresa and Brad",
                   "text": "My brother and sister-law kept raving about gDates. " +
                   "Ironically, they are one of thousands of eHarmony’s success...",
                   "imageUrl": "http://static.eharmony.com/assets/success/couples/thumbs/2455-1365459003.jpg"
               },
               {
                   "author": "Christie and Roberto",
                   "text": "I went on a lot of first dates, and was just about to take " +
                   "another break from dating when I met with Roberto on December...",
                   "imageUrl": "http://static.eharmony.com/assets/success/couples/thumbs/2251-1328830033.jpg"
               },
               {
                   "author": "Kelly and Jeremy",
                   "text": "I met Jeremy, one week before my subscription to gDates expired. " +
                   "Talk about timing right?",
                   "imageUrl": "http://static.eharmony.com/assets/success/couples/thumbs/2429-1365538678.jpg"
               },
               {
                   "author": "Elvira and Todd",
                   "text": "I was on gDates for the better part of a year. Met a few nice ladies " +
                   "but nothing really sparked. Elvira signed on and...",
                   "imageUrl": "http://static.eharmony.com/assets/success/couples/thumbs/2513-1366144414.jpg"
               },
               {
                   "author": "",
                   "text": "I was a huge believer in the phrase \"Everything happens for a reason\" " +
                   "before gDates, and now I'm living proof.",
                   "imageUrl": "http://static.eharmony.com/assets/success/couples/thumbs/2525-1366930406.jpg"
               }
           ]
       };
    }
})();