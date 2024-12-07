<template>
  <div class="user-profile-card">
    <div class="avatar-section">
      <img :src="userInfo.userProfile || defaultAvatar" alt="用户头像" class="avatar" />
    </div>
    <div class="info-section">
      <h2>{{ userInfo.name }}</h2>
      <p>学号: {{ userInfo.studentId }}</p>
      <p>角色: {{ userInfo.role }}</p>
      <p>性别: {{ userInfo.gender }}</p>
      <p>民族: {{ userInfo.nation }}</p>
      <p>生源地: {{ userInfo.hometown }}</p>
    </div>
    <div class="email-icon" @click="handleEmailClick">
      <img :src="emailIcon" alt="邮箱图标" />
      <span v-if="hasUnreadEmails" class="unread-indicator"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUser } from '@/store/useUser';
import { storeToRefs } from 'pinia';

const userStore = useUser();
const { userInfo } = storeToRefs(userStore);

// 确保路径正确并且文件存在
const defaultAvatar = new URL('../../assets/home/avatar.png', import.meta.url).href;
const emailIcon = new URL('../../assets/home/icon-email.png', import.meta.url).href;
const hasUnreadEmails = ref(true);

const handleEmailClick = () => {
  console.log('邮箱图标被点击');
};

// 用于调试
console.log('Current userInfo:', userInfo.value);

</script>

<style scoped>
.user-profile-card {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
  transition: box-shadow 0.3s ease;
  height: 100vh;
}

.user-profile-card:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.avatar-section {
  flex-shrink: 0;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

.info-section {
  margin-left: 20px;
}

.info-section h2 {
  font-size: 1.5rem;
  margin: 0;
  color: #333;
}

.info-section p {
  font-size: 1rem;
  color: #666;
  margin-top: 5px;
}

.email-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.email-icon:hover {
  transform: scale(1.1);
}

.unread-indicator {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 12px;
  height: 12px;
  background-color: red;
  border-radius: 50%;
  border: 2px solid #fff;
}
</style>
