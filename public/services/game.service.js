angular.module('knowledgeBattlesApp').
    factory("gameService", function($rootScope, $http, $uibModal) {
        var open = function (template, Controller) {
            window.onkeydown = null;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: template,
                backdrop  : 'static',
                keyboard  : false,
                controller: Controller,
            });
        }
    return{
        /*  */
        move : function(direction, grid) {
            grid[$rootScope.posXAct][$rootScope.posYAct].explored = true;
            grid[$rootScope.posXAct][$rootScope.posYAct].active = false;
            //console.log($rootScope.posXAct,$rootScope.posYAct);
            //console.log( grid[$rootScope.posXAct][$rootScope.posYAct]);
            switch (direction) {
                case "left":
                    //console.log("entro left");
                    if(($rootScope.posYAct-1>=0) && ($rootScope.posYAct-1<10)) {
                        //console.log("entro en la condicion",$rootScope.posYAct, $rootScope.posYAct)
                        grid[$rootScope.posXAct][$rootScope.posYAct-1].active = true;
                        $rootScope.posYAct = $rootScope.posYAct-1;
                        $rootScope.$apply();
                    }
                    break;
                case "up":
                    if(($rootScope.posXAct-1>=0) && ($rootScope.posXAct-1<10)) {
                        grid[$rootScope.posXAct-1][$rootScope.posYAct].active = true;
                        $rootScope.posXAct = $rootScope.posXAct-1;
                        $rootScope.$apply();
                    }
                    break;
                case "rigth":
                   if(($rootScope.posYAct+1>=0) && ($rootScope.posYAct+1<10)) {
                        grid[$rootScope.posXAct][$rootScope.posYAct+1].active = true;
                        $rootScope.posYAct =$rootScope.posYAct+1;
                        $rootScope.$apply();
                    }
                    break;
                case "down":
                    if(($rootScope.posXAct+1>=0) && ($rootScope.posXAct+1<10)) {
                        grid[$rootScope.posXAct+1][$rootScope.posYAct].active = true;
                        $rootScope.posXAct = $rootScope.posXAct+1;
                        $rootScope.$apply();
                    }
                    break;
                default:
                    break;
            }
        },
        enemyOn : function(grid) {
            //console.log($rootScope.posXAct);
            //console.log($rootScope.posYAct);
            if(grid[$rootScope.posXAct][$rootScope.posYAct].enemy)
                open('modalEnemy.html', 'modalEnemy');
        },
        mapCompleted : function (grid) {
            let compled = true;
            let i = 0;
            let j = 0;
            console.log("Comenzo")
            while (i<10 && compled) {
                console.log("i",i);
                j = 0;
                while(j<10 && compled) {
                    console.log("j",j);
                    if(grid[i][j].explored)
                        j++;
                    else
                        compled = false;
                }
                i++;
            }
            console.log(compled);
            if(compled){
                open('modalWin.html');
            }
        },
        attackProblem : function () {
            return $rootScope.enemies[Math.floor(Math.random()*20)];
        },
        solutionProblem : function (response, problem) {
            console.log(response, problem);
            let solution;
            switch (problem.operation) {
                case "+":
                    solution = (problem.numberOne + problem.numberTwo);
                    break;
                case "-":
                    solution = (problem.numberOne - problem.numberTwo);
                    break;
                case "*":
                    solution = (problem.numberOne * problem.numberTwo);
                    break;
                case "/":
                    solution = (problem.numberOne / problem.numberTwo);
                    break;
                default:
                    break;
            }
            console.log(solution);
            return solution == response;
        }
        
    }
});