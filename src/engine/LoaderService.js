var angular = require('angular');

/**
 * @param {Object} $q
 * @param {Object} $http
 * @constructor
 */
function LoaderService($q, $http) {
    this.$q = $q;
    this.$http = $http;
}

LoaderService.prototype = {
    get: function(url){
        return this.$http.get(url);
    }
};

module.exports = LoaderService;
