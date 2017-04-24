(function() {
    'use strict';

    angular.module('knowledgeBattlesApp.home')
        .config(myApp);

    myApp.$inject = ['$stateProvider'];

    function myApp($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: './home/home.html',
            controller: 'home',
            controllerAs: 'vm'
        });
    }
})();