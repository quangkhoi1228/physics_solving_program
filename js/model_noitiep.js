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
            required: ['param1.u', 'param2.u'],
            key: 'u',
            function: function (options) {
                return options.param1.u + options.param2.u;
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


    }
}