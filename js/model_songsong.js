var model_songsong = {
    name: 'doanmach',
    i: null,
    u: null,
    r: null,
    param1: null,
    param2: null,
    operator: null,
    relation: {
        r: {
            required: ['param1.r', 'param2.r'],
            key: 'r',
            function: function (options) {
                console.log('a');
                console.log(options['param1'].r, options['param2'].r);
                return 1 / ((1 / options['param1'].r) + (1 / options['param2'].r));
            }
        },
        i: {
            required: ['param1.i', 'param2.i'],
            key: 'i',
            function: function (options) {
                return options.param1.i + options.param2.i;
            }
        },
        u: {
            required: ['param1.u'],
            key: 'u',
            function: function (options) {
                return options.param1.u;
            }
        },
        u1: {
            required: ['param2.u'],
            key: 'u',
            function: function (options) {
                return options.param2.u;
            }
        },

    }
}