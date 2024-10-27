<!--
 * @Author: 祝占朋 wb.zhuzp01@rd.netease.com
 * @Date: 2023-11-09 17:37:50
 * @LastEditors: 祝占朋 wb.zhuzhanpeng01@mesg.corp.netease.com
 * @LastEditTime: 2023-11-29 15:00:09
 * @FilePath: /ai-demo/src/components/UploadDom.vue
 * @Description: 
-->
<template>
  <div class="upload-box">
    <div class="tips" @click="upload">
      <img class="icon-file" src="../assets/home/icon-file.png" alt="图标" />
      <p class="title">{{ home.startDec }}</p>
      <div class="desc-content">
        <p class="desc">{{ home.updesc2 }}</p>
        <p class="desc">{{ home.require1 }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getLanguage } from '@/language/index';

const home = getLanguage().home;
const emits = defineEmits(['update']);

const upload = () => {
  emits('update');
};
</script>

<style lang="scss" scoped>
.upload-box {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 340px;
  background: #fff;
  box-sizing: border-box;
  border: 1px dashed #cecece;
  border-radius: 12px;
  @media (max-width: 768px) {
    height: 200px;
    border: 1px dashed #b0b0b0;
  }
}

.tips {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon-file {
    width: 80px;
    height: 80px;
    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }
  .title {
    margin-top: 12px;
    font-size: 20px;
    font-weight: 600;
    color: $title1;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .desc-content {
    width: 100%;
    max-width: 600px;
    margin: 12px 0 20px 0;
    .desc {
      width: 100%;
      text-align: center;
      font-size: 14px;
      font-weight: normal;
      color: $title2;
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
}
</style>
