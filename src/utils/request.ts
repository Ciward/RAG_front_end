import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_PREFIX,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: ['text/event-stream', 'application/json'],
    'Authorization': window.sessionStorage.getItem('token'),
  },
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 可以在这里添加token等认证信息
    // config.url = config.baseURL + config.url;
    // console.log(config.url);
    // config.headers.Authorization = window.sessionStorage.getItem('token');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    const { data } = response;
    return data;
  },
  error => {
    console.error('请求失败:', error.message || '请求失败');
    return Promise.reject(error);
  }
);

export { request };
