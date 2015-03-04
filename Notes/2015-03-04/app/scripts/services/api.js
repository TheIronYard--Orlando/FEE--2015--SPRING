'use strict';

/**
 * @ngdoc service
 * @name 20150304App.API
 * @description
 * # API
 * Factory in the 20150304App.
 */
angular.module('20150304App')
  .factory('API', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
