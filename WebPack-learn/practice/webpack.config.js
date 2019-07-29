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
    module: {
        rules: [
            {test: /\.less$/, use: ['style-loader','css-loader','less-loader']}
        ]
    },
    mode: 'development'
}

