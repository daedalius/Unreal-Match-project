// Version for keyboard navigation
Namespace('UnrealMatch.UI').selectInputCallbacks = $.extend(true, {}, Namespace('UnrealMatch.Global').emptyInputCallbacks);
(function (selectCallbacks) {
    var select = Namespace("UnrealMatch.UI").Select;

    // overriding buttons to call navigation methods
    var length = selectCallbacks.buttons.length;
    for (var i = 0; i < length; i++) {
        switch (selectCallbacks.buttons[i].button) {
            case 'A': {
                selectCallbacks.buttons[i].pressed = select.submit;
                break;
            }
            case 'B': {
                selectCallbacks.buttons[i].pressed = Namespace('UnrealMatch.UI').GamepadNavigation.Back;
                break;
            }
            case 'UP': {
                selectCallbacks.buttons[i].pressed = select.moveUp;
                break;
            }
            case 'DOWN': {
                selectCallbacks.buttons[i].pressed = select.moveDown;
                break;
            }
        }
    }

})(Namespace('UnrealMatch.UI').selectInputCallbacks);
