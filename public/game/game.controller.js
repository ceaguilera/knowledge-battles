angular.module('knowledgeBattlesApp.game')
.controller('game', function($scope, $rootScope, gridService, gameService, $uibModal) {
    
    /* Initializes initial game values */
     $scope.initGame = () => {
        $scope.grids = gridService.createGrid();
        $rootScope.posXAct = null; 
        $rootScope.posYAct = null;
        $rootScope.level = 1;
        $rootScope.score = 0;
        gridService.initGrid($scope.grids);
        gridService.loadEnemy();
        gridService.assignEnemies(6, $scope.grids);
        gridService.potitionInitial($scope.grids);
    };
    $scope.initGame();
    /* End initializes initial game values */

    /* Game controller management */
    window.focus();
    window.onkeydown = keypress;
    $rootScope.keypressOK = keypress;

    function keypress() {
        switch (event.keyCode) {
            case 37:
                gameService.move("left", $scope.grids);
                gameService.enemyOn($scope.grids);
                gameService.mapCompleted($scope.grids);
                break;
            case 38:
                gameService.move("up", $scope.grids);
                gameService.enemyOn($scope.grids)
                gameService.mapCompleted($scope.grids);
                break;
            case 39:
                gameService.move("rigth", $scope.grids);
                gameService.enemyOn($scope.grids);
                gameService.mapCompleted($scope.grids);
                break;
            case 40:
                gameService.move("down", $scope.grids);
                gameService.enemyOn($scope.grids);
                gameService.mapCompleted($scope.grids);
                break;
            default:
                break;
        }
    }
    /* End game controller management */

    /* Function calling the service to save the game */
    $scope.saveGame = () => {
        gameService.saveGame($scope.grids);
    } 

    /* Function reset game */
    $rootScope.resetGame = () => {
        setTimeout(function(){ 
            $scope.initGame();
            $rootScope.cancel(); 
        }, 1000);
    };

    /* Function Back Home */
    $scope.backHome = () => {
        location.href = '/';
    }
   
});