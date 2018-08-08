/**
 * created by zhangzihao on 2018/6/20
 */
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { common: config } = require('./config');

const utils = {
  _getJsEntryList() {
    const entries = {};
    glob.sync(this.dir(config.jsSourceFilePath)).map((jsFilePath) => {
      entries[jsFilePath.split('/').slice(-3, -1).join('/')] = jsFilePath;
    });
    console.log('_getJsEntryList\n', entries);
    return entries;
  },
  getEntries() {
    return this._getJsEntryList();
  },
  _getHtmlFileList() {
    const files = {};
    glob.sync(this.dir(config.htmlSourceFilePath)).map((filePath) => {
      files[filePath.split('/').slice(-3, -1).join('/')] = filePath;
    });
    console.log('_getHtmlFileList\n', files);
    return files;
  },
  getHtmlWebpackConf() {
    const files = this._getHtmlFileList();
    const confList = [];
    for (let name in files) {
      if (!files.hasOwnProperty(name)) continue;
      const conf = {
        filename: `${config.htmlDir}/${name}.html`,
        template: files[name],
        chunks: [name, 'common', 'manifest', 'vendor'],
      };
      confList.push(conf);
    }
    return confList;
  },
  getHtmlWebpackPlugin() {
    const confList = this.getHtmlWebpackConf();
    const plugins = [];
    confList.forEach((conf) => {
      plugins.push(new HtmlWebpackPlugin(conf));
    });
    return plugins;
  },
  dir: (...dirPath) => path.resolve(__dirname, '..', ...dirPath),
  isProduction: () => (process.env.NODE_ENV === 'production'),
  assetDir(...arg) {
    if (!this.isProduction()) return path.posix.join(...arg);
    return path.posix.join(config.assetDir, ...arg)
  },
  loader(loaders) {
    if (!this.isProduction()) loaders.unshift('cache-loader');
    return loaders;
  },
};

module.exports = utils;
