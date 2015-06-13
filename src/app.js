var Hagoth = require('./Hagoth');

Hagoth.service('EventBus', require('./engine/EventBus'));
Hagoth.service('ScreenService', require('./engine/ScreenService'));
Hagoth.service('LoaderService', require('./engine/LoaderService'));

Hagoth.controller('TitleScreenCtrl', require('./titleScreen/TitleScreenCtrl'));

Hagoth.directive('chGame', require('./engine/GameDirective'));
Hagoth.directive('chScreen', require('./engine/ScreenDirective'));
