/**
 * created by zhangzihao on 2018/7/27
 */
process.env.NODE_ENV = 'production';
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prodConfig = require('./webpack.prod.conf');
const merge = require('webpack-merge');

const config = {
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({ analyzerPort: 9999 }),
  ],
};

const reportConf = merge(prodConfig, config);

module.exports = reportConf;
