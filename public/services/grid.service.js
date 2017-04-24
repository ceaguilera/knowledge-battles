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
                    console.log(response);
                    $rootScope.enemies = response.data;
                }, function myError(response) {
                   console.log(response);
            });
        }
});