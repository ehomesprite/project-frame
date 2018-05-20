/**
 * created by zhangzihao on 2018/4/27
 */

import 'babel-polyfill';
import domUtils from 'utils/dom';
import './assets/style/main';

const body = document.querySelector('body');
const div = document.createElement('div');
div.innerHTML = 'hello, webpack';
div.classList.add('simple');
body.appendChild(div);

setTimeout(() => {
  domUtils.addDiv('Add Me In');
}, 1000);

const f1 = async () => new Promise((resolve) => {
  setTimeout(() => {
    console.log('f1');
    resolve();
  }, 1000);
});

const f2 = async () => {
  console.log('f2');
};

const f = async () => {
  await f1();
  f2();
  console.log('f');
};

f();
