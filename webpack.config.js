const webpack = require('webpack');

module.exports = {
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    publicPath: '/'
  },

  debug: true,
  devtool: 'cheap-source-map',

  // add this handful of plugins that optimize the build
  // when we're in production
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react', 'flow'],
          plugins: ['transform-runtime', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.scss/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ],
  }
}
