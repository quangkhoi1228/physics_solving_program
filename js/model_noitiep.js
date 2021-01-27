var model_noitiep = {
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
                return options.param1.r + options.param2.r;
            }
        },
        2: {
            required: ['param1.i'],
            key: 'i',
            function: function (options) {
                return options.param1.i;
            }
        },
        3: {
            required: ['param2.i'],
            key: 'i',
            function: function (options) {
                return options.param2.i;
            }
        },
        4: {
            description: '$u = $param1.u + $param2.u',
            required: ['param1.u', 'param2.u'],
            key: 'u',
            function: function (options) {
                return options.param1.u + options.param2.u;
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
            required: ['i'],
            key: 'param1.i',
            function: function (options) {
                return options.i;
            }
        },
        9: {
            required: ['i'],
            key: 'param2.i',
            function: function (options) {
                return options.i;
            }
        },

        10: {
            required: ['param2.i'],
            key: 'param1.i',
            function: function (options) {
                return options.param2.i;
            }
        },
        11: {
            required: ['param1.i'],
            key: 'param2.i',
            function: function (options) {
                return options.param1.i;
            }
        },
        12: {
            required: ['r', 'param2.r'],
            key: 'param1.r',
            function: function (options) {
                return options.r - options.param2.r;
            }
        },
        13: {
            required: ['param1.r', 'r'],
            key: 'param2.r',
            function: function (options) {
                return options.r + options.param1.r;
            }
        },
        14: {
            required: ['u', 'param2.u'],
            key: 'param1.u',
            function: function (options) {
                return options.u - options.param2.u;
            }
        },
        15: {
            required: ['param1.u', 'u'],
            key: 'param2.u',
            function: function (options) {
                return options.u + options.param1.u;
            }
        },

    }
}