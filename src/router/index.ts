/*
 * @Author: 祝占朋 wb.zhuzp01@rd.netease.com
 * @Date: 2023-11-09 17:37:50
 * @LastEditors: 祝占朋 wb.zhuzhanpeng01@mesg.corp.netease.com
 * @LastEditTime: 2024-01-11 10:41:49
 * @FilePath: /QAnything/front_end/src/router/index.ts
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';
import { start, close } from '@/utils/nporgress';
import { message } from 'ant-design-vue';
import { checkToken } from '@/utils/utils';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes,
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Hi.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: {
        requireAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  start();
  // 检查是否需要认证
  if(to.path==='/login'){
    const user = window.sessionStorage.getItem('user');
    checkToken().then(resp => {
      if (user && resp.msg) {
        message.info('已登录,无需重复登录');
        next({
          path: '/home',
          replace: true
        });
      } else {
        next();
      }
    }).catch(err => {
      next();
    });
  }
  if (to.meta.requiresAuth) {
    const user = window.sessionStorage.getItem('user');
    checkToken().then(resp => {
      if (user && resp.msg) {
        next();
      } else {
        // 显示token已过期
        message.error('token已过期，请重新登录');
        next({
          path: '/login',
          replace: true
        });
      }
    }).catch(err => {
      next({
        path: '/login',
        replace: true
      });
    });
  }
});

router.afterEach(() => {
  close();
});

export default router;

