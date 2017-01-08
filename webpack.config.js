const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        main: __dirname + '/src/main.jsx'
    },

    output: {
        path: __dirname + '/build',
        filename: '[name].bundle.js'
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
        })
    ]
};
