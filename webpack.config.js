const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        main: './src/main.jsx',
        vendor: './src/vendor.js'
    },

    output: {
        path: __dirname + '/build',
        filename: '[name].[chunkhash].js'
    },


    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },

            {
                test: /\.css?/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Talk',
            template: 'src/index.html'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            Tether: 'tether'
        })
    ],

    devtool: 'inline-source-map'
};
