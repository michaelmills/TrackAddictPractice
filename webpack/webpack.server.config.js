var webpack = require('webpack');
var config = require('./common.js');
var path = require('path');

module.exports = {
    // The configuration for the server-side rendering
    name: 'server-side rendering',
    context: config.appPath,
    devtool: 'source-map',
    entry: {
      server: './server.js'
    },
    target: 'node',
    output: {
      path: config.dist,
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: config.loaders
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.node', '.css'],
      modulesDirectories: ['app', 'node_modules']
    },
    plugins: [
        // Order the modules and chunks by occurrence.
        // This saves space, because often referenced modules
        // and chunks get smaller ids.
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false
          }
        }),
    ]
};
