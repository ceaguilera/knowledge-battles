angular.module('knowledgeBattlesApp').
    factory("gameService", function($rootScope, $http, $uibModal,$window) {
        /* function for open modals  */
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
        /* Function for handling game movements */
        move : function(direction, grid) {
            if(!grid[$rootScope.posXAct][$rootScope.posYAct].explored)
                $rootScope.score = $rootScope.score + 5;
            grid[$rootScope.posXAct][$rootScope.posYAct].explored = true;
            grid[$rootScope.posXAct][$rootScope.posYAct].active = false;
            
            switch (direction) {
                case "left":
                    if(($rootScope.posYAct-1>=0) && ($rootScope.posYAct-1<10)) {
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
        /* Function to detect if it is an enemy */
        enemyOn : function(grid) {
            if(grid[$rootScope.posXAct][$rootScope.posYAct].enemy && !grid[$rootScope.posXAct][$rootScope.posYAct].explored)
                open('modalEnemy.html', 'modalEnemy');
        },
        /* Function that verifies if the entire map is explored */
        mapCompleted : function (grid) {
            let compled = true;
            let i = 0;
            let j = 0;
            while (i<10 && compled) {
                j = 0;
                while(j<10 && compled) {
                    if(grid[i][j].explored)
                        j++;
                    else
                        compled = false;
                }
                i++;
            }
            if(compled){
                open('modalWin.html');
            }
        },
        /* Function that assigns a mathematical problem */
        attackProblem : function () {
            return $rootScope.enemies[Math.floor(Math.random()*20)];
        },
        /* Function that returns from the solution of the mathematical problem */
        solutionProblem : function (response, problem) {;
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
            return solution == response;
        },
        /* Function that saves the game */
        saveGame : function (grid) {
            let users = JSON.parse($window.localStorage.getItem('Users'));
            const dateUser = new Object();
            dateUser.grid = grid;
            dateUser.posXAct = $rootScope.posXAct;
            dateUser.posYAct = $rootScope.posYAct;
            dateUser.score = $rootScope.score;
            dateUser.level = $rootScope.level;
            dateUser.email = $rootScope.user.email;
            dateUser.character = $rootScope.user.character
            angular.forEach(users, function(user, key) {
                if(user.email === $rootScope.user.email){
                    angular.copy(dateUser, user);
                }
            });
            $window.localStorage.setItem('Users', JSON.stringify(users));
            location.href = '/';
        }
        
    }
});