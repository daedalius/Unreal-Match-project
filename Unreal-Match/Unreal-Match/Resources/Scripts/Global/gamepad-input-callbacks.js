// Callbacks for realized layer of GamepadAPI without action to override/extend
Namespace('UnrealMatch.Global').emptyInputCallbacks = {
    buttons: [
        {
            'button': 'A',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'B',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'X',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'Y',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'LB',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'RB',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'LT',
            'pressed': function (value) {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'RT',
            'pressed': function (value) {
            },
            'realized': function (ms) {
            },
        },

        {
            'button': 'BACK',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'START',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'LA',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'RA',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'UP',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'DOWN',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'LEFT',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        },
        {
            'button': 'RIGHT',
            'pressed': function () {
            },
            'realized': function (ms) {
            },
        }
    ],
    axes: [
    {
        'axe': 'LAX',
        'changed': function (value) {
        },
        'realized': function (ms) {
        },
    },
     {
         'axe': 'LAY',
         'changed': function (value) {
         },
         'realized': function (ms) {
         },
     },
     {
         'axe': 'RAX',
         'changed': function (value) {
         },
         'realized': function (ms) {
         },
     },
     {
         'axe': 'RAY',
         'changed': function (value) {
         },
         'realized': function (ms) {
         },
     }
    ]
};

// Version for callbacks test
Namespace('UnrealMatch.Global').testInputCallbacks = {
    buttons: [
        {
            'button': 'A',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'B',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'X',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'Y',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'LB',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'RB',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'LT',
            'pressed': function (value) {
                console.log(this.button + '_pressed');
                console.log(value);
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'RT',
            'pressed': function (value) {
                console.log(this.button + '_pressed');
                console.log(value);
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },

        {
            'button': 'BACK',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'START',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'LA',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'RA',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'UP',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'DOWN',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'LEFT',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        },
        {
            'button': 'RIGHT',
            'pressed': function () {
                console.log(this.button + '_pressed');
            },
            'realized': function (ms) {
                console.log(this.button + '_realized ' + ms);
            },
        }
    ],
    axes: [
    {
        'axe': 'LAX',
        'changed': function (value) {
            console.log(this.axe + '_changed' + value);
        },
        'realized': function (ms) {
            console.log(this.axe + '_realized ' + ms);
        },
    },
     {
         'axe': 'LAY',
         'changed': function (value) {
             console.log(this.axe + '_changed' + value);
         },
         'realized': function (ms) {
             console.log(this.axe + '_realized ' + ms);
         },
     },
     {
         'axe': 'RAX',
         'changed': function (value) {
             console.log(this.axe + '_changed' + value);
         },
         'realized': function (ms) {
             console.log(this.axe + '_realized ' + ms);
         },
     },
     {
         'axe': 'RAY',
         'changed': function (value) {
             console.log(this.axe + '_changed' + value);
         },
         'realized': function (ms) {
             console.log(this.axe + '_realized ' + ms);
         },
     }
    ]
};
