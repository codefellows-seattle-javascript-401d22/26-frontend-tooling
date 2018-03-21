'use strict';

// extracts html and compiles it into one html pg - index.html
const HtmlPlugin = require('html-webpack-plugin');
// extracts css out of inline style tags or css files into one file
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  // this is where the app starts (entry point)
  entry: `${__dirname}/src/main.js`,
  // this is where the app is built
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle-[hash].js',
  },
  plugins: [
    // plugins tell where the html file lives
    new HtmlPlugin({ template: `${__dirname}/src/index.html`}),
    new ExtractPlugin('bundle-[hash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};