<template>
  <!--<div class="login container-fluid" :style="backgroundImgUrl">-->
  <div class="login">
  <div class="container-fluid">
    <div class="login-box">
      <div class="row">
        <div class="title">票据融资登陆系统</div>
        <div class="login-form-box col-md-4 col-sm-6 col-md-push-4 col-sm-push-3">
          <form class="login-form form-horizontal">
            <div class="form-group phone">
              <label class="col-xs-5 control-label" for="phoneNumber">手机号：</label>
              <div class="input-group col-xs-7">
                <input v-on:change="phoneValidate" v-model="phoneNumber"
                       type="text" class="form-control" id="phoneNumber" placeholder="请输入手机号">
              </div>
            </div>
            <div class="form-group code">
              <label class="col-xs-5 control-label" for="codeNumber">短信验证码：</label>
              <div class="input-group">
                <input v-model="codeNumber" v-on:blur="codeValidate"
                       type="text" class="form-control" id="codeNumber" placeholder="">
                <div class="input-group-addon btn btn-primary"
                     v-bind:class="{ active: phoneFlag }" @click="getVerifiCode" v-show="show">{{getCodeText}}
                </div>
                <div class="input-group-addon btn btn-primary" v-bind:class="{ active: phoneFlag }" v-show="!show">
                  {{count}} s
                </div>
              </div>
            </div>
          </form>
          <div class="validate-text col-xs-12" v-text="validateText"></div>
          <div class="btnBox">
            <div class="row">
              <button @click="login"
                      type="button" class="btn btn-primary  col-xs-4 col-xs-offset-2  ">登陆
              </button>
              <button @click="goReset"
                      type="button" class="btn btn-warning    col-xs-4  col-xs-offset-2  ">重置
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'login',
    data() {
      return {
        show: true,
        count: '',
        timer: null,
        phoneNumber: '',
        codeNumber: '',
        validateText: '',
        phoneFlag: false,
        codeFlag: false,
        getCodeText: '获取验证码',
        backgroundImgUrl: {
          // backgroundImage: 'url(' + require('../common/img/login_bg.png') + ')'
        }
      }
    },
    methods: {
      // 手机号码校验
      phoneValidate: function () {
        if (window.pjbl.check.isNull(this.phoneNumber)) {
          this.validateText = '请输入手机号码'
          return
        }
        if (!window.pjbl.check.mobile(this.phoneNumber)) {
          this.validateText = '请输入正确的手机号码'
          return
        }
        this.phoneFlag = true
        this.validateText = ''
        return true

      },
      // 短信验证码校验
      codeValidate: function () {
        if (window.pjbl.check.isNull(this.codeNumber)) {
          this.validateText = '请输入短信验证码'
          return
        }
        this.codeFlag = true
        this.validateText = ''
        return true
      },
      //  倒计时
      countDownTimer: function (seconds) {
        const TIME_COUNT = seconds
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
        this.getCodeText = '重新获取验证码'
      },
      // 获取验证码
      getVerifiCode: function () {
        if (!this.phoneValidate()) {
          return
        }
        this.countDownTimer(60)
        const sendUrl = window.pjbl.api.BillFactoring + "/YQLBillFactoring001"
        const sendBody = {
          'phone': this.phoneNumber
        }
        this.$http.post(sendUrl, sendBody)
          .then(
            (response) => {
              const result = response.body
              if (result.code === "2000") {
              } else {
                this.validateText = result.message
              }
            },
            (error) => {
              console.log(error)
            }
          )
      }
      ,
      //登录
      login: function () {
        if (!this.phoneValidate()) {
          return
        }
        if (!this.codeValidate()) {
          return
        }
        const sendUrl = window.pjbl.api.BillFactoring + "/YQLBillFactoring002"
        const sendBody = {
          'phone': this.phoneNumber,
          'verfyCode': this.codeNumber
        }
        this.$http.post(sendUrl, sendBody)
          .then(
            (response) => {
              const result = response.body
              if (result.code === "2000") {
                window.sessionStorage.setItem('phone', this.phoneNumber)
                this.$router.push('/trial')
              } else {
                this.validateText = result.message
              }
            },
            (error) => {
              console.log(error)
            }
          )
      }
      ,
      // 重置
      goReset: function () {
        Object.assign(this.$data, this.$options.data())
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  /*@media (min-width: 768px) {*/
    /*.login {*/
      /*width: 60%;*/
      /*height: 100%;*/
      /*margin: 0;*/
      /*padding: 0;*/
      /*background: rgba(0, 0, 0, 0.3);*/
    /*}*/

  /*}*/

  /*@media (min-width: 992px) {*/
    /*.login {*/
      /*width: 55%;*/
      /*.login-box {*/
        /*.title {*/
          /*margin-top: 170px;*/
        /*}*/
        /*.login-form-box {*/
          /*.login-form {*/
            /*label {*/
            /*}*/
          /*}*/
          /*.validate-text {*/
          /*}*/
        /*}*/
        /*.btnBox {*/
        /*}*/
      /*}*/
    /*}*/

  /*}*/

  /*@media (min-width: 1200px) {*/
    /*.login {*/
      /*width: 45%;*/
      /*.login-box {*/
        /*.title {*/
          /*margin-top: 170px;*/
        /*}*/
        /*.login-form-box {*/
          /*.login-form {*/
            /*label {*/
            /*}*/
          /*}*/
          /*.validate-text {*/
          /*}*/
        /*}*/
        /*.btnBox {*/
        /*}*/
      /*}*/
    /*}*/

  /*}*/




</style>
