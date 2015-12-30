var webpack = require('webpack');

module.exports = {
  entry: {
    all: './source/javascripts/all.js'
  },

  resolve: {
    root: __dirname + '/source/javascripts'
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js'
  },

  module: {
    loaders: [
      {
        test: /source\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  node: {
    console: true
  }
};
