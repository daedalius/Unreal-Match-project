(function () {
    angular.module("UnrealMatch")
        .controller('GameSettingsController', GameSettingsController);

    GameSettingsController.$inject = ['$scope', 'navigation'];

    function GameSettingsController($scope, navigation) {
        $scope.lowQualityVideoMode = false;

        activate();

        function activate() {
            Namespace('UnrealMatch.UI').Select.preparePage();

            if ($scope.gamepadConnected) {
                Namespace('UnrealMatch.UI').GamepadNavigation.initialize('menu', 1);
            }

            $scope.$watch('lowQualityVideoMode', function (value) {
                jQuery('.low-video-label').text(($scope.lowQualityVideoMode) ? "enabled" : "disabled")
            });
        }
    }
})();