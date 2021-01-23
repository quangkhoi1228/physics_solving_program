var model_dientro = {
    i: null,
    u: null,
    r: null,
    relation: {
        i: {
            required: ['r', 'u'],
            function: function (options) {
                return options.u / options.r;
            }
        },
        u: {
            required: ['r', 'i'],
            function: function (options) {
                return options.r * options.i;
            }
        },
        r: {
            required: ['u', 'i'],
            function: function (options) {
                return options.u / options.i;
            }
        }


    }
}
