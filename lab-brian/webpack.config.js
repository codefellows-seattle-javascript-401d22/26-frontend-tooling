'use strict';

const HtmlPlugin = require('html-webpack-plugin');
// extract html and compiles it into 1 html page, index.html file
const ExtractPlugin = require('extract-text-webpack-plugin');
// extracts css out of inline style tags or css files into 1 file

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  // devtool allows us to get source mapping instead of line 2000 on budle.js we get line 14 on gallery.js if there are any errors
  entry: `${__dirname}/src/main.js`,
  // where my entire app starts; single entry point for app similar to server file
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle-[hash].js',
  },
  // output says where to build app; create build file and stick into bundle[hash].js
  plugins: [
    new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
    new ExtractPlugin('bundle-[hash].css'),
  ],
  // plugins tells us where our html file lives
  module: {
    // loaders: babel-loader transpiles es7 and es6 to es5; don't need loaders on html, but need loaders on every other asset ex. fonts, images, mp3's and sound files
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
      // sass loader compiless css into inline style tags, then css loader compiles it into 1 css file
    ],
  },
};