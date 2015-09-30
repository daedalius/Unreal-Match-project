(function () {
    angular.module("UnrealMatch")
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$rootScope', 'navigation'];

    function MainController($scope, $rootScope, navigation) {
        $scope.gamepadConnected = false;

        activate();

        $scope.toPreviousScreen = function () {
            if (!navigation.isStart()) {
                Namespace("UnrealMatch.UI").BackgroundTranslations.directionLeftToRight();
                navigation.toStart();
            }
        };

        function activate() {
            var Global = Namespace('UnrealMatch.Global');
            var UI = Namespace('UnrealMatch.UI');

            UI.Select.prepareDocument();

            UI.BackgroundTranslations.initialize('body', {
                x: 2372 * 2,
                y: 1312 * 2
            });

            var gamepadConnectedCallback = function (gamepad) {
                var Global = Namespace('UnrealMatch.Global');
                var UI = Namespace('UnrealMatch.UI');
                // initialize gamepad with menu callbacks
                Global.initializeGamepad(gamepad, UI.menuInputCallbacks, true);
                Namespace('UnrealMatch.UI').GamepadNavigation.initialize('menu', 1);
                $scope.gamepadConnected = true;
            }

            Global.connectGamepad(gamepadConnectedCallback);
        }
    }
})();