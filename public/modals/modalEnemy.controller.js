angular.module('knowledgeBattlesApp.game')
.controller('modalEnemy', function($scope, $rootScope, gameService, $uibModalInstance) {
    $scope.gameOver = false;
    $scope.correctAnswer = false;
    $scope.problem = gameService.attackProblem();
    $scope.cancel = function () {
        window.onkeydown = $rootScope.keypressOK;
        $uibModalInstance.dismiss('cancel');
    };
    $scope.sendAnswer = (response) => {
        if(gameService.solutionProblem(response, $scope.problem)) {
            console.log("correcto");
            $scope.correctAnswer = true;
            $rootScope.score = $rootScope.score + 15;
            setTimeout($scope.cancel, 1500);
        }else {
            console.log("incorrecto");
            $scope.gameOver = true;
        }
    }

    $scope.backHome = () => {
        location.href = '/';
    }

});