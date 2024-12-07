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

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes,
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
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
  if (to.meta.requireAuth) {
    const admin = window.sessionStorage.getItem('user');
    if (admin) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
        replace: true
      });
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  close();
});

export default router;

