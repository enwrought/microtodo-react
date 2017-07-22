const webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = [
  {
    entry: './index.js',

    output: {
      path: 'client/dist',
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
  },
  {
    // babel-polyfill for async/await functionality
    entry: {
      createUser: ['babel-polyfill', './server/routes/createUser.js'],
      loadTasks: ['babel-polyfill', './server/routes/loadTasks.js'],
      saveTasks: ['babel-polyfill', './server/routes/saveTasks.js']
    },
    output: { 
      path: './server/dist/',
      library: '[name]',
      libraryTarget: 'commonjs2',
      filename: '[name].js'
    },
    target: 'node',
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
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'stage-0', 'flow'],
            plugins: ['syntax-flow', 'transform-flow-strip-types']
          }
        },
        {
          test: /\.json$/,
          loader: 'json'
        }
      ]
    }
  }
];
