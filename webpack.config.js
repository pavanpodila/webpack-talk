const path = require('path');

module.exports = {

    entry: {
        main: './src/index.jsx'
    },

    output: {
        path: __dirname + '/build',
        filename: '[name].[hash].js'
    },

    devServer: {
        stats: 'minimal',
    }
};
