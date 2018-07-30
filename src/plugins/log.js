/**
 * created by zhangzihao on 2018/1/29
 */
/* eslint-disable */

const logHelper = {
  data() {
    return {
      logTag: '',
    };
  },
  methods: {
    _log(logTag, text) {
      console.log(`[H5]->${logTag}.${text}`);
    },
    _getPageName() {
      return location.pathname.split('/').slice(-2).join('/').replace(/.html/, '');
    },
    _getLogTag() {
      if (this.logTag) return this.logTag;
      const name = this.$options.name || this.$options._componentTag || '[unnamedModule]';
      if (this.$parent === undefined) this.logTag = `[${this._getPageName()}]`; // 递归到root节点停止
      else if (this.$root._uid === this.$parent._uid) this.logTag = `${this.$parent._getLogTag()}->[App]`;
      else {
        this.logTag = `${this.$parent._getLogTag()}->[${name}]`;
      }
      return this.logTag;
    },
    log(text) {
      const logTag = this._getLogTag();
      if (text instanceof Error) {
        text = text.stack || text.message;
      } else if (typeof text === 'object') {
        text = JSON.stringify(text);
      }
      this._log(logTag, text);
    },
  },
};

export default {
  install(vue) {
    vue.mixin(logHelper);
  },
};
