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

// 定义用户信息接口
interface UserInfo {
  token: string;
  role?: string;
  username?: string;
  userProfile?: string;
  userStateId?: string;
  isEnabled?: boolean;
  isLocked?: boolean;
  gender?: string;
  name?: string;
  studentId?: string;
  nation?: string;
  hometown?: string;
}

export const useUser = defineStore(
  'user',
  () => {
    const userInfo = ref<UserInfo>({
      token: '',
    });

    const setUserInfo = (info: UserInfo) => {
      userInfo.value = info;
    };

    return {
      userInfo,
      setUserInfo,
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);

console.log('Login response:', resp.obj);  // 检查服务器返回的数据
console.log('Stored userInfo:', userInfo.value);  // 检查存储的用户信息