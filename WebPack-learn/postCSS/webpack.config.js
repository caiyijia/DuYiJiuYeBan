var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        // index: './index.js'
        pageA: './src/pageA.js',
        pageB: './src/pageB.js'
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: '[name][hash:5].bundle.js',
        chunkFilename: '[name][hash:5].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                comman: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 1,
                    minChunks: 2,
                    priority: 1
                },
                vender: {
                    name:'vender',
                    test:/[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'all'
                }
            }
        }
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
            filename: '[name][hash:5].css'
        }),
        new HtmlWebpackPlugin({
            title: 'My Html',
            filename: 'index.html',
            template: './index.html',
            
            minify: {
                // 清理注释
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin()
    ]
        
    
}