'use strict'

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  //css 独立出来
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/index.js',  //单文件入口
    entry: {                      //多文件入口
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        // filename: "bundle.js"    //单文件入口
        filename: "[name]_[chunkhash:8].js"    //多文件入口
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,   //解析es6 react 语法
                use: 'babel-loader'
            },
            {
                test: /.css$/,   //解析css
                use: [           //从右到走执行
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /.less$/,   //解析less
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /.(png|jpg|gif|jpen)$/,   //解析图片
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,   //解析字体
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name]_[hash:8][ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetsNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: "index.html",
            chunks: ['index'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false,
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/search.html'),
            filename: "search.html",
            chunks: ['search'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false,
            }
        }),
    ]
};