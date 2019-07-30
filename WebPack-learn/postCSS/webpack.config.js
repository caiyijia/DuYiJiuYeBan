var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
        
    
}