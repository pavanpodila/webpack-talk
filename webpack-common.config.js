const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    entry: {
        vendor: './src/vendor.js'
    },

    output: {
        path: __dirname + '/build',
        filename: '[name].[hash].js',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        enforceExtension: false,
        alias: {
            components: path.resolve(__dirname, 'src/components')
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello Webpack',
            template: './src/index.html',
            inject: true
        }),

        new webpack.ProvidePlugin({
            React: 'react'
        })
    ],

    devtool: false,
};
