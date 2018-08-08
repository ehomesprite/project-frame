/**
 * created by zhangzihao on 2018/8/8
 */
const config = {
  common: {
    jsSourceFilePath: 'src/views/**/**/main.js',
    htmlSourceFilePath: 'src/views/**/**/index.html',
    htmlDir: 'common/tv-coop',
    assetDir: 'tv-coop/cache/v1',
  },
  dev: {
    sourceMap: '#module-eval-source-map',
    devServerPort: 8080,
    devServerHosts: ['cms.ptqy.gitv.tv'],
  },
  build: {
    publicPath: '//static.ptqy.gitv.tv/',
  },
};

module.exports = config;
