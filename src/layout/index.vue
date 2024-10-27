<!--
 * @Author: 祝占朋 wb.zhuzhanpeng01@mesg.corp.netease.com
 * @Date: 2024-01-09 15:28:56
 * @LastEditors: 祝占朋 wb.zhuzhanpeng01@mesg.corp.netease.com
 * @LastEditTime: 2024-01-11 10:43:58
 * @FilePath: /QAnything/front_end/src/layout/index.vue
 * @Description: 
-->

<template>
  <a-layout>
    <Head />
    <a-layout>
      <!-- 使用响应式断点 -->
      <a-layout-sider
        :width="isMobile ? 200 : 280"
        :collapsed-width="isMobile ? 0 : 80"
        :breakpoint="'md'"
        @collapsedChange="handleCollapsedChange"
        style="background: #fff"
      >
        <Sider />
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="main">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Head from '@/components/Head.vue';
import Sider from '@/components/Sider.vue';

const isMobile = ref(false);

const handleCollapsedChange = (collapsed: boolean) => {
  isMobile.value = collapsed;
};
</script>

<style lang="scss" scoped>
.main {
  padding: 16px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .main {
    padding: 8px;
  }
}
</style>
