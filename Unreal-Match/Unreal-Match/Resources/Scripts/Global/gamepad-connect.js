Namespace('UnrealMatch.Global').connectGamepad = function (callback) {
    // check if there is connected gamepads
    if (navigator.getGamepads().length) {
        var gamepads = navigator.getGamepads();
        for (var i = 0; i < gamepads.length; i++) {
            if (gamepads[i] !== undefined) {
                callback(gamepads[i]);
                return;
            }
        }
    }

    // subscribe for gamepad connection
    window.addEventListener("gamepadconnected", function (e) {
        callback(e.gamepad);
    });
};