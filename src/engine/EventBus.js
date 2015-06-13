var angular = require('angular');

/**
 *
 * @constructor
 */
function EventBus(){
    this.listeners = {};
}

EventBus.prototype = {
    on: function(event, handler){
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(handler);
    },
    emit: function(event, data){
        if (this.listeners[event] instanceof Array) {
            data = data || {};
            angular.forEach(this.listeners[event], function(handler){
                handler(data);
            });
        }
    }
};

module.exports = EventBus;