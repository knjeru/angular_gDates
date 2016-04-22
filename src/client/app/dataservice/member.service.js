(function() {

  'use strict';

  angular
    .module('app')
    .factory('memberApiService', memberApiService);

  memberApiService.$inject = ['$http'];

  function memberApiService($http) {

    var urlBase = 'https://galvanize-student-apis.herokuapp.com/gdating/members';

    return {

      getAll: function(offset) {
        return $http.get(urlBase + '?limit=5' + '&offset=' + offset);
      },

      getOne: function(id) {
        return $http.get(urlBase + '/' + id);
      },

      updateOne: function(id, body) {
        return $http.put(urlBase + '/' + id, body);
      },

      deactivateOne: function(id) {
        return $http.delete(urlBase + '/' + id);
      }
    }
  }
})();
