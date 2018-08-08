/**
 * created by zhangzihao on 2018/6/21
 */
process.env.NODE_ENV = 'development';
const merge = require('webpack-merge');
const utils = require('./utils');
const baseConf = require('./webpack.base.conf');
const { dev: config } = require('./config');

const devConf = {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: utils.dir('dist'),
    publicPath: '/',
  },
  devtool: config.sourceMap,
  devServer: {
    contentBase: utils.dir('dist'),
    port: config.devServerPort,
    allowedHosts: config.devServerHosts,
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

module.exports = merge(baseConf, devConf);
