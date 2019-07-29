var path = require('path');
module.exports = {
    entry:  {
        index: './src/index.js',
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    mode: 'development'
}

