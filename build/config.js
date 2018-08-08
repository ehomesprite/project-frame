/**
 * created by zhangzihao on 2018/8/8
 */
const config = {
  common: {
    jsSourceFilePath: 'src/views/**/**/main.js',
    htmlSourceFilePath: 'src/views/**/**/index.html',
    htmlDir: 'page',
    assetDir: 'assets',
  },
  dev: {
    sourceMap: '#module-eval-source-map',
    devServerPort: 8080,
    devServerHosts: ['test.com'],
  },
  build: {
    publicPath: '//static.test.com/',
  },
};

module.exports = config;
