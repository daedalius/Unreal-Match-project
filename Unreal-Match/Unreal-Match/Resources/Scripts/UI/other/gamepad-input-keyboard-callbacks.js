// Version for keyboard navigation
Namespace('UnrealMatch.UI').keyboardInputCallbacks = $.extend(true, {}, Namespace('UnrealMatch.Global').emptyInputCallbacks);
(function (keyboardCallbacks) {
    var keyboard = Namespace("UnrealMatch.UI").ScreenKeyboard;

    // overriding buttons to call navigation methods
    var length = keyboardCallbacks.buttons.length;
    for (var i = 0; i < length; i++) {
        switch (keyboardCallbacks.buttons[i].button) {
            case 'A': {
                keyboardCallbacks.buttons[i].pressed = keyboard.press;
                break;
            }
            case 'B': {
                keyboardCallbacks.buttons[i].pressed = Namespace('UnrealMatch.UI').GamepadNavigation.Back;
                break;
            }
            case 'UP': {
                keyboardCallbacks.buttons[i].pressed = keyboard.moveUp;
                break;
            }
            case 'DOWN': {
                keyboardCallbacks.buttons[i].pressed = keyboard.moveDown;
                break;
            }
            case 'LEFT': {
                keyboardCallbacks.buttons[i].pressed = keyboard.moveLeft;
                break;
            }
            case 'RIGHT': {
                keyboardCallbacks.buttons[i].pressed = keyboard.moveRight;
                break;
            }
        }
    }

})(Namespace('UnrealMatch.UI').keyboardInputCallbacks);
