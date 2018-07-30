/**
 * created by zhangzihao on 2018/6/21
 */
process.env.NODE_ENV = 'development';
const merge = require('webpack-merge');
const utils = require('./utils');
const baseConf = require('./webpack.base.conf');

const devConf = {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: utils.dir('dist'),
    publicPath: '/',
  },
  devtool: '#module-eval-source-map',
  devServer: {
    contentBase: utils.dir('dist'),
    port: 80,
    allowedHosts: ['your.own.url'],
    clientLogLevel: 'error',
    quiet: true,
    stats: {
      assets: false,
      entrypoints: false,
      modules: false,
      children: false,
      version: false,
      hash: false,
    },
  },
};

const config = merge(baseConf, devConf);

module.exports = config;
