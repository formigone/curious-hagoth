var Hagoth = angular.module('Hagoth', []);

Hagoth.controller('IndexCtrl', function(){
    this.screens = [
        {name: 'title', url: 'screen/title.html'}
    ];
    this.screen = this.screens[0];
});

Hagoth.controller('TitleScreenCtrl', function(){
    this.title = 'Curious Hagoth';
});
