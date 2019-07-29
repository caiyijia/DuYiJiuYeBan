var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}

