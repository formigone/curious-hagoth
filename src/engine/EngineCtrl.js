var angular = require('angular');

/**
 *
 * @param {EventBusLoaderService} EventBus
 * @param {LoaderService} LoaderService
 * @constructor
 */
function EngineCtrl(EventBus, LoaderService) {
    this.EventBus = EventBus;
    this.LoaderService = LoaderService;

    this.config = this.config || null;

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
        if (typeof this.config !== 'string'){
            throw new Error('No config supplied');
        }

        this.EventBus.on('startGame', angular.bind(this, function(){
//            window.alert('Ready... play!!');
this.activeScreen = {
  name: 'Test Screen',
  src: '/screen/test/testScreen.html'
};
        }));

        this.LoaderService.get(this.config).then(function(config){
            this.teams = config.data.teams;
            this.screens = config.data.screens;
            this.activeScreen = config.data.screens[config.data.activeScreenId];
        }.bind(this));
    }
};

module.exports = EngineCtrl;
