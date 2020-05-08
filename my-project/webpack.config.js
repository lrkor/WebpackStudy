'use strict'

const path = require('path');
const webpack = require('webpack');

module.exports = {
    // entry: './src/index.js',  //单文件入口
    entry: {                      //多文件入口
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        // filename: "bundle.js"    //单文件入口
        filename: "[name].js"    //多文件入口
    },
    mode: 'development',
    // mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,   //解析es6 react 语法
                use: 'babel-loader'
            },
            {
                test: /.css$/,   //解析css
                use: [           //从右到走执行
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /.less$/,   //解析less
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /.(png|jpg|gif|jpen)$/,   //解析图片
                // use: 'file-loader'
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10240
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,   //解析字体
                use: 'file-loader'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}