const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const utils = require('./utils');

const entryPath = './src/views/';


module.exports = {
  mode: 'production',
  entry: {
    page1: utils.dir(entryPath, 'page1/main.js'),
    page2: utils.dir(entryPath, 'page2/main.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: utils.dir('dist'),
    // publicPath: 'dist/',
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      'utils': utils.dir('src/utils'),
    }
  },
  module: {
    rules: [
      { // css-loader
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, { // url-loader
        test: /\.(png|svg|jpg|gif)/,
        loader: 'url-loader',
        options: {
          limit: 4000,
        },
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    ...utils.getHtmlWebpackPlugin(),
  ]
};
