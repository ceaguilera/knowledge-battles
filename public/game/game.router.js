(function() {
    'use strict';

    angular.module('knowledgeBattlesApp.game')
        .config(myApp);

    myApp.$inject = ['$stateProvider'];

    function myApp($stateProvider) {
        $stateProvider.state('game', {
            url: '/game',
            templateUrl: './game/game.html',
            controller: 'game',
            controllerAs: 'vm'
        });
    }
})();