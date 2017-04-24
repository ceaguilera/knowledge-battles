angular.module('knowledgeBattlesApp.game')
.controller('game', function($scope, $rootScope, $log, $http, $cookies, gridService, gameService, $uibModal) {
    
    /*Initializes initial game values*/
    (function initGame() {
        $scope.grids = gridService.createGrid();
        $rootScope.posXAct = null; 
        $rootScope.posYAct = null;
        gridService.initGrid($scope.grids);
        gridService.loadEnemy();
        gridService.assignEnemies(1, $scope.grids);
        gridService.potitionInitial($scope.grids);
        //console.log($scope.grids, $rootScope.posXAct, $rootScope.posYAct);
    })();
    
    window.focus();
    window.onkeydown = keypress

    function keypress() {
        switch (event.keyCode) {
            case 37:
                gameService.move("left", $scope.grids);
                //gameService.enemyOn($scope.grids);
                gameService.mapCompleted($scope.grids);
                //console.log(37);
                break;
            case 38:
                gameService.move("up", $scope.grids);
                //gameService.enemyOn($scope.grids)
                gameService.mapCompleted($scope.grids);
                //console.log(38);
                break;
            case 39:
                gameService.move("rigth", $scope.grids);
                //gameService.enemyOn($scope.grids);
                gameService.mapCompleted($scope.grids);
                //console.log(39);
                break;
            case 40:
                gameService.move("down", $scope.grids);
                //gameService.enemyOn($scope.grids);
                gameService.mapCompleted($scope.grids);
                //console.log(40);
                break;
            default:
                break;
        }
    }

    $scope.open = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'modalPrueba.html',
        });
    }

});