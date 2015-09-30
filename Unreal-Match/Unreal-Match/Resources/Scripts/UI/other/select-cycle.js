Namespace("UnrealMatch.UI").Select = (function () {
    var text;
    // ref to list
    var element;
    // count of elements
    var length;
    return {
        preparePage: preparePage,
        prepareDocument: prepareDocument,
        initialize: initialize,
        destroy: destroy,
        moveUp: moveUp,
        moveDown: moveDown,
        submit: submit,
        select: select
    }

    // add click events for all selects
    function prepareDocument() {
        $(document).on('click', 'input[data-gamepad-navigation-type=select]', function () {
            Namespace("UnrealMatch.UI").Select.initialize(this, true, $(this).data('options').split(','));
        });
    }

    // set default values for each select
    function preparePage() {
        var selects = $('input[data-gamepad-navigation-type=select]');

        $.each(selects, function (index, select) {
            var temp = $(select);
            temp.val(temp.data('options').split(',')[0]);
        });
    }


    // select contructor
    function initialize(textNode, isGamepad, values) {
        text = $(textNode);
        length = values.length;

        this.destroy();

        element = $(document.createElement('div'));
        element.addClass('select');

        var k;
        var that = this;
        for (var i = 0; i < values.length; i++) {
            k = $(document.createElement('div'));
            k.addClass('option');
            k.attr('data-index', i + 1);
            k.attr('data-gamepad-navigation-namespace', 'select');
            k.text(values[i]);
            k.on('click', (function (index) {
                return function () {
                    that.select(this);
                    that.submit();
                    that.destroy();
                }
            })(i))
            element.append(k);
        }

        // wrap in new div
        var wrapper = $(document.createElement('div'));
        wrapper.addClass('select-wrapper')
        wrapper.append(element);

        wrapper.insertAfter(textNode);

        // select first element for gamepad navigation
        if (isGamepad) {
            select(element.children().first('.option'));
        }
    }

    // deselect others, select this
    function select(el) {
        el = $(el)
        el.parent().find('.selected').removeClass('selected');
        el.addClass('selected');
    }

    // select previous option
    function moveDown() {
        var selected = element.find('.selected');
        var index = selected.data('index');

        if (index < length) {
            select($(element).find('[data-index=' + (index + 1) + ']').first());
        }
    }
    // select next option
    function moveUp() {
        var selected = element.find('.selected');
        var index = selected.data('index');

        if (index > 1) {
            select($(element).find('[data-index=' + (index - 1) + ']').first());
        }
    }
    // save selected item and close
    function submit() {
        text.val($(element).find('.selected').text());
    }
    // free resources and destroy select
    function destroy() {
        // remove plugin from DOM
        text.parent().find('.select-wrapper').remove();
    }
})();