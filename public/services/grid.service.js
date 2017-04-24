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
    
});