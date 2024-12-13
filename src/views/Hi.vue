<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <el-container class="login-page">
    <div class="background-logo">
      <img src="@/assets/login/logo-small.png" alt="logo" class="background-logo-image"/>
    </div>
    <el-main>
      <div class="loginContainer">
        <h2 class="loginTitle">"赛博辅导员"智能问答系统</h2>
        <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="80px" v-if="!registerDialogVisible">
          <h3 class="loginTitle">用户登录</h3>
          <el-form-item label="用户名:" prop="username">
            <el-input
              v-model="loginForm.username"
              type="text"
              auto-complete="off"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              auto-complete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码:" prop="code">
            <el-input
              v-model="loginForm.code"
              type="text"
              auto-complete="off"
              placeholder="请输入验证码"
              style="width: 150px"
              @keydown.enter.native="submitLogin"
            ></el-input>
            <img
              style="margin-bottom: -8px; margin-left: 15px"
              :src="verifyCode"
              title="点击切换验证码"
              @click="getVerifyCode"
              class="verify-code-img"
            />
          </el-form-item>
          <!--          <el-checkbox v-model="checked" class="loginRemember"></el-checkbox><span> 记住我一周</span>-->
          <div>
            <el-button style="width: 45%; margin-right: 15px" @click="showRegistryDialog"
              >注册</el-button
            >
            <el-button
              v-loading.fullscreen.lock="fullscreenLoading"
              type="primary"
              style="width: 45%"
              @click="submitLogin"
              >登录</el-button
            >
          </div>
        </el-form>
        <el-form ref="registerForm" :model="registerForm" status-icon :rules="registerRules" v-if="registerDialogVisible">
          <h3 class="loginTitle">新用户注册</h3>
          <el-form-item label="用户昵称：" :label-width="formLabelWidth" prop="nickname">
            <el-input v-model="registerForm.nickname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="登录用户名：" :label-width="formLabelWidth" prop="username">
            <el-input v-model="registerForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码：" :label-width="formLabelWidth" prop="password">
            <el-input v-model="registerForm.password" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码：" :label-width="formLabelWidth" prop="checkPass">
            <el-input v-model="registerForm.checkPass" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户头像：" :label-width="formLabelWidth">
            <el-upload
              ref="upload"
              action="/ossFileUpload?module=group-chat"
              list-type="picture-card"
              :class="{ disabled: uploadDisabled }"
              :before-upload="beforeAvatarUpload"
              :file-list="fileList"
              :on-progress="onProgress"
              :on-success="imgSuccess"
              :on-error="imgError"
              :on-remove="imgRemove"
            >
              <i class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip">只能上传不超过4MB的图片(可使用默认头像！)</div>
            </el-upload>
          </el-form-item>
          <div slot="footer" class="dialog-footer">
            <el-button style="width: 45%; margin-right: 15px" @click="closeRegisterDialog">直接登录</el-button>
            <el-button type="primary" style="width: 45%" @click="submitRegisterForm('registerForm')"
              >注册</el-button
            >
          </div>
      </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { getRequest } from '@/utils/api.js';
