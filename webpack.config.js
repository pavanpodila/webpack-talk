const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const port = 8080;

module.exports = {

    entry: {
        main: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${port}`,
            'webpack/hot/only-dev-server',
            './src/index.jsx'
        ]
    },

    output: {
        path: __dirname + '/build',
        filename: '[name].[hash].js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        enforceExtension: false
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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello Webpack',
            template: './src/index.html',
            inject: true
        })
    ],

    devtool: 'inline-source-map',
    devServer: {
        port,
        stats: 'minimal',
        hot: true,
        historyApiFallback: true
    }
};
