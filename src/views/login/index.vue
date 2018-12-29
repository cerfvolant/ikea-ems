<template>
  <div class="login-container">
    <div class="login-form">
      <el-row class="login-wrap">
        <el-col :span="15" class="headline">宜家统一环境管理平台</el-col>
        <el-col :span="9" class="loginForm-bg">
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="" auto-complete="on" label-position="left">
            <h3 class="title">用户登录</h3>
            <el-form-item label="用户名" label-position="top" prop="username">
              <span class="svg-container">
                <svg-icon icon-class="user" />
              </span>
              <!--<el-popover ref="pykbuser" placement="bottom" width="730" trigger="click">-->
                <!--<m-py-keyboard-->
                  <!--v-model="loginForm.username"-->
                  <!--:height="240"-->
                  <!--:candidate-len="8"-->
                  <!--lang="en"-->
                  <!--sync-->
                  <!--@enter="$refs.pykbuser.doClose()"/>-->
              <!--</el-popover>-->
              <el-input v-popover:pykbuser v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="输入用户名" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <span class="svg-container">
                <svg-icon icon-class="password" />
              </span>
              <el-input
                :type="pwdType"
                v-model="loginForm.password"
                name="password"
                auto-complete="on"
                placeholder="输入密码"
                @keyup.enter.native="handleLogin" />
              <span ref="pwdEye" class="show-pwd" @click="showPwd">
                <!--<svg-icon icon-class="eye" />-->
                <i class="el-icon-view"></i>
              </span>
            </el-form-item>
            <el-form-item>
              <el-button :disabled="!loginForm.username || !loginForm.password" :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
                登录
              </el-button>
            </el-form-item>
            <!--div class="tips">
              <span style="margin-right:20px;">username: admin</span>
              <span> password: admin</span>
            </div-->
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import MPyKeyboard from '@/components/Keyboard/py-keyboard'

export default {
  name: 'Login',
  components: { MPyKeyboard },
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ trigger: 'blur', validator: validateUsername }],
        password: [{ trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
        this.$refs.pwdEye.style = 'color: #08B3E9'
      } else {
        this.pwdType = 'password'
        this.$refs.pwdEye.style = ''
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$router.push({ path: '/' })
          this.loading = false
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg:#2d3a4b;
  $light_gray:999999;

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 50%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 5px;
        color: $light_gray;
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-form-item {

      margin: auto 30px 20px 30px;

      // border: 1px solid rgba(255, 255, 255, 0.1);
      // background: rgba(0, 0, 0, 0.1);
      // border-radius: 5px;
      // color: #454545;
      .el-form-item__label {
        color: #666666;
        float: none;
      }

      .el-form-item__content {
        border: 1px solid #666666;
        background: rgb(255, 255, 255);
        color: #454545;
        line-height: 0;
      }
      &:last-of-type {
        .el-form-item__content {
          border: none;
          button {
            background-color: #496cd7;
            &:hover {
              background-color: #4375c6;
            }
          }
        }
      }
    }
  }

</style>

<style rel="stylesheet/scss" lang="scss">
  $bg:#1b1b1b;
  $dark_gray:#999999;
  $light_gray:#666666;
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background:url(../../assets/img/loginBg.png) no-repeat;
    filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
    -moz-background-size:100% 100%;
    background-size:100% 100%;
    background-color: $bg;
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      /*width: 800px;//520px*/
      width: 80%;
      max-width: 100%;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
      .login-wrap {
        width: 90%;
        margin: 0 auto;
        .headline {
          /*font-size: .6rem;*/
          font-size: 42px;
          font-weight: 600;
          text-shadow: 5px 0 2px #000066;
          margin-top: 3rem;
          color: #ffffff;
        }
        .loginForm-bg {
          background-color: rgb(255, 255, 255);
          /*min-height:60vh;*/
          padding: 10px 0 37px;
        }
      }
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
    }
    .title {
      font-size: 14px;
      color: $light_gray;
      margin: 20px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .show-pwd {
      position: absolute;
      right: 13px;
      top: 17px;
      font-size: 15px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
      &:hover {
        color: #08B3E9;
      }
    }
  }
  .el-popover.el-popper {
    background-color: red;
    top: 632px !important;
    .popper__arrow, .popper__arrow::after {
      border-style: none;
    }
  }
</style>
