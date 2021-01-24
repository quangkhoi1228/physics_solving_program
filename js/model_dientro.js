var model_dientro = {
    name: 'dientro',
    i: null,
    u: null,
    r: null,
    relation: {
        i: {
            required: ['r', 'u'],
            key: 'i',
            function: function (options) {
                return options.u / options.r;
            }
        },
        u: {
            required: ['r', 'i'],
            key: 'u',
            function: function (options) {
                return options.r * options.i;
            }
        },
        r: {
            required: ['u', 'i'],
            key: 'r',
            function: function (options) {
                return options.u / options.i;
            }
        }
    }
}
