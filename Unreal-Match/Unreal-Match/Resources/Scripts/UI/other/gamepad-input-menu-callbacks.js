// Version for menu navigation
Namespace('UnrealMatch.UI').menuInputCallbacks = $.extend(true, {}, Namespace('UnrealMatch.Global').emptyInputCallbacks);
(function (menuCallbacks) {
    var nav = Namespace('UnrealMatch.UI').GamepadNavigation;

    // overriding buttons to call navigation methods
    var length = menuCallbacks.buttons.length;
    for (var i = 0; i < length; i++) {
        switch (menuCallbacks.buttons[i].button) {
            case 'A': {
                menuCallbacks.buttons[i].pressed = nav.Confirm;
                break;
            }
            case 'B': {
                menuCallbacks.buttons[i].pressed = nav.Back;
                break;
            }
            case 'UP': {
                menuCallbacks.buttons[i].pressed = nav.MoveUp;
                break;
            }
            case 'DOWN': {
                menuCallbacks.buttons[i].pressed = nav.MoveDown;
                break;
            }
            case 'LEFT': {
                menuCallbacks.buttons[i].pressed = nav.MoveLeft;
                break;
            }
            case 'RIGHT': {
                menuCallbacks.buttons[i].pressed = nav.MoveRight;
                break;
            }
        }
    }

})(Namespace('UnrealMatch.UI').menuInputCallbacks);
