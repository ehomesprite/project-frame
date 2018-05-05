/**
 * created by snowdrop on 2018/5/5
 */
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

utils = {
  _getFileList() {
    const files = {};
    glob.sync(this.dir('./src/views/**/index.html')).map((filename) => {
      files[filename.split('/').slice(-2)[0]] = filename;
    });
    console.log(files);
    return files;
  },
  getHtmlWebpackConf() {
    const files = this._getFileList();
    const confList = [];
    for (let name in files) {
      if (!files.hasOwnProperty(name)) continue;
      const conf = {
        filename: `${name}.html`,
        template: files[name],
        chunks: [name],
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
// utils._getFileList();