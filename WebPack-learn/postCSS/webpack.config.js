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
                test:/\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins:[
                                require('postcss-cssnext')(),
                                // require('autoprefixer')(),
                                require('cssnano')()
                            ]
                        }
                    },
                    {
                        loader:'less-loader'
                    }
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
        
    
}