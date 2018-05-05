const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const utils = require('./utils');

const entryPath = './src/views/';


module.exports = {
  mode: 'development',
  entry: utils.getEntries(),
  output: {
    filename: '[name].js',
    path: utils.dir('dist'),
    publicPath: '/',
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
