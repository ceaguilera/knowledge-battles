angular.module('knowledgeBattlesApp.register')
.controller('register', function($scope, $rootScope, $state, $window) {
    $rootScope.user = {};
    /* Objet for info charactes */
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

    /* function for seled un character */
    $scope.selectCharacter = (id,pos) => {
        $rootScope.user.character = $scope.characters[pos];
        angular.forEach($scope.characters, function(character, key) {
            character.select = character.id === id ? true : false; 
        })
    }

    /* function for start game */
    $scope.play = () => {
        if(!$scope.register.$invalid && $scope.user.character != null){
            let users = JSON.parse(window.localStorage.getItem('Users'));
            users.push($rootScope.user);
            $window.localStorage.setItem('Users', JSON.stringify(users));
            $state.go("game");
        }else {
            console.log("no envia formilario");
        }
    }
});