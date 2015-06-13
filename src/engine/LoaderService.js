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
        var def = this.$q.defer();

        this.$http.get(url).then(function(res){
            def.resolve(res.data);
        });

        return def.promise;
    }
};

module.exports = LoaderService;
