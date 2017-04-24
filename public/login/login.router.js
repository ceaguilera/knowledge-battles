(function() {
    'use strict';

    angular.module('knowledgeBattlesApp.login')
        .config(myApp);

    myApp.$inject = ['$stateProvider'];

    function myApp($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: './login/login.html',
            controller: 'login',
            controllerAs: 'vm'
        });
    }
})();