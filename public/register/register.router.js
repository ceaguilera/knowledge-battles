(function() {
    'use strict';

    angular.module('knowledgeBattlesApp.register')
        .config(myApp);

    myApp.$inject = ['$stateProvider'];

    function myApp($stateProvider) {
        $stateProvider.state('register', {
            url: '/register',
            templateUrl: './register/register.html',
            controller: 'register',
            controllerAs: 'vm'
        });
    }
})();