(function () {
    angular.module("UnrealMatch")
        .controller('NewGameController', NewGameController);

    NewGameController.$inject = ['$scope', '$rootScope', 'navigation'];

    function NewGameController($scope, $rootScope, navigation) {
        activate();

        $scope.NewGame = function () {
            navigation.toGame();
        };

        function activate() {
            Namespace('UnrealMatch.UI').Select.preparePage();

            if ($scope.gamepadConnected) {
                Namespace('UnrealMatch.UI').GamepadNavigation.initialize('menu', 1);
            }
        }
    }
})();