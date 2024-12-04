<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <el-container>
    <!--    <el-header >-->
    <!--      <el-button @click="gotoAdminLogin" icon="el-icon-d-arrow-right" style="float: right;border: none" >管理端登录</el-button>-->
    <!--    </el-header>-->
    <el-main>
      <div class="loginContainer">
        <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">
          <h3 class="loginTitle">大学生学业信息智能问答系统</h3>
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
              @click="getMailVerifyCode"
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
      </div>
    </el-main>
    <el-dialog
      v-model:visible="registerDialogVisible"
      title="新用户注册"
      :before-close="closeRegisterDialog"
      width="30%"
    >
      <el-form ref="registerForm" :model="registerForm" status-icon :rules="registerRules">
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" style="width: 100%" @click="submitRegisterForm('registerForm')"
          >注册</el-button
        >
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import { getRequest } from '@/utils/api.js';
export default {
  name: 'Login',
  data() {
    var validateNickname = (_rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入昵称'));
      }
      //检查昵称是否重复
      this.getRequest('user/checkNickname?nickname=' + value).then(resp => {
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
      this.getRequest('/user/checkUsername?username=' + value).then(resp => {
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
      verifyCode: '/verifyCode',
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
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.fullscreenLoading = true;
          this.postKeyValueRequest('/doLogin', this.loginForm).then(resp => {
            setTimeout(() => {
              this.fullscreenLoading = false;
            }, 1000);
            if (resp) {
              //保存当前用户到vuex
              this.$store.state.currentUser = resp.obj;
              //保存登录用户到sessionStorage中
              window.sessionStorage.setItem('user', JSON.stringify(resp.obj));
              let path = this.$route.query.redirect;
              this.$router.replace(path == '/' || path == undefined ? '/chatroom' : path);
            } else {
              this.changeverifyCode();
            }
          });
        } else {
          this.$message.error('用户名,密码和验证码都不能为空！');
          return false;
        }
      });
    },
    // changeverifyCode() {
    //   this.verifyCode = '/verifyCode?time=' + new Date();
    // },
    gotoAdminLogin() {
      this.$router.replace('/adminlogin');
    },
    showRegistryDialog() {
      this.registerDialogVisible = true;
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

    closeRegisterDialog(done) {
      this.registerForm = {
        //清空表单
        nickname: '',
        username: '',
        password: '',
        checkPass: '',
        userProfile: '',
      };
      //this.$refs.upload.clearFiles();//清除上传组件的图片
      done(); //关闭对话框
    },
    //提交注册操作
    submitRegisterForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.postRequest('/user/register', this.registerForm).then(resp => {
            if (resp) {
              this.registerDialogVisible = false;
              location.reload(); //刷新页面，清空注册界面的上传组件中的图片
            }
          });
        } else {
          this.$message.error('请正确填写信息！');
          console.log('error submit!!');
          return false;
        }
      });
    },
    getMailVerifyCode() {
      getRequest('/verifyCode').then(resp => {
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

<style>
.disabled .el-upload--picture-card {
  display: none;
}
.loginContainer {
  width: 350px;
  margin: 100px auto;
  border-radius: 15px;
  border: 1px solid #eaeaea;
  /*添加阴影 h-shadow(水平阴影位置)，v-shadow(垂直阴影位置)，blur(阴影大小)，color(颜色)*/
  box-shadow: 10px 10px 35px #cac6c6;
  background: #fff;
  /*background-clip——规定背景的绘制区域*/
  /*border-box：背景被裁剪到边框盒*/
  /*padding-box：背景被裁剪到内边距框*/
  /*content-box：背景被裁剪到内容框*/
  background-clip: padding-box;
  padding: 25px 35px 25px 35px;
}
.loginTitle {
  margin: 10px auto 30px auto;
  text-align: center;
  color: #505458;
}
.loginRemember {
  margin: 5px auto 35px 80px;
}
/*.el-form-item__content{*/
/* display: flex;*/
/*  align-items: center*/
/*}*/
</style>
