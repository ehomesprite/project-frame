// const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const utils = require('./utils');

module.exports = {
  mode: 'development',
  entry: utils.getEntries(),
  output: {
    filename: 'js/[name].js',
    path: utils.dir('dist'),
    publicPath: '/',
  },
  devtool: '#cheap-eval-source-map',
  devServer: {
    contentBase: utils.dir('dist'),
    port: 8080,
    allowedHosts: ['cms.ptqy.gitv.tv'],
    // hot: true,
  },
  resolve: {
    extensions: ['.js', '.css', '.less'],
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
      }, {
        test: /.less/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }, { // url-loader
        test: /\.(png|svg|jpg|gif)/,
        loader: 'url-loader',
        options: {
          limit: 4000,
        },
      }, {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {
      root: utils.dir(),
    }),
    ...utils.getHtmlWebpackPlugin(),
  ]
};
