angular.module('knowledgeBattlesApp.game')
.controller('modalEnemy', function($scope, $rootScope, gameService, $uibModalInstance) {
    $scope.gameOver = false;
    $scope.correctAnswer = false;
    /* function to assign problem */
    $scope.problem = gameService.attackProblem();

    /* function close modals */
    $rootScope.cancel = function () {
        window.onkeydown = $rootScope.keypressOK;
        $uibModalInstance.dismiss('cancel');
    };

    /* function send response and verify if correct */
    $scope.sendAnswer = (response) => {
        if(gameService.solutionProblem(response, $scope.problem)) {
            $scope.correctAnswer = true;
            $rootScope.score = $rootScope.score + 15;
            setTimeout($rootScope.cancel, 1000);
        }else {
            $scope.gameOver = true;
        }
    }

    /* reset game */
    $scope.reset = () => {
        setTimeout(function(){ 
            $rootScope.resetGame();
            $rootScope.cancel(); 
        }, 1000);
    }

    /* back Home */
    $scope.backHome = () => {
        location.href = '/';
    }

});