var model_noitiep = {
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
                console.log(options);
                return options.param1['r'] + options.param2['r'];
            }
        },
        i: {
            required: ['param1.i'],
            key: 'i',
            function: function (options) {
                return options.param1.i;
            }
        },
        i1: {
            required: ['param2.i'],
            key: 'i',
            function: function (options) {
                return options.param2.i;
            }
        },
        u: {
            required: ['param1.u', 'param2.u'],
            key: 'u',
            function: function (options) {
                return options.param1.i + options.param2.i;
            }
        },


    }
}