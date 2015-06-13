/**
 *
 * @constructor
 */
function TitleScreenCtrl(EventBus){
    this.EventBus = EventBus;
    this.title = 'CURIOUS HAGOTH';
}

TitleScreenCtrl.prototype = {
    onStart: function(){
        this.EventBus.emit('startGame');
    }
};

module.exports = TitleScreenCtrl;
