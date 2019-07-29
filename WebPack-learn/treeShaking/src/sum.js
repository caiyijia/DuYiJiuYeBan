import lodash from 'lodash-es';

var web = function () {
    return 'Webpack';
}

var isArray = function(arg) {
    console.log(lodash.isArray(arg));
}

export {
    web,
    isArray
}