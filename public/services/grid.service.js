angular.module('knowledgeBattlesApp').
    service("gridService", function($rootScope, $http) {
        /* Create table 10x10 */
        this.createGrid = function() {
            let grid = new Array(10);
            for(let i=0;i<10;i++){
                grid[i] = new Array(10);
            }
            return grid;
        }
        /* Initialitian the grid for init game */
        this.initGrid = function(grid) {
            for(let i=0;i<10;i++){
                for(let j=0;j<10;j++){
                    grid[i][j] = {
                        active: false,
                        explored: false,
                        enemy: false 
                    }
                }
            }
        }
        /* Load enemies of the file enemies.js that is in the root of the project */
        this.loadEnemy = function() {
            $http.get("/enemies.json")
                .then(function mySucces(response) {
                    $rootScope.enemies = response.data;
                }, function myError(response) {
                   console.log(response);
            });
        }
        /* Calculation the enemies for level */
        this.assignEnemies = function (level, grid) {
            let numEnemies = (2 * 20) - (level * 5);
            let i = 0;
            while (i < numEnemies) {
                let posRandomOne = Math.floor(Math.random()*10);
                let posRandomTwo = Math.floor(Math.random()*10);
                grid[posRandomOne][posRandomTwo].enemy = true;
                posRandomOne = null;
                posRandomTwo = null;
                i++;
            }
        }
        /* Potiion anitial */
        this.potitionInitial =  function (grid) {
            $rootScope.posXAct = Math.floor(Math.random()*10);
            $rootScope.posYAct = Math.floor(Math.random()*10);
            grid[$rootScope.posXAct][$rootScope.posYAct].active = true;
        }
});