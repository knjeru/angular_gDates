(function() {

  'use strict';

  angular
    .module('app')
    .factory('memberApiService', memberApiService);

  memberApiService.$inject = ['$http'];

  function memberApiService($http) {

    var urlBase = '';
    var memberApi = {};

    memberApi.getAll = function() {
      return $http.get(urlBase);
    };

    memberApi.getOne = function(id) {
      return $http.get();
    };

    memberApi.addOne = function(body) {
      return $http.post();
    };

    memberApi.updateOne = function(id, body) {
      return $http.put();
    };

    memberApi.deactivateOne = function(id, body) {
      return $http.put();
    };

    return memberApi;
  }
})();
