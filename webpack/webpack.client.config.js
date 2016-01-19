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
        path: config.staticPath,
        filename: '[name].js',
        publicPath: config.publicPath
    },

    module: { loaders: config.loaders },
    resolve: {
        root: path.resolve(__dirname, '../app'),
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
