(function () {
    angular.module("UnrealMatch")
        .controller('NewGameController', NewGameController);

    NewGameController.$inject = ['$scope', '$rootScope', 'navigation'];

    function NewGameController($scope, $rootScope, navigation) {
        activate();

        function activate() {
            Namespace('UnrealMatch.UI').Select.preparePage();

            if ($scope.gamepadConnected) {
                Namespace('UnrealMatch.UI').GamepadNavigation.initialize('menu', 1);
            }
        }
    }
})();