import { postRequest, postKeyValueRequest } from '@/utils/api.js';
import { useUser } from '@/store/useUser';
import { apiBase } from '@/services/index';
import { checkToken } from '@/utils/utils';
export default {
  name: 'Login',
  data() {
    var validateNickname = (_rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入昵称'));
      }
      //检查昵称是否重复
      this.url = '/user/checkNickname?nickname=' + value;
      getRequest(this.url).then(resp => {
        if (resp != 0) {
          callback(new Error('该昵称已被注册'));
        } else {
          callback();
        }
      });
    };
    var validateUsername = (_rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      }
      //检查用户名是否重复
      this.url = '/user/checkUsername?username=' + value;
      getRequest(this.url).then(resp => {
        if (resp != 0) {
          callback(new Error('该用户名已被注册'));
        } else {
          callback();
        }
      });
    };
    var validatePass = (_rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (_rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
      },
      verifyCode: apiBase + '/verifyCode',
      checked: true,
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
      fullscreenLoading: false,
      //注册表单相关
      registerDialogVisible: false,
      formLabelWidth: '120px',
      registerForm: {
        nickname: '',
        username: '',
        password: '',
        checkPass: '',
        userProfile: 'default_head.jpg',
      },
      registerRules: {
        nickname: [{ validator: validateNickname, trigger: 'blur' }],
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
      },
      uploadDisabled: false,
      //上传的文件信息列表
      fileList: [],
    };
  },
  methods: {
    submitLogin() {
      const userStore = useUser();
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.fullscreenLoading = true;
          this.url = '/signin';
          postKeyValueRequest(this.url, this.loginForm).then(resp => {
            setTimeout(() => {
              this.fullscreenLoading = false;
            }, 1000);
            if (resp.obj) {
              console.log('Login response:', resp);
              let user = resp.obj;
              userStore.setUserInfo(user);
              window.sessionStorage.setItem('token', resp.token);
              window.sessionStorage.setItem('user', JSON.stringify(user));
              this.$message.success('登录成功');
              let path = this.$route.query.redirect;
              this.$router.replace(path == '/' || path == undefined ? '/home' : path);
            } else {
              this.getVerifyCode();
            }
          });
        } else {
          this.$message.error('用户名,密码和验证码都不能为空！');
          return false;
        }
      });
    },

    gotoAdminLogin() {
      this.$router.replace('/adminlogin');
    },
    showRegistryDialog() {
      this.registerDialogVisible = true;  // 确保这个值被正确设置为 true
    },
    /**
     *       图片上传的方法
     */
    //上传前
    beforeAvatarUpload(file) {
      let isLt4M = file.size / 1024 / 1024 < 4;

      if (!isLt4M) {
        this.$message.error('上传头像图片大小不能超过 4MB!');
      }
      return isLt4M;
    },

    closeRegisterDialog() {
      this.registerDialogVisible = false;
      this.$refs.registerForm.resetFields();
      this.fileList = [];
    },
    submitRegisterForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.url = '/user/register';
          postRequest(this.url, this.registerForm).then(resp => {
            if (resp) {
              this.$message.success('注册成功，请登录');
              this.registerDialogVisible = false;
              this.$refs.registerForm.resetFields();
              this.fileList = [];
            }
          });
        } else {
          this.$message.error('请正确填写信息！');
          return false;
        }
      });
    },
    getVerifyCode() {
      this.verifyCode = apiBase + '/verifyCode?time=' + new Date().getTime();
      // getRequest('/verifyCode?time=' + new Date().getTime()).then(resp => {
      //   if (resp) {
      //     this.getCodeEnable = true;
      //     let i = 30;
      //     let id = setInterval(() => {
      //       this.getCodeBtnText = i-- + 's内不能发送';
      //     }, 1000);
      //     setTimeout(() => {
      //       clearInterval(id);
      //       this.getCodeEnable = false;
      //       this.getCodeBtnText = '获取邮箱验证码';
      //     }, 30000);
      //   }
      // });
    },
    // 上传中
    onProgress(event, file, fileList){
      this.uploadDisabled = true;
    },
    // 图片上传成功
    imgSuccess(response, file, fileList) {
      this.uploadDisabled = true;
      this.registerForm.userProfile = response; // 将返回的路径给表单的头像属性
      console.log('图片url为:' + this.registerForm.userProfile);
    },
    // 图片上传失败
    imgError(err, file, fileList) {
      this.$message.error('上传失败');
      this.uploadDisabled = false;
    },
    //移除图片
    imgRemove(file,fileList){
      this.uploadDisabled = false;
    },
  },
};
</script>

<style>
.login-page {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #4b4e60 0%,
    #3d4050 25%,
    #2f3240 50%,
    #3d4050 75%,
    #4b4e60 100%
  );
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background-logo {
  position: relative;
  top: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.background-logo-image {
  width: 180px;
  height: auto;
  opacity: 0.9;
}

.loginContainer {
  width: 450px;
  margin: 20px auto 50px;
  border-radius: 15px;
  border: 1px solid #eaeaea;
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  background: #fff;
  background-clip: padding-box;
  padding: 35px 45px;
}

.logo-container {
  display: none;
}

.loginTitle {
  margin: 10px auto 30px auto;
  text-align: center;
  color: #505458;
  font-size: 24px;
}

.el-form-item {
  margin-bottom: 25px;
}

.el-input {
  height: 40px;
}

.el-button {
  height: 40px;
  font-size: 16px;
}

.loginRemember {
  margin: 5px auto 35px 80px;
}

.disabled .el-upload--picture-card {
  display: none;
}

.verify-code-img {
  height: 38px;
  margin-left: 15px;
  vertical-align: middle;
}
</style>
