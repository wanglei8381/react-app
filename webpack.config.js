var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/app.js",
    vendor: ['react', 'react-dom']
  },
  output: {
    path: "./dist",
    publicPath: "./dist/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.styl$/, loader: "style!css!stylus"},
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        },
        plugins: ['transform-runtime']
      },
      {test: /\.html$/, loader: "html"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: 'common.js'
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],
  devtool: "source-map"
}