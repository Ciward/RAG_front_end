import router from '../router';

// /*axios全局响应拦截*/
// axios.interceptors.response.use(
//   success => {
//     //请求成功且服务器处理无错误
//     if (success.status == 200) {
//       ElMessage.success({ message: success.data.msg });
//     }
//     return success.data;
//   },
//   error => {
//     if (error.response.status == 504) {
//       //	充当网关或代理的服务器，未及时从远端服务器获取请求
//       ElMessage.error({ message: '找不到服务器' });
//     } else if (error.response.status == 403) {
//       //服务器理解请求客户端的请求，但是拒绝执行此请求
//       ElMessage.error({ message: '权限不足，请联系管理员' });
//     } else if (error.response.status == 401) {
//       //请求要求用户的身份认证
//       ElMessage.error({ message: '尚未登录，请登录' });
//       router.replace('/'); //跳转到登陆页
//     } else if (error.response.status == 404) {
//       ElMessage.error({ message: '服务器无法根据客户端的请求找到资源' });
//     } else if (error.response.status == 500) {
//       ElMessage.error({ message: '服务器内部错误，无法完成请求' });
//     } else {
//       if (error.response.data) {
//         ElMessage.error({ message: error.response.data.msg });
//       } else {
//         ElMessage.error({ message: '未知错误!' });
//       }
//     }
//     return;
//   }
// );

let base = import.meta.env.VITE_APP_API_HOST;

/*
登录请求方法，与服务端Spring Security的登录接口对接
 */
export const postKeyValueRequest = (url, params) => {
  const formData = new URLSearchParams();
  for (const key in params) {
    formData.append(key, params[key]);
  }

  return fetch(`${base}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 200) {
      return data;
    } else {
      throw new Error(data.msg || '请求失败');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

/*
封装“增加”请求方法——post
 */
export const postRequest = (url, params) => {
  return fetch(`${base}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

/*
封装“修改”请求方法——put
 */
export const putRequest = (url, params) => {
  return fetch(`${base}${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

/*
封装“查询”请求方法——get
 */
export const getRequest = (url) => {
  return fetch(`${base}${url}`, {
    method: 'GET',
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

/*
封装“删除”请求方法——delete
 */
export const deleteRequest = (url) => {
  return fetch(`${base}${url}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};
