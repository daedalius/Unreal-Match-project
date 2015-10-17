(function () {
    angular.module("UnrealMatch")
        .controller('GameController', GameController);

    GameController.$inject = ['$scope'];

    function GameController($scope) {
        activate();

        function activate() {
            UnrealMatch.UI.BackgroundTranslations.destroy();
            Namespace("UnrealMatch.UI").MenuSounds.calmTheme();
        }
    }
})();