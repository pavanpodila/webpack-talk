const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');

const port = 8080;

module.exports = merge(webpackCommon, {
    entry: {
        main: [
            './src/index.jsx'
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            DEV: false,
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new webpack.optimize.UglifyJsPlugin()
    ],

    devtool: 'sourcemap'
});
