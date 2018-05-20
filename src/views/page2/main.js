/**
 * created by zhangzihao on 2018/4/27
 */

import _ from 'lodash';
import domUtils from 'utils/dom';

setTimeout(() => {
  domUtils.addDiv('Add Me In ?');
}, 1000);

const arr = [];

console.log(_.isArray(arr));
console.log(2);