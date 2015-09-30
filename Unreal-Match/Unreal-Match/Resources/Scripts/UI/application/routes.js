(function () {
    angular.module('UnrealMatch')
        .config(Configure)

    Configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Configure($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/start");

        $stateProvider
            .state('/start', {
                url: "/start",
                templateUrl: "/Resources/Scripts/UI/views/start.view.html",
                controller: 'StartGameController'
            })
            .state('/new', {
                url: "/new",
                templateUrl: "/Resources/Scripts/UI/views/new.view.html",
                controller: 'NewGameController'
            })
            .state('/join', {
                url: "/join",
                templateUrl: "/Resources/Scripts/UI/views/join.view.html",
                controller: 'JoinGameController'
            })
            .state('/input', {
                url: "/input",
                templateUrl: "/Resources/Scripts/UI/views/input.view.html",
                controller: 'GamepadInfoController'
            })
            .state('/settings', {
                url: "/settings",
                templateUrl: "/Resources/Scripts/UI/views/settings.view.html",
                controller: 'GameSettingsController'
            })
    }
})();