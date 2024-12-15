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
        <h2>{{ userInfo.username }}</h2>
        <p>用户名: {{ userInfo.username }}</p>
        <p>姓名: {{ userInfo.name }}</p>
        <p>学号: {{ userInfo.studentId }}</p>
        <p>角色: {{ userInfo.role === 'admin' ? '管理员' : '用户' }}</p>
        <p>性别: {{ userInfo.gender === 'male' ? '男' : '女' }}</p>
        <p>民族: {{ userInfo.nation }}</p>
        <p>生源地: {{ userInfo.hometown }}</p>
        <p>账号状态: {{ userInfo.enabled ? '正常' : '禁用' }}</p>
      </div>
    </div>
    
    <template #footer>
      <div style="text-align: right;">
        <el-button type="danger" @click="handleLogout">退出登录</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUser } from '@/store/useUser';
import { storeToRefs } from 'pinia';
import { ElMessageBox } from 'element-plus';
import router from '@/router';
import { getRequest } from '@/utils/api';
const userStore = useUser();
const { userInfo } = storeToRefs(userStore);
const dialogVisible = ref(false);

const defaultAvatar = new URL('../../assets/home/icon-user.png', import.meta.url).href;

const handleClose = () => {
  dialogVisible.value = false;
};

const showDialog = () => {
  // 同步等待用户信息更新
  userStore.updateUserInfo().then(() => {
    dialogVisible.value = true;
  });
};

const handleLogout = () => {
  ElMessageBox.confirm('确定要退出登录吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    getRequest('/logout').then(() => {
      dialogVisible.value = false;
      window.sessionStorage.removeItem('token');
      router.push('/login');
    });
  }).catch(() => {});
};

defineExpose({
  showDialog
});

// onMounted(async () => {
//   
// });
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
