(function() {
  'use strict';

  angular.module('angular-jsonapi')
  .run(function(validateJS, $q) {
    validateJS.Promise = $q;
  });
})();
