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
        
});