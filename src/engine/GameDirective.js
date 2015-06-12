var angular = require('angular');

/**
 *
 * @constructor
 */
function GameDirective() {
    return {
        restrict: 'E',
        scope: {
            config: '@'
        },
        templateUrl: '/screen/engine/game-directive.html',
        controller: require('./EngineCtrl'),
        controllerAs: 'engine',
        bindToController: true
    };
}

module.exports = GameDirective;
