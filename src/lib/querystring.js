/**
 * Created by mackxu on 2017/6/25.
 */

import _ from 'lodash';

const decode = decodeURIComponent;
const encode = encodeURIComponent;
const delimiter = '&';

/**
 * parse url
 * @param {string} url
 * @returns {Object} Returns url params
 */
export const parse = (url) => {
  const parmas = {};
  const reg = /[?&][^?&]+=[^?&]+/g;
  const arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      const tempArr = item.substring(1).split('=');
      parmas[decode(tempArr[0])] = decode(tempArr[1]);
    });
  }
  return parmas;
};

/**
 * 获取指定的参数值
 * @param { string } url
 * @param { string } key
 * @returns { string }
 */
export const searchParamValue = (url, key) => {
  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
  const i = url.indexOf('?');
  if (i !== -1) {
    url = url.substring(i + 1); // 获取问号以后的字符串
  }
  const r = url.match(reg);
  if (r != null) return decode(r[2]);
  return '';
};

/**
 * stringify url params
 * @param {Object} params
 * @returns {string} params string
 */
export const stringify = (params) => {
  if (!_.isPlainObject(params)) {
    return '';
  }
  const paramKeys = Object.keys(params);
  const arr = [];
  for (let i = 0; i < paramKeys.length; i += 1) {
    const val = params[paramKeys[i]];
    if (_.isNumber(val) || _.isString(val) || _.isBoolean(val)) {
      arr.push(`${encode(paramKeys[i])}=${encode(val)}`);
    }
  }
  return arr.join(delimiter);
};
