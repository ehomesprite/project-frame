/**
 * created by snowdrop on 2018/5/20
 */
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';

new Vue({
  el: '#app',
  render: (r) => r(App),
});