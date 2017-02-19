const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');

const port = 8080;

module.exports = merge(webpackCommon, {
    entry: {
        main: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${port}`,
            'webpack/hot/only-dev-server',
            './src/index.jsx'
        ],
        vendor: './src/vendor.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            DEV: true
        }),
    ],

    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        port,
        hot: true,
        stats: 'minimal'
    }
});
