var model_dientro = {
    name: 'dientro',
    i: null,
    u: null,
    r: null,
    relation: {
        1: {
            description : '$i = $u/$r',
            required: ['r', 'u'],            
            key: 'i',
            function: function (options) {
                return options.u / options.r;
            }
        },
        2: {
            description : '$u = $i * $r',
            required: ['r', 'i'],
            key: 'u',
            function: function (options) {
                return options.r * options.i;
            }
        },
        3: {
            description : '$r = $u/$i',
            required: ['u', 'i'],
            key: 'r',
            function: function (options) {
                return options.u / options.i;
            }
        },

    }
}
