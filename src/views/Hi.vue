<template>
  <el-container>
    <el-header>
      <el-button icon="el-icon-d-arrow-left" @click="gotoClientLogin" style="border: none"
        >客户端登录</el-button
      >
    </el-header>
    <el-main>
      <div class="loginContainer">
        <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">
          <h3 class="loginTitle">管理端登录</h3>
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
          <el-form-item label="验证码:" prop="mailCode">
            <!--             <el-input type="text"  v-model="loginForm.mailCode" auto-complete="off" placeholder="请输入验证码" style="width: 120px;margin-right: 10px" ></el-input>           -->
            <el-input
              v-model="loginForm.mailCode"
              type="text"
              auto-complete="off"
              placeholder="无需填入验证码"
              style="width: 120px; margin-right: 10px"
            ></el-input>
            <!-- <el-button :disabled="getCodeEnable" @click="getMailVerifyCode" size="mini">{{
              getCodeBtnText
            }}</el-button> -->
          </el-form-item>
          <el-checkbox v-model="checked" class="loginRemember"></el-checkbox
          ><span> 记住我一周</span>
          <el-button
            type="primary"
            style="width: 100%"
            v-loading.fullscreen.lock="fullscreenLoading"
            @click="submitLogin"
            >登录</el-button
          >
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { postKeyValueRequest } from '@/utils/api';
import { getRequest } from '@/utils/api';
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
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        //开发环境 mailCode:[{required:true,message: '请输入验证码',trigger:'blur'}]
        mailCode: [{ required: false, message: '请输入验证码', trigger: 'blur' }],
      },
      fullscreenLoading: false,
      getCodeEnable: false,
      getCodeBtnText: '获取邮箱验证码',
    };
  },
  methods: {
    submitLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.fullscreenLoading = true;
          // console.log(this.loginForm);
          postKeyValueRequest('/admin/doLogin', this.loginForm).then(resp => {
            setTimeout(() => {
              this.fullscreenLoading = false;
            }, 1000);
            if (resp) {
              //alert("登录成功！");
              //保存登录用户到session中
              window.sessionStorage.setItem('admin', JSON.stringify(resp.obj));
              this.$router.replace('/home');
            }
          });
        } else {
          this.$message.error('用户名，密码和验证码不能为空！');
          return false;
        }
      });
    },
    gotoClientLogin() {
      this.$router.replace('/');
    },
    //获取邮箱验证码
    getMailVerifyCode() {
      getRequest('/admin/mailVerifyCode').then(resp => {
        if (resp) {
          this.getCodeEnable = true;
          //30s内不得再次发送
          let i = 30;
          let id = setInterval(() => {
            this.getCodeBtnText = i-- + 's内不能发送';
          }, 1000);
          setTimeout(() => {
            clearInterval(id);
            this.getCodeEnable = false;
            this.getCodeBtnText = '获取邮箱验证码';
          }, 30000);
        }
      });
    },
  },
};
</script>

<style></style>
