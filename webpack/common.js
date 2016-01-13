var path = require('path');
var appPath = path.join(__dirname, '../app');
var dist = path.join(__dirname, '../dist');
var clientOutputPath = path.join(__dirname, '../dist');
var publicPath = '/static/';

module.exports = {
    appPath: appPath,
    dist: dist,
    clientOutputPath: clientOutputPath,
    publicPath: publicPath,

    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loaders: ['babel?presets[]=es2015&presets[]=react'],
        include: appPath,
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(eot|svg|ttf|woff(2))?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.jpg$/, loader: 'file-loader' },
    ]
}
