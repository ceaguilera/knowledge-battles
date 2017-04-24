angular.module('knowledgeBattlesApp.register')
.controller('register', function($scope, $log, $http, $window, $state) {
    $scope.characters = [
        {
            id: 1,
            name: "Simón Bolívar",
            urlImage: "../assets/images/characters/bolivar.jpg",
            select : false
        },
        {
            id: 2,
            name: "Luisa Cáceres de Arismend",
            urlImage: "../assets/images/characters/Luisacaceres.jpg",
            select : false
        },
        {
            id: 3,
            name: "Francisco de Miranda",
            urlImage: "../assets/images/characters/miranda.jpg",
            select : false
        },
        {
            id: 4,
            name: "José Antonio Páez",
            urlImage: "../assets/images/characters/paez.jpg",
            select : false
        },
        {
            id: 5,
            name: "Rafael Urdaneta",
            urlImage: "../assets/images/characters/RafaelUrdaneta.jpg",
            select : false
        },
        {
            id: 6,
            name: "Santiago Mariño",
            urlImage: "../assets/images/characters/marino.jpg",
            select : false
        }
    ]

    $scope.selectCharacter = (id) => {
        angular.forEach($scope.characters, function(character, key) {
            character.select = character.id === id ? true : false; 
        })
    }
    console.log($scope.characters);
});