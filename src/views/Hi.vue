<template>
  <div class="container">
    <main>
      <div class="login-container">
        <form @submit.prevent="submitLogin" class="login-form">
          <h3 class="login-title">统一用户登录</h3>
          
          <div class="form-group">
            <label>用户名:</label>
            <input 
              type="text"
              v-model="loginForm.username"
              placeholder="请输入用户名"
              required
            >
          </div>

          <div class="form-group">
            <label>密码:</label>
            <input 
              type="password"
              v-model="loginForm.password"
              placeholder="请输入密码"
              required
            >
          </div>

          <div class="form-group">
            <label>验证码:</label>
            <div class="verify-code">
              <input 
                type="text"
                v-model="loginForm.mailCode"
                placeholder="请输入验证码"
                required
              >
              <button 
                type="button"
                class="btn-code"
                :disabled="getCodeEnable"
                @click="getMailVerifyCode"
              >{{ getCodeBtnText }}</button>
            </div>
          </div>

          <div class="form-group remember">
            <label>
              <input type="checkbox" v-model="checked">
              <span>记住我一周</span>
            </label>
          </div>

          <div class="form-group">
            <button 
              type="submit" 
              class="btn-login"
              :disabled="loading"
            >
              {{ loading ? '登录中...' : '登录' }}
            </button>
          </div>

          <div class="form-group register-link">
            <span>还没有账号？</span>
            <a href="#" @click.prevent="gotoRegister">立即注册</a>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import { postKeyValueRequest, getRequest } from '@/utils/api';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        mailCode: '',
      },
      checked: true,
      loading: false,
      getCodeEnable: false,
      getCodeBtnText: '获取邮箱验证码',
    };
  },
  methods: {
    submitLogin() {
      if (!this.loginForm.username || !this.loginForm.password || !this.loginForm.mailCode) {
        alert('请填写完整的登录信息');
        return;
      }

      this.loading = true;
      postKeyValueRequest('/doLogin', this.loginForm)
        .then(resp => {
          if (resp && resp.status === 200) {
            window.sessionStorage.setItem('user', JSON.stringify(resp.obj));
            this.$router.replace('/home');
          } else {
            alert(resp.msg || '登录失败');
          }
        })
        .catch(() => {
          alert('服务器错误');
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getMailVerifyCode() {
      if (!this.loginForm.username) {
        alert('请先输入用户名');
        return;
      }

      getRequest('/mailVerifyCode').then(resp => {
        if (resp && resp.status === 200) {
          this.getCodeEnable = true;
          let i = 30;
          let id = setInterval(() => {
            this.getCodeBtnText = i-- + 's内不能发送';
          }, 1000);
          setTimeout(() => {
            clearInterval(id);
            this.getCodeEnable = false;
            this.getCodeBtnText = '获取邮箱验证码';
          }, 30000);
          alert(resp.msg);
        } else {
          alert(resp.msg || '获取验证码失败');
        }
      });
    },
    gotoRegister() {
      this.$router.push('/register');
    }
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f0f2f5;
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #409eff;
}

.verify-code {
  display: flex;
  gap: 1rem;
}

.verify-code input {
  flex: 1;
}

.btn-code {
  padding: 0 1rem;
  white-space: nowrap;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-code:hover:not(:disabled) {
  background: #e8e8e8;
}

.btn-code:disabled {
  background: #eee;
  cursor: not-allowed;
}

.remember {
  display: flex;
  align-items: center;
}

.remember label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  cursor: pointer;
  color: #666;
}

.btn-login {
  width: 100%;
  padding: 0.75rem;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-login:hover:not(:disabled) {
  background: #66b1ff;
}

.btn-login:disabled {
  background: #a0cfff;
  cursor: not-allowed;
}

.register-link {
  text-align: center;
  margin-bottom: 0;
}

.register-link span {
  color: #666;
}

.register-link a {
  color: #409eff;
  text-decoration: none;
  margin-left: 0.5rem;
}

.register-link a:hover {
  color: #66b1ff;
}
</style>
