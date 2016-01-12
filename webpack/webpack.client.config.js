var path = require('path');
var webpack = require('webpack');
var config = require('./common.js');

module.exports = {
    // The configuration for the client
    name: 'client side rendering',

    devtool: 'source-map',
    context: config.appPath,
    target: 'web',
    entry: {
        client: './client.jsx'
    },
    output: {
        // The output directory as absolute path
        path: config.dist,
        // The filename of the entry chunk as relative path inside the output.path directory
        filename: '[name].js',
        // The output path from the view of the Javascript
        publicPath: config.publicPath
    },

    module: { loaders: config.loaders },
    resolve: {
        extensions: ['', '.js', '.jsx', 'css'],
        modulesDirectories: [ 'app', 'node_modules' ]
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
    ]
}
