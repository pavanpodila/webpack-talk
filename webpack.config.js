const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Talk',
            template: 'src/index.html'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        })
    ]
};
