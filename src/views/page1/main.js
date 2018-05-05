/**
 * created by zhangzihao on 2018/4/27
 */

import './assets/style/main';
import domUtils from 'utils/dom';

const body = document.querySelector('body');
const div = document.createElement('div');
div.innerHTML = 'hello, webpack';
div.classList.add('simple');
body.appendChild(div);

setTimeout(() => {
  domUtils.addDiv('Add Me In');
}, 1000);