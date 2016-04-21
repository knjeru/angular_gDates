(function() {

  'use strict';

  angular
    .module('app')
    .factory('memberApiService', memberApiService);

  memberApiService.$inject = ['$http'];

  function memberApiService($http) {

    var urlBase = 'https://galvanize-student-apis.herokuapp.com/gdating/members';
    var memberApi = {};

    memberApi.getAll = function() {
      return $http.get(urlBase + '?limit=10');
    };

    memberApi.getOne = function(id) {
      console.log(id);
      return $http.get(urlBase + '/' + id);
    };

    memberApi.updateOne = function(id, body) {
      return $http.put();
    };

    memberApi.deactivateOne = function(id) {
      return $http.delete(urlBase + '/');
    };

    return memberApi;
  }
})();
