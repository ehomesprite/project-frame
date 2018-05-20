/**
 * created by zhangzihao on 2018/4/27
 */

import 'babel-polyfill';
import domUtils from 'utils/dom';

setTimeout(() => {
  domUtils.addDiv('Add Me In ?');
}, 1000);

const arr = [];

const f = async () => {
  const _ = (await import('lodash')).default;
  console.log(_.isArray(arr));
};

console.log(2);
setTimeout(() => {
  f();
}, 1000);
