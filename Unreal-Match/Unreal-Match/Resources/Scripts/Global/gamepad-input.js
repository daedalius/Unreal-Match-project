Namespace('UnrealMatch.Global').GamepadInput = (function () {
    // current gamepad
    var gamepad;
    // gamepad index in navigator.getGamepads array
    var index;
    // gamepads axes noise zone
    var axesDeadzone;
    // state of gamepads buttons and axes to compare with next one
    // also contain the time of element press to compare with next realize time
    var previousState = {
        buttons: {},
        axes: {}
    };
    // callbacks according to 'pressed'/'realized'/'origin' events
    var callbacks = {};

    // temp variable for easy GC
    var _tempDate;

    // module interface
    return {
        initialize: initialize,
        check: check,
        replaceCallbacks: replaceCallbacks
    };

    // realized callback signature: function(ms) where ms is a milliseconds latency 
    // beetween 'press' and 'realize' events
    function initialize(gmpd, cllbcks, axsDdzn) {
        index = gmpd.index;
        callbacks = cllbcks;
        axesDeadzone = axsDdzn;

        _tempDate = new Date();

        // buttons initialize
        var i;
        var length = gmpd.buttons.length;
        for (i = 0; i < length; i++) {
            previousState.buttons[i] = {
                value: 0,
                time: _tempDate
            };
        }

        // axis initialize
        var i;
        var length = gmpd.axes.length;
        for (i = 0; i < length; i++) {
            previousState.axes[i] = {
                value: 0,
                time: _tempDate
            };
        }

        // plugin may be initialized by button/axes press
        // need to figure it up
        check();
    }

    // Inject another callbacks
    function replaceCallbacks(cllbcks) {
        callbacks = cllbcks;
    }

    // check buttons/axes changes
    function check() {
        gamepad = navigator.getGamepads()[index || 0];
        _tempDate = new Date();

        checkButtons(_tempDate);
        checkAxes(_tempDate);
    }

    function checkButtons(timeNow) {

        var i;
        var length = gamepad.buttons.length;
        for (i = 0; i < length; i++) {
            // button has changes
            if (gamepad.buttons[i].value != previousState.buttons[i].value) {
                if (gamepad.buttons[i].value > 0) {
                    // tricky save first time for the good of LT and RT analog buttons
                    if (previousState.buttons[i].value == 0) {
                        previousState.buttons[i].time = timeNow;
                    }
                    // fire 'pressed' event with current value
                    callbacks.buttons[i].pressed(gamepad.buttons[i].value);
                }
                else {
                    // fire 'realize' event with computed holding time
                    callbacks.buttons[i].realized(timeNow - previousState.buttons[i].time);
                }
                // save current button state
                previousState.buttons[i].value = gamepad.buttons[i].value;
            }
        }
    }

    function checkAxes(timeNow) {
        var i;
        var length = gamepad.axes.length;

        for (i = 0; i < length; i++) {
            // value not in deadzone 
            if (Math.abs(gamepad.axes[i]) > axesDeadzone) {
                // fire 'changed' if differense between new and old values
                if (gamepad.axes[i] != previousState.axes[i].value) {
                    // save first time for axes
                    if (Math.abs(previousState.axes[i].value) < axesDeadzone) {
                        previousState.axes[i].time = timeNow;
                    }
                    previousState.axes[i].value = gamepad.axes[i];
                    // fire 'pressed' event with current value
                    callbacks.axes[i].changed(gamepad.axes[i]);
                }
            }
            else {
                // fire 'realized' if axes need to realize
                if (previousState.axes[i].value !== 0) {
                    previousState.axes[i].value = 0;
                    // fire 'realize' event with computed holding time
                    callbacks.axes[i].realized(timeNow - previousState.axes[i].time);
                }
                // else ignore deadzone values
            }
        }
    }
})();