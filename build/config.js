// const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const utils = require('./utils');

module.exports = {
  mode: 'development',
  entry: utils.getEntries(),
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: utils.dir('dist'),
    publicPath: '/',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: utils.dir('dist'),
    port: 8080,
    allowedHosts: ['cms.ptqy.gitv.tv'],
    // hot: true,
  },
  resolve: {
    extensions: ['.js', '.css', '.less', '.vue'],
    alias: {
      utils: utils.dir('src/utils'),
    },
  },
  module: {
    rules: [
      { // vue-loader
        test: /\.vue$/,
        loader: 'vue-loader',
      }, {
        test: /.less/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader',
          ],
        }),
      }, { // url-loader
        test: /\.(png|svg|jpg|gif)/,
        loader: 'url-loader',
        options: {
          limit: 4000,
        },
      }, {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {
      root: utils.dir(),
    }),
    ...utils.getHtmlWebpackPlugin(),
    new VueLoaderPlugin(),
    new ExtractTextWebpackPlugin({
      filename: 'css/[name].css',
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     minChunks: 1,
  //     name: true,
  //     cacheGroups: {
  //       common: {
  //         name: 'common',
  //         chunks: 'initial',
  //         minChunks: 2,
  //         // maxInitialRequests: 5, // The default limit is too small to showcase the effect
  //         minSize: 0, // This is example is too small to create commons chunks
  //       },
  //       vendor: {
  //         test: /node_modules/,
  //         chunks: 'initial',
  //         name: 'vendor',
  //         priority: 10,
  //         enforce: true,
  //       },
  //     },
  //   },
  //   runtimeChunk: {
  //     name: 'manifest',
  //   },
  // },
};
