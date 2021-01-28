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
            description: '$r = ($param1.r * $param2.r)/($param1.r + $param2.r)',
            required: ['param1.r', 'param2.r'],
            key: 'r',
            function: function (options) {
                return (options['param1'].r * options['param2'].r) / (options['param1'].r + options['param2'].r);
            }
        },
        2: {
            description: '$i = $param1.i + $param2.i',
            required: ['param1.i', 'param2.i'],
            key: 'i',
            function: function (options) {
                return options.param1.i + options.param2.i;
            }
        },
        3: {
            description: '$u = $param1.u',
            required: ['param1.u'],
            key: 'u',
            function: function (options) {
                return options.param1.u;
            }
        },
        4: {
            description: '$u = $param2.u',
            required: ['param2.u'],
            key: 'u',
            function: function (options) {
                return options.param2.u;
            }
        },


        5: {
            description: '$i = $u / $r',
            required: ['r', 'u'],
            key: 'i',
            function: function (options) {
                return options.u / options.r;
            }
        },
        6: {
            description: '$u = $r * $i',
            required: ['r', 'i'],
            key: 'u',
            function: function (options) {
                return options.r * options.i;
            }
        },
        7: {
            description: '$r = $u / $i',
            required: ['u', 'i'],
            key: 'r',
            function: function (options) {
                return options.u / options.i;
            }
        },
        8: {
            description: '$param1.u = $u',
            required: ['u'],
            key: 'param1.u',
            function: function (options) {
                return options.u;
            }
        },
        9: {
            description: '$param2.u = $u',
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
            description: '$param2.u = $param1.u',
            required: ['param1.u'],
            key: 'param2.u',
            function: function (options) {
                return options.param1.u;
            }
        },
        12: {
            description: '$param1.i = $i - $param2.i',
            required: ['i', 'param2.i'],
            key: 'param1.i',
            function: function (options) {
                return options.i - options.param2.i;
            }
        },
        13: {
            description: '$param2.i = $i - $param1.i',
            required: ['param1.i', 'i'],
            key: 'param2.i',
            function: function (options) {
                return options.i + options.param1.i;
            }
        },
        14: {
            description: '$param1.r = ($param2.r * $r)/($param2.r - $r)',
            required: ['r', 'param2.r'],
            key: 'param1.r',
            function: function (options) {
                return 1 / ((1 / options.r) - (1 / options['param2'].r));
            }
        },
        15: {
            description: '$param2.r = ($param1.r * $r)/($param1.r - $r)',
            required: ['param1.r', 'r'],
            key: 'param2.r',
            function: function (options) {
                return 1 / ((1 / options.r) - (1 / options['param1'].r));
            }
        },

    }
}