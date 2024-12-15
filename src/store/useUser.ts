/*
 * @Author: 祝占朋 wb.zhuzhanpeng01@mesg.corp.netease.com
 * @Date: 2024-01-09 15:28:56
 * @LastEditors: 祝占朋 wb.zhuzhanpeng01@mesg.corp.netease.com
 * @LastEditTime: 2024-01-11 10:45:47
 * @FilePath: /QAnything/front_end/src/store/useUser.ts
 * @Description:
 */

import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getRequest } from '@/utils/api';
import { message } from 'ant-design-vue';
// 修改接口定义以匹配后端返回的数据结构
interface UserInfo {
  id?: number;
  role?: string;
  username?: string;
  password?: string | null;
  userProfile?: string;
  userStateId?: number;
  gender?: string;
  name?: string;
  studentId?: string;
  nation?: string;
  hometown?: string;
  enabled?: boolean;
  authorities?: any | null;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
}

export const useUser = defineStore(
  'user',
  () => {
    const userInfo = ref<UserInfo>({});

    const setUserInfo = (info: any) => {
      userInfo.value = {
        id: info.id,
        role: info.role,
        username: info.username,
        password: info.password,
        userProfile: info.userProfile,
        userStateId: info.userStateId,
        gender: info.gender,
        name: info.name,
        studentId: info.studentId,
        nation: info.nation,
        hometown: info.hometown,
        enabled: info.enabled,
        authorities: info.authorities,
        accountNonExpired: info.accountNonExpired,
        accountNonLocked: info.accountNonLocked,
        credentialsNonExpired: info.credentialsNonExpired
      };
      console.log('Store updated userInfo:', userInfo.value);
    };
    const updateUserInfo = () => {
      return new Promise((resolve, reject) => {
        getRequest('/user/getUserInfo').then((res) => {
          console.log(res);
          let user = res.obj;
          setUserInfo(user);
          resolve(res);
        }).catch((err) => {
          console.log(err);
          message.error('更新用户信息失败');
          reject(err);
        });
      });
    };
    return {
      userInfo,
      setUserInfo,
      updateUserInfo
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  }
);