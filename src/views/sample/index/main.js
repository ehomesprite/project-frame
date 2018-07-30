/**
 * created by zhangzihao on 2018/7/30
 */
import 'babel-polyfill';
import Vue from 'vue';
import logHelper from 'plugins/log';
import App from './App';

Vue.use(logHelper);

new Vue({
  render: h => h(App),
}).$mount('#app');
