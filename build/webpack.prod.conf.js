/**
 * created by zhangzihao on 2018/6/20
 */
process.env.NODE_ENV = 'production';
const merge = require('webpack-merge');
const utils = require('./utils');
const baseConf = require('./webpack.base.conf');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

const prodConf = {
  mode: 'production',
  output: {
    filename: utils.assetDir('js/[name].[contenthash:9].js'),
    chunkFilename: utils.assetDir('js/[name].[contenthash:9].js'),
    path: utils.dir('dist'),
    publicPath: '/',
  },
  stats: {
    entrypoints: false,
    modules: false,
    children: false,
    colors: true,
  },
  plugins: [
    new OptimizeCSSPlugin({
      cssProcessor: require('cssnano'),
    }),
  ],
};

const config = merge(baseConf, prodConf);

module.exports = config;
