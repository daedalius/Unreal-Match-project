Namespace("UnrealMatch.UI").MenuSounds = (function ($) {
    Howler.iOSAutoEnable = true;

    var themeHowl = new Howl({
        urls: ['/Resources/Sounds/Menu/menu-theme.ogg', '/Resources/Sounds/Menu/menu-theme.mp3'],
        volume: 0.7,
        loop: true,
        buffer: true
    });

    var backHowl = new Howl({
        urls: ['/Resources/Sounds/Menu/menu-back.ogg', '/Resources/Sounds/Menu/menu-back.mp3']
    });
    var nextHowl = new Howl({
        urls: ['/Resources/Sounds/Menu/menu-next.ogg', '/Resources/Sounds/Menu/menu-next.mp3']
    });
    var hoverHowl = new Howl({
        urls: ['/Resources/Sounds/Menu/menu-hover.ogg', '/Resources/Sounds/Menu/menu-hover.mp3']
    });
    var hoverLightHowl = new Howl({
        urls: ['/Resources/Sounds/Menu/menu-hover-light.ogg', '/Resources/Sounds/Menu/menu-hover-light.mp3']
    });

    return {
        initialize: initialize,
        playHover: playHover,
        playHowerLight: playHowerLight,
        playBack: playBack,
        playNext: playNext,
        playTheme: playTheme,
        calmTheme: calmTheme,
        stopTheme: stopTheme
    }

    function initialize() {
        var that = this;

        $(document.body).on('mouseover', '.howl-hover', function () {
            that.playHover();
        });
        $(document.body).on('mouseover', '.howl-hover-light', function () {
            that.playHowerLight();
        })
        $(document.body).on('click', '.howl-back', function () {
            that.playBack();
        })
        $(document.body).on('click', '.howl-next', function () {
            that.playNext();
        })
    }

    function playHover() {
        hoverHowl.play();
    }

    function playHowerLight() {
        hoverLightHowl.play();
    }

    function playBack() {
        backHowl.play();
    }

    function playNext() {
        nextHowl.play();
    }

    function playTheme() {
        themeHowl.play();
    }

    function calmTheme() {
        themeHowl.volume(themeHowl.volume() / 4);
    }

    function stopTheme() {
        themeHowl.stop()
    }

})(jQuery);