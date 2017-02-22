const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./webpack-common.config');

module.exports = webpackMerge(webpackCommon, {

    entry: {
        main: [
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
                    }
                },
                exclude: /node_modules/,
            },
        ]
    },

    stats: {
        chunks: true,
        modules: false
    },

    plugins: [
        new webpack.DefinePlugin({
            DEV: false,
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
    ],

});
