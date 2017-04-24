angular.module('knowledgeBattlesApp').
    factory("gameService", function($rootScope, $http, $uibModal) {
        var open = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'modalPrueba.html',
            });
        }

    return{
        /*  */
        move : function(direction, grid) {
            grid[$rootScope.posXAct][$rootScope.posYAct].explored = true;
            grid[$rootScope.posXAct][$rootScope.posYAct].active = false;
            console.log($rootScope.posXAct,$rootScope.posYAct);
            console.log( grid[$rootScope.posXAct][$rootScope.posYAct]);
            switch (direction) {
                case "left":
                    console.log("entro left");
                    if(($rootScope.posYAct-1>=0) && ($rootScope.posYAct-1<10)) {
                        console.log("entro en la condicion",$rootScope.posYAct, $rootScope.posYAct)
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
            console.log($rootScope.posXAct);
            console.log($rootScope.posYAct);
            if(grid[$rootScope.posXAct][$rootScope.posYAct].enemy)
                open();
        },
        mapCompleted : function(grid) {
            let compled = true;
            let i = 0;
            let j = 0;
            console.log(i,j,compled)
            while (i<9 && compled) {
                console.log("entro en el while");
                while(j<9 && compled) {
                    if(grid[i][j].explored)
                        j++;
                    else
                        compled = false;
                }
                i++;
            }
            console.log(compled);
            if(compled){
                open();
            }
        }
    }
});