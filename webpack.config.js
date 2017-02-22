const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        main: './src/index.jsx'
    },

    output: {
        path: __dirname + '/build',
        filename: '[name].[hash].js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['latest', 'stage-1', 'react']
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
        new HtmlWebpackPlugin({
            title: 'Hello Webpack',
            template: './src/index.html'
        })
    ],

    devtool: 'inline-source-map',
    devServer: {
        stats: 'minimal',
    }
};
