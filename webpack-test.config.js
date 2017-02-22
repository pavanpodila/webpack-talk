const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');

module.exports = webpackMerge(webpackCommon, {

    entry: {},

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['latest', 'stage-1', 'react'],
                        plugins: [
                            [
                                "__coverage__",
                                {
                                    "ignore": "*.test.*"
                                }
                            ]
                        ]
                    }
                },
                exclude: /node_modules/,
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            DEV: true,
        }),
    ],

    devtool: 'inline-source-map',
});
