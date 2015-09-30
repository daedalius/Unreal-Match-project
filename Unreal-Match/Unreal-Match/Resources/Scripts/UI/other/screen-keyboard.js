Namespace("UnrealMatch.UI").ScreenKeyboard = (function () {
    // all necessary keyboard elements
    var elements = {};
    var abc = 'abcdefghijklmnopqrstuvwxyz.@';
    var isUpper = false;
    var simbols = [];
    return {
        initialize: initialize,
        toogleUppercase: toogleUppercase,
        destroy: destroy,
        moveUp: moveUp,
        moveDown: moveDown,
        moveRight: moveRight,
        moveLeft: moveLeft,
        press: press
    }

    // keyboard contructor
    function initialize(element, isGamepad) {
        elements.textElement = $(element);
        elements.parent = $(element).parent();

        var kbrd = $(document.createElement('div'));
        kbrd.addClass('keyboard');
        var k;

        // digits
        for (var i = 0; i < 10; i++) {
            k = $(document.createElement('div'));
            k.addClass('key');
            k.attr('data-digit', i);
            k.attr('data-index', i + 1);
            k.text(i);
            kbrd.append(k);
            k.on('click', pressDigit);
        }

        // simbols
        for (var i = 0; i < 28; i++) {
            k = $(document.createElement('div'));
            k.addClass('key');
            k.attr('data-simbol', abc[i]);
            k.attr('data-index', i + 10 + 1);
            k.text(abc[i]);
            kbrd.append(k);
            simbols.push(k);
            k.on('click', pressSimbol);
        }

        // space button
        k = $(document.createElement('div'));
        k.addClass('key');
        k.attr('data-simbol', ' ');
        k.attr('data-index', 39);
        k.text('SPCE');
        kbrd.append(k);
        k.on('click', function () {
            var simbol = $(this).data('simbol');
            elements.textElement.val(elements.textElement.val() + simbol + '');
        });

        // case button
        k = $(document.createElement('div'));
        k.addClass('key handler case');
        k.attr('data-index', 40);
        k.text('UPCS');
        k.on('click', toogleUppercase)
        kbrd.append(k);


        var wrapper = $(document.createElement('div'));
        wrapper.addClass('keyboard-wrapper')
        wrapper.append(kbrd);

        elements.wrapper = $(wrapper);
        elements.keyboard = kbrd;

        elements.wrapper.insertAfter(elements.textElement);

        // select first element for gamepad navigation
        if (isGamepad) {
            select(elements.keyboard.children().first('.key'));
        }
    }
    // select right button or start from line begin
    function moveRight() {
        var selected = elements.keyboard.find('.selected');
        var index = selected.data('index');
        if (index % 10 != 0) {
            select(selected.next());
        }
        else {
            select(elements.keyboard.find('[data-index="' + (index - 9) + '"]'));
        }
    }
    // select left button or start from line end
    function moveLeft() {
        var selected = elements.keyboard.find('.selected');
        var index = selected.data('index');
        if (index % 10 == 1) {
            select(elements.keyboard.find('[data-index="' + (index + 9) + '"]'));
        }
        else {
            select(selected.prev());
        }
    }
    // select bottom button or start from column top
    function moveDown() {
        var selected = elements.keyboard.find('.selected');
        var index = selected.data('index');
        var indexToSearch = (index <= 30) ? index + 10 : index - 30;
        select(elements.keyboard.find('[data-index="' + indexToSearch + '"]'));
    }
    // select upper button or start from column bottom
    function moveUp() {
        var selected = elements.keyboard.find('.selected');
        var index = selected.data('index');
        var indexToSearch = (index <= 10) ? index + 30 : index - 10;
        select(elements.keyboard.find('[data-index="' + indexToSearch + '"]'));
    }
    // generate click event on selected button
    function press() {
        elements.keyboard.find('.selected').click();
    }
    // free resources and destroy keyboard
    function destroy() {
        // clear simbols cache
        simbols = [];

        // off all events
        $(elements.parent).find('.digit').off('click');
        $(elements.parent).find('.simbol').off('click');
        $(elements.parent).find('.handler').off('click');

        // remove plugin from DOM
        $(elements.parent).find('.keyboard-wrapper').remove();
    }

    function toogleUppercase() {
        if (isUpper) {
            // to lower case
            for (var i = 0; i < simbols.length; i++) {
                simbols[i].html(abc[i].toLowerCase());
            }
            $('.case').text('UPCS');
        }
        else {
            // to upper case
            for (var i = 0; i < simbols.length; i++) {
                simbols[i].html(abc[i].toUpperCase());
            }
            $('.case').text('lwcs');
        }
        isUpper = !isUpper;
    }
    function pressDigit() {
        var simbol = $(this).data('digit');
        elements.textElement.val(elements.textElement.val() + simbol + '');
    }
    function pressSimbol() {
        var simbol = $(this).text();
        elements.textElement.val(elements.textElement.val() + simbol + '');
    }
    function select(key) {
        elements.keyboard.find('.selected').removeClass('selected');
        key.addClass('selected');
    }
})();