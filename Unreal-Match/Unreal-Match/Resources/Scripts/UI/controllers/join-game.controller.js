(function () {
    angular.module("UnrealMatch")
        .controller('JoinGameController', JoinGameController);

    JoinGameController.$inject = ['$scope', '$rootScope', 'navigation'];

    function JoinGameController($scope, $rootScope, navigation) {
        activate();

        function activate() {
            Namespace('UnrealMatch.UI').Select.preparePage();

            if ($scope.gamepadConnected) {
                Namespace('UnrealMatch.UI').GamepadNavigation.initialize('menu', 1);
            }
        }
    }
})();