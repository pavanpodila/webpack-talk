const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {

    entry: {
        vendor: './src/vendor.js'
    },

    output: {
        path: __dirname + '/build',
        filename: '[name].[hash].js'
    },


    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'components': path.resolve(__dirname, 'src/components'),
        }
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['latest', 'stage-1', 'react'],
                            plugins: ['react-hot-loader/babel']
                        }
                    }
                ],
                exclude: /node_modules/
            },

            {
                test: /\.css?/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1}
                    },
                    'postcss-loader',
                ]
            },

            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    'file-loader?name=[name].[ext]'
                ]
            }
        ]
    },

    externals: [
        // 'react', 'react-dom'
    ],

    plugins: [
        new webpack.NamedModulesPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        new HtmlWebpackPlugin({
            title: 'Webpack Talk',
            template: 'src/index.html'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            Tether: 'tether'
        }),

        new ExtractTextPlugin('main.css')
    ],
};
