var webpack = require('webpack');
var rerere;
module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                },
            },
            {
                test: /\.jsx$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                },
                progress: true
            },
            {
                test: /\.json$/,
                loader: "json-loader",
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: /node_modules/
            },
            {test: /\.gif$/, loader: "url-loader?limit=1000&mimetype=image/gif"},
            {test: /\.jpg$/, loader: "url-loader?limit=1000&mimetype=image/jpg"},
            {test: /\.png$/, loader: "url-loader?limit=1000&mimetype=image/png"},
            {test: /\.svg$/, loader: "url-loader?limit=2600&mimetype=image/svg+xml"},


        ]
    }
};