let path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname +  "/scripts",
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets:['es2015', 'stage-3']
                }
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js']
    }
};