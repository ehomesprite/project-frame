/**
 * created by zhangzihao on 2018/7/2
 */
import axios from 'axios';
import jsonp from 'jsonp';

// 设置请求带cookie
// axios.defaults.withCredentials = true;
// 利用拦截器做预处理
axios.interceptors.request.use(config => config, error => Promise.reject(error.request || error.massage));
axios.interceptors.response.use(response => response, error => Promise.reject(error.response || error.message));

axios.defaults.timeout = 3000;

const checkStatus = (response) => {
  if (response && (response.status === 200 || response.status === 304)) {
    return response.data;
  }
  return {
    code: -404,
    message: response.statusText,
    data: response.statusText,
  };
};

const http = {
  get({ url, params, config }) {
    return axios.get(url, Object.assign({ params }, config)).then(checkStatus);
  },
  post({ url, data, config }) {
    return axios.post(url, data, config).then(checkStatus);
  },
  request(config) {
    return axios.request(config).then(checkStatus);
  },
  jsonp({ url, config }) {
    return new Promise((resolve, reject) => {
      jsonp(url, config, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
};

export default http;
