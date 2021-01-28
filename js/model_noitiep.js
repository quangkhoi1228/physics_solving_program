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
            description: '$r = $param1.r + $param2.r',
            required: ['param1.r', 'param2.r'],
            key: 'r',
            function: function (options) {
                return options.param1.r + options.param2.r;
            }
        },
        2: {
            description: '$i = $param1.i',
            required: ['param1.i'],
            key: 'i',
            function: function (options) {
                return options.param1.i;
            }
        },
        3: {
            description: '$i = $param2.i',
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
            description: '$param1.i = $i',
            required: ['i'],
            key: 'param1.i',
            function: function (options) {
                return options.i;
            }
        },
        9: {
            description: '$param2.i = $i',
            required: ['i'],
            key: 'param2.i',
            function: function (options) {
                return options.i;
            }
        },

        10: {
            description: '$param1.i = $param2.i',
            required: ['param2.i'],
            key: 'param1.i',
            function: function (options) {
                return options.param2.i;
            }
        },
        11: {
            description: '$param2.i = $param1.i',
            required: ['param1.i'],
            key: 'param2.i',
            function: function (options) {
                return options.param1.i;
            }
        },
        12: {
            description: '$param1.r = $r - param2.r',
            required: ['r', 'param2.r'],
            key: 'param1.r',
            function: function (options) {
                return options.r - options.param2.r;
            }
        },
        13: {
            description: '$param2.r = $r - $param1.r',
            required: ['param1.r', 'r'],
            key: 'param2.r',
            function: function (options) {
                return options.r - options.param1.r;
            }
        },
        14: {
            description: '$param1.u = $u - $param2.u',
            required: ['u', 'param2.u'],
            key: 'param1.u',
            function: function (options) {
                return options.u - options.param2.u;
            }
        },
        15: {
            description: '$param2.u = $u - $param1.u',
            required: ['param1.u', 'u'],
            key: 'param2.u',
            function: function (options) {
                return options.u - options.param1.u;
            }
        },

    }
}