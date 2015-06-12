var angular = require('angular');

/**
 * @param {Object} $q
 * @param {Object} $http
 * @constructor
 */
function ScreenService($q, $http) {
    this.$q = $q;
    this.$http = $http;
}

ScreenService.prototype = {
    loadConfig: function(url){
        return this.$http.get(url);
    }
};

module.exports = ScreenService;
