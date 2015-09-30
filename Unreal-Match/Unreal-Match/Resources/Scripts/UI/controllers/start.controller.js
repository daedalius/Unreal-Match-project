(function () {
    angular.module("UnrealMatch")
        .controller('StartGameController', StartGameController);

    StartGameController.$inject = ['$scope', '$rootScope', 'navigation'];

    function StartGameController($scope, $rootScope, navigation) {
        activate();

        $scope.click = function () {
            Namespace("UnrealMatch.UI").BackgroundTranslations.directionRightToLeft();
        };

        function activate() {
            if ($scope.gamepadConnected) {
                Namespace('UnrealMatch.UI').GamepadNavigation.initialize('menu', 1);
            }
        }
    }
})();