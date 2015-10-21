(function () {
    angular.module('UnrealMatch')
        .factory('navigation', NavigationFactory);

    NavigationFactory.$inject = ['$http', '$cookies', '$location'];

    function NavigationFactory($http, $cookies, $location) {

        return {
            toStart: function () {
                $location.path("/start");
            },
            toGame: function () {
                $location.path("/game");
            },
            isStart: function () {
                return ($location.path() == "/start")
            }

        }
    }
})();