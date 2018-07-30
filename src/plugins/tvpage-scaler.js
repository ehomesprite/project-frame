/**
 * created by zhangzihao on 2018/2/24
 */
const log = (text) => {
  console.log(`[H5]->[plugins/tvpage-scaler].${text}`);
};

const utils = {
  _getMultipler() {
    return (window.innerWidth / 1920);
  },
  _createStyleTag() {
    if (this._styleTag) return;
    this._styleTag = document.createElement('style');
    this._styleTag.id = 'page-scaler';
  },
  updateStyle() {
    const multipler = this._getMultipler();
    log(`_createStyleTag: getMultipler = ${multipler}`);
    const styleRule = `
      html {
        transform-origin: left top;
        -webkit-transform-origin: left top;
        transform: scale(${multipler});
        -webkit-transform: scale(${multipler});
        font-size: 100px;
        width: 1920px;
        height: 1080px;
        overflow: hidden;
      }
    `;
    this._styleTag.innerHTML = styleRule;
  },
  installTvPageScaleStyle() {
    const { body } = document;
    this._createStyleTag();
    body.appendChild(this._styleTag);
    this.updateStyle();
  },
};

export default {
  install() {
    window.onresize = () => {
      utils.updateStyle();
    };
    utils.installTvPageScaleStyle();
  },
};
