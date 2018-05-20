/**
 * created by snowdrop on 2018/5/5
 */
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

utils = {
  _getJsEntryList() {
    const entries = {};
    glob.sync(this.dir('./src/views/**/main.js')).map((jsFilePath) => {
      entries[jsFilePath.split('/').slice(-2)[0]] = jsFilePath;
    });
    console.log('_getJsEntryList\n', entries);
    return entries;
  },
  getEntries() {
    return this._getJsEntryList();
  },
  _getHtmlFileList() {
    const files = {};
    glob.sync(this.dir('./src/views/**/index.html')).map((filePath) => {
      files[filePath.split('/').slice(-2)[0]] = filePath;
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
        filename: `common/tv/${name}.html`,
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

};

module.exports = utils;

// debug area
// utils._getJsEntryList();