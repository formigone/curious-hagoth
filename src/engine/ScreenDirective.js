var angular = require('angular');

/**
 *
 * @constructor
 */
function ScreenDirective() {
    return {
        restrict: 'E',
        scope: {
            config: '@'
        },
        templateUrl: '/screen/engine/screen-directive.html',
        controller: ScreenDirectiveCtrl,
        controllerAs: 'ctr',
        bindToController: true
    };
}

function ScreenDirectiveCtrl(ScreenService) {
    /** @type {ScreenService} */
    this.screenService = ScreenService;

    this.config = this.config || null;
}

module.exports = ScreenDirective;
