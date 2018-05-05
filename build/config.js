var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var entryPath = '../src/views/';

module.exports = {
  mode: 'production',
  entry: {
    page1: path.resolve(__dirname, entryPath, 'page1/main.js'),
    // page2: path.resolve(__dirname, entryPath, 'page2/main.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // publicPath: 'dist/',
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      'utils': path.resolve(__dirname, '../src/utils'),
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
    new HtmlWebpackPlugin({
      title: 'output management'
    }),
  ]
};