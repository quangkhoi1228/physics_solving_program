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
            description: '$param1.u = $u',
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
        10: {
            description: '$param1.u = $param2.u',
            required: ['param2.u'],
            key: 'param1.u',
            function: function (options) {
                return options.param2.u;
            }
        },
        11: {
            required: ['param1.u'],
            key: 'param2.u',
            function: function (options) {
                return options.param1.u;
            }
        },
        12: {
            required: ['i', 'param2.i'],
            key: 'param1.i',
            function: function (options) {
                return options.i - options.param2.i;
            }
        },
        13: {
            required: ['param1.i', 'i'],
            key: 'param2.i',
            function: function (options) {
                return options.i + options.param1.i;
            }
        },
        14: {
            required: ['r', 'param2.r'],
            key: 'param1.r',
            function: function (options) {
                return 1 / ((1 / options.r) - (1 / options['param2'].r));
            }
        },
        15: {
            required: ['param1.r', 'r'],
            key: 'param2.r',
            function: function (options) {
                return 1 / ((1 / options.r) - (1 / options['param1'].r));
            }
        },

    }
}