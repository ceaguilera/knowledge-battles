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

/* Remove prefix # url */
angular.module('knowledgeBattlesApp')
      .config(["$locationProvider", function($locationProvider) {
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      });
}]);

/* Initializes localStorage */
angular.module('knowledgeBattlesApp')
      .run(function($window, $rootScope) {
          if($window.localStorage.getItem('Users') === null)
          {
               let users = new Array();
               $window.localStorage.setItem('Users', JSON.stringify(users));
          }

});