/// <reference path='../../vendors/jquery.d.ts' />

class PreloaderScreen {
    public static Show: Function = function () {
        $('preloader').parent().children().toggleClass('disabled');
    }

    public static Set: Function = function (percent: number) {
        $('preloader').find('.preloader-indicator').css('width', percent + '%')
    }

    public static Hide: Function = function () {
        $('preloader').parent().children().toggleClass('disabled');
    }
}

export = PreloaderScreen