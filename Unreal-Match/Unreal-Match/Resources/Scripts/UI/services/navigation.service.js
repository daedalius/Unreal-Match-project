(function () {
    angular.module('UnrealMatch')
        .factory('navigation', NavigationFactory);

    NavigationFactory.$inject = ['$http', '$cookies', '$location'];

    function NavigationFactory($http, $cookies, $location) {

        return {
            toStart: function () {
                $location.path("/start");
            },
            isStart: function () {
                console.log($location.path());
                return ($location.path() == "/start")
            }

        }
    }
})();