var webpack = require('webpack');
var config = require('./common.js');

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
      // The output directory as absolute path
      path: config.dist,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: '[name].js',
      // The output path from the view of the Javascript
      publicPath: config.publicPath,
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
