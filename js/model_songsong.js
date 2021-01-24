var model_songsong = {
    name: 'doanmach',
    i: null,
    u: null,
    r: null,
    param1: null,
    param2: null,
    operator: null,
    relation: {
        1: {
            required: ['param1.r', 'param2.r'],
            key: 'r',
            function: function (options) {
                return 1 / ((1 / options['param1'].r) + (1 / options['param2'].r));
            }
        },
        2: {
            required: ['param1.i', 'param2.i'],
            key: 'i',
            function: function (options) {
                return options.param1.i + options.param2.i;
            }
        },
        3: {
            required: ['param1.u'],
            key: 'u',
            function: function (options) {
                return options.param1.u;
            }
        },
        4: {
            required: ['param2.u'],
            key: 'u',
            function: function (options) {
                return options.param2.u;
            }
        },


        5: {
            required: ['r', 'u'],
            key: 'i',
            function: function (options) {
                return options.u / options.r;
            }
        },
        6: {
            required: ['r', 'i'],
            key: 'u',
            function: function (options) {
                return options.r * options.i;
            }
        },
        7: {
            required: ['u', 'i'],
            key: 'r',
            function: function (options) {
                return options.u / options.i;
            }
        },
        8: {
            required: ['u'],
            key: 'param1.u',
            function: function (options) {
                return options.u;
            }
        },
        9: {
            required: ['u'],
            key: 'param2.u',
            function: function (options) {
                return options.u;
            }
        },

    }
}