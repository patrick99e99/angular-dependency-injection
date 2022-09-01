/* eslint-env node */
const { webpackConfig, merge } = require('@rails/webpacker')
const path            = require('path');
const webpack         = require('webpack');
const processEnv      = { RAILS_ENV: process.env.RAILS_ENV };
webpackConfig.plugins.unshift( new webpack.EnvironmentPlugin(processEnv));

let loaders = [{
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: 'ts-loader',
}];

module.exports = merge(webpackConfig, {
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: [
      '.css',
      '.gif',
      '.html',
      '.jpeg',
      '.jpg',
      '.js',
      '.jsx',
      '.module.css',
      '.module.sass',
      '.module.scss',
      '.png',
      '.sass',
      '.scss',
      '.svg',
      '.ts',
      '.tsx',
    ],
  },
});

