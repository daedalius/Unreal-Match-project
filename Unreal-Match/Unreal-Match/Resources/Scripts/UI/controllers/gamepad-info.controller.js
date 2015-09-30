(function () {
    angular.module("UnrealMatch")
        .controller('GamepadInfoController', GamepadInfoController);

    GamepadInfoController.$inject = ['$scope', 'navigation'];

    function GamepadInfoController($scope, navigation) {
        activate();

        function activate() {
            if ($scope.gamepadConnected) {
                Namespace('UnrealMatch.UI').GamepadNavigation.initialize('menu', 1);
            }
        }
    }
})();