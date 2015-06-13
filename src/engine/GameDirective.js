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
        controllerAs: 'game',
        bindToController: true
    };
}

module.exports = GameDirective;
