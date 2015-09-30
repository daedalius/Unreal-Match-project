Namespace('UnrealMatch.UI').GamepadNavigation = (function () {
    var currentNamespace;
    var currentPosition;
    var previousNamespace;
    var previousPosition;

    return {
        initialize: initialize,
        MoveUp: MoveUp,
        MoveDown: MoveDown,
        MoveLeft: MoveLeft,
        MoveRight: MoveRight,
        Confirm: Confirm,
        Back: Back,
    }

    function initialize(namespace, position) {
        $('.navigation-current').removeClass('navigation-current');
        currentNamespace = namespace;
        currentPosition = position;
        var current = $('[data-gamepad-navigation-namespace=' + currentNamespace + '][data-gamepad-navigation-order=' + currentPosition + ']');
        current.addClass('navigation-current');
    }

    function MoveUp() {
        var current = $('[data-gamepad-navigation-namespace=' + currentNamespace + '][data-gamepad-navigation-order=' + currentPosition + ']').first();
        var elementsInNamespace = $('[data-gamepad-navigation-namespace=' + currentNamespace + ']');
        var previousByOrder = elementsInNamespace.filter('[data-gamepad-navigation-order=' + (currentPosition - 1) + ']');

        $.each(previousByOrder, function (index, previous) {
            current.removeClass('navigation-current');
            $(previous).addClass('navigation-current');
            currentPosition -= 1;
        });
    }

    function MoveDown() {
        var current = $('[data-gamepad-navigation-namespace=' + currentNamespace + '][data-gamepad-navigation-order=' + currentPosition + ']').first();
        var elementsInNamespace = $('[data-gamepad-navigation-namespace=' + currentNamespace + ']');
        var nextByOrder = elementsInNamespace.filter('[data-gamepad-navigation-order=' + (currentPosition + 1) + ']');

        $.each(nextByOrder, function (index, next) {
            current.removeClass('navigation-current');
            $(next).addClass('navigation-current');
            currentPosition += 1;
        });
    }

    function MoveLeft() {
        var current = $('[data-gamepad-navigation-namespace=' + currentNamespace + '][data-gamepad-navigation-order=' + currentPosition + ']').first();
        var navType = $(current).data('gamepad-navigation-type');
        //current = $(current);

        if (navType == 'range') {            
            var val = +($(current).val());
            var min = +($(current).attr('min'));
            var step = +($(current).attr('step'));

            if (val > min) {
                current[0].stepDown(step);
            }
        }
    }

    function MoveRight() {
        var current = $('[data-gamepad-navigation-namespace=' + currentNamespace + '][data-gamepad-navigation-order=' + currentPosition + ']').first();
        var navType = $(current).data('gamepad-navigation-type');
        //current = $(current);

        if (navType == 'range') {
            var val = +($(current).val());
            var max = +($(current).attr('max'));
            var step = +($(current).attr('step'));

            if (val < max) {
                current[0].stepUp(step);
            }
        }
    }

    function Confirm() {
        var current = $('[data-gamepad-navigation-namespace=' + currentNamespace + '][data-gamepad-navigation-order=' + currentPosition + ']').first();
        var navType = $(current).data('gamepad-navigation-type');

        switch (navType) {
            case 'button': {
                $(current).trigger('click');
                // restore navigation index
                currentPosition = 1;
                break;
            }
            case 'checkbox': {
                $(current).trigger('click');
                break;
            }
            case 'text': {
                // inject another callbacks to gamepad input
                var keyboardCallbacks = Namespace('UnrealMatch.UI').keyboardInputCallbacks;
                Namespace("UnrealMatch.UI").ScreenKeyboard.initialize($(current), true);
                Namespace('UnrealMatch.Global').GamepadInput.replaceCallbacks(keyboardCallbacks);

                previousNamespace = currentNamespace;
                previousPosition = currentPosition;
                currentNamespace = 'keyboard';
                break;
            }
            case 'select': {
                // inject another callbacks to gamepad input
                var selectCallbacks = Namespace('UnrealMatch.UI').selectInputCallbacks;
                Namespace("UnrealMatch.UI").Select.initialize($(current), true, $(current).data('options').split(','));
                Namespace('UnrealMatch.Global').GamepadInput.replaceCallbacks(selectCallbacks);

                previousNamespace = currentNamespace;
                previousPosition = currentPosition;
                currentNamespace = 'select';
                break;
            }
        }
    }

    function Back() {
        if (currentNamespace == 'keyboard') {
            // hide screen keyboard
            // restore callbacks
            var menuCallbacks = Namespace('UnrealMatch.UI').menuInputCallbacks
            Namespace('UnrealMatch.Global').GamepadInput.replaceCallbacks(menuCallbacks);
            Namespace("UnrealMatch.UI").ScreenKeyboard.destroy();

            // restore navigation
            currentPosition = previousPosition;
            currentNamespace = previousNamespace;

            return;
        }
        if (currentNamespace == 'select') {
            // hide select
            // restore callbacks
            var menuCallbacks = Namespace('UnrealMatch.UI').menuInputCallbacks
            Namespace('UnrealMatch.Global').GamepadInput.replaceCallbacks(menuCallbacks);
            Namespace("UnrealMatch.UI").Select.destroy();

            // restore navigation
            currentPosition = previousPosition;
            currentNamespace = previousNamespace;

            return;
        }


        // navigate back
        var backButton = $('[data-gamepad-navigation-namespace=' + currentNamespace + '][data-gamepad-navigation-back]').first();
        $(backButton).trigger('click');


    }
})();