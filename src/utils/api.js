import axios from 'axios';
import { ElMessage } from 'element-plus';
import router from '../router';

/*axios全局响应拦截*/
axios.interceptors.response.use(
  success => {
    if (success.status && success.status == 200 && success.data.status == 500) {
      //请求成功，但处理出现其他错误
      ElMessage.error({ message: success.data.msg });
      return;
    }
    //请求成功且服务器处理无错误
    if (success.data.msg) {
      ElMessage.success({ message: success.data.msg });
    }
    return success.data;
  },
  error => {
    if (error.response.status == 504) {
      //	充当网关或代理的服务器，未及时从远端服务器获取请求
      ElMessage.error({ message: '找不到服务器' });
    } else if (error.response.status == 403) {
      //服务器理解请求客户端的请求，但是拒绝执行此请求
      ElMessage.error({ message: '权限不足，请联系管理员' });
    } else if (error.response.status == 401) {
      //请求要求用户的身份认证
      ElMessage.error({ message: '尚未登录，请登录' });
      router.replace('/'); //跳转到登陆页
    } else if (error.response.status == 404) {
      ElMessage.error({ message: '服务器无法根据客户端的请求找到资源' });
    } else if (error.response.status == 500) {
      ElMessage.error({ message: '服务器内部错误，无法完成请求' });
    } else {
      if (error.response.data) {
        ElMessage.error({ message: error.response.data.msg });
      } else {
        ElMessage.error({ message: '未知错误!' });
      }
    }
    return;
  }
);

let base = '';

import.meta.env.VITE_APP_MODE === 'dev' ? '' : import.meta.env.VITE_APP_API_HOST;

/*
登录请求方法，与服务端Spring Security的登录接口对接
 */
export const postKeyValueRequest = (url, params) => {
  console.log(`${base}${url}`);
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      function (data) {
        //处理请求的数据格式
        let ret = '';
        for (let i in data) {
          ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&';
        }
        return ret;
      },
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

/*
封装“增加”请求方法——post
 */
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
  });
};

/*
封装“修改”请求方法——put
 */
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
  });
};

/*
封装“查询”请求方法——get
 */
export const getRequest = (url, params) => {
  console.log(`${url}`);
  return axios({
    method: 'get',
    url: `${base}${url}`,
    data: params,
  });
};

/*
封装“删除”请求方法——delete
 */
export const deleteRequest = (url, params) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    data: params,
  });
};
