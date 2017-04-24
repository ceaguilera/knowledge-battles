(function() {
  'use strict';
  angular
    .module('knowledgeBattlesApp', 
    [
        'ui.router',
        'ngCookies',
        'ngAnimate', 
        'ui.bootstrap',
        'knowledgeBattlesApp.home', 
        'knowledgeBattlesApp.login',
        'knowledgeBattlesApp.register',
        'knowledgeBattlesApp.game',
    ]);
})();

angular.module('knowledgeBattlesApp')
      .config(["$locationProvider", function($locationProvider) {
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      });
}]);
        