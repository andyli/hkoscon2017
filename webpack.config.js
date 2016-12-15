'use strict';

const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

const merge = require('webpack-merge');

const base = {
  plugins: [
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new AggressiveMergingPlugin()
  ],
  externals: {
  },
  entry: {
    app: ['./assets/js/app'],
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/public/js`,
    publicPath: '/2017/js/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: ['node_modules']
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /worker\.js$/, loader: 'worker'}
    ]
  },
  worker: {
    output: {
      filename: 'worker.js',
      chunkFilename: '[id].worker.js'
    }
  }
};

const dev = merge.smart({
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080/'
    ]
  }
}, base);

const production = merge.smart({
  plugins: [
    new UglifyPlugin({minimize: true}),
  ]
}, base);

module.exports = {
  base, dev, production
};