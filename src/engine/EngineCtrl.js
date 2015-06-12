var angular = require('angular');

/**
 *
 * @param {LoaderService} LoaderService
 * @constructor
 */
function EngineCtrl(LoaderService) {
    this.LoaderService = LoaderService;

    this.teams = [];
    this.scoreboard = [];
    this.currTurn = 0;
    this.screens = [];
    this.activeScreen = {};

    this.activeScreen = {
        name: 'titleScreen',
        src: '/screen/title/main.html'
    };

    this.init();
}

EngineCtrl.prototype = {
    onScore: function (points) {
    },
    onGameOver: function () {
    },
    onSwitchScreen: function (screenName) {
    },
    init: function(){
        this.LoaderService.get('test');
    }
};

module.exports = EngineCtrl;
