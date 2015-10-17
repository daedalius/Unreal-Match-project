Namespace("UnrealMatch.UI").BackgroundTranslations = (function () {$(document.body)
    var animationIntervalId;

    // current background size
    var contentSize;
    // initial background size
    var backgroundSize;
    // current background offset by two axis
    var currentOffset = {
        x: 0,
        y: 0
    }

    var offsetX = -1;
    var offsetY = -1;

    var fromRightBottom = false;
    var fromLeftBottom = true;

    function validateVector() {
        if (Math.abs(currentOffset.x) >= (backgroundSize.x - contentSize.x)) {
            offsetX = -offsetX;
        }
        if (currentOffset.x > 0) {
            offsetX = -offsetX;
        };


        if ((Math.abs(currentOffset.y)) >= (backgroundSize.y - contentSize.y)) {
            offsetY = -offsetY;
        }
        if (currentOffset.y > 0) {
            offsetY = -offsetY;
        };
    }

    function takeScreenSize() {
        return {
            x: $(document.body).innerWidth(),
            y: $(document.body).innerHeight()
        }
    }

    // change background movement direction from left side of screen to right side (>>>>>)
    function directionLeftToRight() {
        currentOffset.x = -50;
        offsetX = -1;

        if (fromLeftBottom) {
            currentOffset.y = -(backgroundSize.y - contentSize.y) + 60;
            offsetY = 1;
            fromLeftBottom = false;
        }
        else {
            currentOffset.y = -60;
            offsetY = -1;
            fromLeftBottom = true;
        }
    }

    // change background movement direction from right side of screen to left side (<<<<<)
    function directionRightToLeft() {
        var returnFunction = new function () {
            currentOffset.x = -(backgroundSize.x - contentSize.x) + 20;
            offsetX = 1;

            if (fromRightBottom) {
                currentOffset.y = -(backgroundSize.y - contentSize.y) + 60;
                offsetY = 1;
                fromRightBottom = false;
            }
            else {
                currentOffset.y = -60;
                offsetY = -1;
                fromRightBottom = true;
            }
        }
    }

    // set background offset
    function updateBackgroundOffset() {
        currentOffset.x = currentOffset.x + offsetX;
        currentOffset.y = currentOffset.y + offsetY;

        $(document.body).css({ 'background-position': currentOffset.x + 'px ' + currentOffset.y + 'px' });
        validateVector();
    }

    // constructor
    function initialize(selector, b) {
        backgroundSize = b
        // take new screen size on resize
        $(window).on('resize', function () {
            contentSize = takeScreenSize();
        });
        contentSize = takeScreenSize();

        // move background
        updateBackgroundOffset();
        animationIntervalId = window.setInterval(updateBackgroundOffset, 66);

    }

    // destructor
    function destroy() {
        window.clearInterval(animationIntervalId);
        $(document.body).removeAttr('style');
    }

    return {
        initialize: initialize,
        directionLeftToRight: directionLeftToRight,
        directionRightToLeft: directionRightToLeft,
        destroy: destroy
    };
})();

