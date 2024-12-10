import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: window.sessionStorage.getItem('token'),
  },
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 可以在这里添加token等认证信息
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
