var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '../../app'),
    entry: {
        client: [
            'webpack-dev-server/client?http://localhost:5050',
            'webpack/hot/only-dev-server',
            './client.jsx'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: '[name].js',
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                include: path.join(__dirname, '../../app'),
                exclude: /node_modules/,
                loader: 'react-hot!babel?presets[]=es2015&presets[]=react'
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(eot|svg|ttf|woff(2))?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.jpg$/, loader: "file-loader" },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['app','node_modules']
    },
    devServer: {
        contentBase: './dist',
        noInfo: true,
        hot: true,
        inline: true,
        color: true,
        host: 'localhost',
        port: 5050,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
