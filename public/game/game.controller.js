angular.module('knowledgeBattlesApp.game')
.controller('game', function($scope, $rootScope, $log, $http, auth, $cookies, gridService, gameService) {
        
    window.focus();
    window.onkeydown = keypress

    function keypress() {
        switch (event.keyCode) {
            case 37:
                gameService.move("left", $scope.grids);
                console.log(37);
                break;
            case 38:
                gameService.move("up", $scope.grids);
                console.log(38);
                break;
            case 39:
                gameService.move("rigth", $scope.grids);
                console.log(39);
                break;
            case 40:
                gameService.move("down", $scope.grids);
                console.log(40);
                break;
            default:
                break;
        }
    }

});