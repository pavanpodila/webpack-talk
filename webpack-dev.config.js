const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');

const port = 8080;

module.exports = webpackMerge(webpackCommon, {

    entry: {
        main: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${port}`,
            'webpack/hot/only-dev-server',
            './src/index.jsx'
        ],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['latest', 'stage-1', 'react'],
                        plugins: ['react-hot-loader/babel']
                    }
                },
                exclude: /node_modules/,
            },
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            DEV: true,
        }),
    ],

    devtool: 'inline-source-map',
    devServer: {
        port,
        stats: 'minimal',
        hot: true,
        historyApiFallback: true,
        publicPath: '/'
    }
});
