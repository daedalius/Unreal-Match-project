// initialize function wrapped callbacks and refresh cycle assignement
// useOwnCycle (boolean) flag to preventing use user cycles within game phase
Namespace('UnrealMatch.Global').initializeGamepad = function (gamepad, callbacks, useOwnCycle) {
    var Global = Namespace('UnrealMatch.Global');

    Global.GamepadInput.initialize(gamepad, callbacks, 0.17);

    if (useOwnCycle) {
        var refreshCycle = function () {
            Global.GamepadInput.check();
            window.requestAnimationFrame(refreshCycle);
        };
        window.requestAnimationFrame(function () {
            refreshCycle();
        })
    }
}