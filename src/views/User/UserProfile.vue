<template>
  <el-dialog
    v-model="dialogVisible"
    title="用户信息"
    width="500px"
    :before-close="handleClose"
  >
    <div class="user-profile-card">
      <div class="avatar-section">
        <img :src="userInfo.userProfile || defaultAvatar" alt="用户头像" class="avatar" />
      </div>
      <div class="info-section">
        <h2>{{ userInfo.nickname }}</h2>
        <p>用户名: {{ userInfo.username }}</p>
        <p>姓名: {{ userInfo.name }}</p>
        <p>学号: {{ userInfo.studentId }}</p>
        <p>角色: {{ userInfo.role }}</p>
        <p>性别: {{ userInfo.gender }}</p>
        <p>民族: {{ userInfo.nation }}</p>
        <p>生源地: {{ userInfo.hometown }}</p>
        <p>账号状态: {{ userInfo.enabled ? '正常' : '禁用' }}</p>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUser } from '@/store/useUser';
import { storeToRefs } from 'pinia';

const userStore = useUser();
const { userInfo } = storeToRefs(userStore);
const dialogVisible = ref(false);

const defaultAvatar = new URL('../../assets/home/icon-user.png', import.meta.url).href;

const handleClose = () => {
  dialogVisible.value = false;
};

const showDialog = () => {
  dialogVisible.value = true;
};

defineExpose({
  showDialog
});

onMounted(() => {
  if (!userInfo.value.token) {
    const storedUser = window.sessionStorage.getItem('user');
    if (storedUser) {
      userStore.setUserInfo(JSON.parse(storedUser));
    }
  }
});
</script>

<style scoped>
.user-profile-card {
  padding: 20px;
}

.avatar-section {
  text-align: center;
  margin-bottom: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

.info-section {
  text-align: left;
}

.info-section h2 {
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  color: #333;
}

.info-section p {
  font-size: 1rem;
  color: #666;
  margin: 10px 0;
}
</style>
