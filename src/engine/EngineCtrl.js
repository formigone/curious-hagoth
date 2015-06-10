var angular = require('angular');

/**
 *
 * @constructor
 */
function EngineCtrl(){
    this.activeScreen = {
        name: 'titleScreen',
        src: '/screen/title/main.html'
    };
}

module.exports = EngineCtrl;
