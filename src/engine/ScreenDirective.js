/**
 *
 * @constructor
 */
function ScreenDirective() {
    return {
        restrict: 'E',
        scope: {
            activeScreen: '='
        },
        templateUrl: '/screen/engine/screen-directive.html',
        controller: require('./ScreenCtrl'),
        controllerAs: 'ctr',
        bindToController: true
    };
}

module.exports = ScreenDirective;
