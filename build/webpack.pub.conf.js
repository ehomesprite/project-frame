/**
 * created by zhangzihao on 2018/6/25
 */
process.env.NODE_ENV = 'production';
process.env.PRODUCTION_STATUS = 'publish';
const buildConf = require('./webpack.prod.conf');
const merge = require('webpack-merge');
const { build } = require('./config');

const config = {
  output: {
    publicPath: build.publicPath,
  },
};

const pubConf = merge(buildConf, config);

module.exports = pubConf;
