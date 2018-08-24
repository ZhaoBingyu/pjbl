<template>
  <div class="login container-fluid">
    <div class="login-box">
      <div class="row">
        <div class="title-box col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
          <div class="title">票据融资登陆系统</div>
        </div>
      </div>
      <div class="row">
        <div class="form-box col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
          <form class="login-form form-horizontal">
            <div class="form-group phone">
              <label class="col-sm-3 col-xs-5 control-label" for="phoneNumber">手机号：</label>
              <div class="input-group col-sm-9 col-xs-7">
                <input v-on:input="phoneValidate" v-model="phoneNumber"
                       type="text" class="form-control" id="phoneNumber" placeholder="请输入手机号">
              </div>
            </div>
            <div class="form-group code">
              <label class="col-sm-3  control-label" for="codeNumber">短信验证码：</label>
              <div class="input-group col-sm-9">
                <input v-model="codeNumber"
                       type="text" class="form-control" id="codeNumber">
                <div class="getcode-btn">
                  <button v-bind:class="{ active: phoneFlag }" @click="getVerifiCode" v-show="show"
                          class="btn btn-primary">{{getCodeText}}
                  </button>
                  <button v-bind:class="{ active: phoneFlag }" @click="getVerifiCode" v-show="!show"
                          class="btn btn-primary ">{{count}} s
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div class="validate-text" v-text="validateText"></div>
          <div class="btnBox row">
            <div class="col-md-3 col-md-offset-3 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1">
              <button @click="login"
                      type="button" class="btn btn-primary btn-lg btn-block confirm-btn ">登陆
              </button>
            </div>
            <div class="col-md-3  col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1">
              <button @click="goReset"
                      type="button" class="btn btn-warning btn-lg btn-block   reset-btn ">重置
              </button>
            </div>
          </div>

        </div>
      </div>


    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import getVerifiCode from '@/components/getVerifiCode/getVerifiCode'

  const ERR_OK = 0

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
        getCodeText: '获取验证码'
      }
    },
    computed: {
      validateFlag: function () {
        return this.phoneFlag && this.codeFlag
      }
    },
    components: {
      // getVerifiCode
    },
    methods: {
      // 手机号码校验
      phoneValidate: function () {
        this.validateText = this.GLOBAL.validate.phoneNumber(this.phoneNumber)
        if (!this.validateText) {
          this.phoneFlag = true
          return true
        }
      },
      // 短信验证码校验
      codeValidate: function () {
        this.validateText = this.GLOBAL.validate.codeNumber(this.codeNumber)
        if (!this.validateText) {
          this.codeFlag = true
        }
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

        this.countDownTimer(60)
        const sendUrl = "http://10.6.208.235:51001/BillFactoring/YQLBillFactoring001"
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
        // this.$http.post('/api/seller').then((response) => {
        //   response = response.body
        //   if (response.errno === ERR_OK) {
        //     this.seller = Object.assign({}, this.seller, response.data)
        //   }
        // })
      }
      ,
      // 进入首页
      goHome: function () {
        if (this.phoneValidate()) {
          this.codeValidate()
        }
        if (this.validateFlag) {
          this.GLOBAL.userID = this.phoneNumber
          this.$router.push('/trial')
        }
      }
      ,
      //登录
      login: function () {
        const sendUrl = window.pjbl.api.BillFactoring + "/YQLBillFactoring002"
        const sendBody = {
          'phone': this.phoneNumber,
          'verfyCode': this.codeNumber
        }
        this.$http.post(sendUrl, sendBody)
          .then(
            (response) => {
              const result = response.body
              console.log(result)
              if (result.code === "2000") {
                window.sessionStorage.setItem('phone', this.phoneNumber)
                this.goHome()
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
  .login {
    width: 100%;
    height: 88%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-image: url("login_bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    .login-box {
      .title-box {
        margin-top: 4%;
        margin-bottom: 4%;
        .title {
          text-align: center;
          font-size: 36px;
          font-weight: bold;
          text-shadow: 5px 5px 5px #FF0000;
          color: #f7ecb5;
        }
      }
      .form-box {
        padding: 40px;
        border: 1px solid silver;
        background: rgba(255, 255, 255, 0.3);
        .phone {
          .input-group {
            .form-control {
              width: 75%;
            }
          }
        }
        .code {
          .input-group {
            .form-control {
              width: 40%;
            }
            .getcode-btn {
              position: relative;
              z-index: 2;
              float: right;
              width: 55%;
              margin-bottom: 0;
            }
          }
        }
        .validate-text {
          font-size: 14px;
        }
        .btnBox {
          button {
            font-size: 14px;
          }
        }
      }

    }
  }

  /*.title {*/
  /*text-align: right;*/
  /*padding-right: 40px;*/
  /*margin-bottom: 20px;*/
  /*color: #f8f8f8;*/
  /*font-weight: bold;*/
  /*text-shadow: 5px 5px 5px #FF0000;*/
  /*}*/
  /*.login-box {*/
  /*!*width: 35%;*!*/
  /*margin-top: 10%;*/
  /*margin-left: 55%;*/
  /*label {*/
  /*color: #000;*/
  /*}*/
  /*button {*/
  /*!*margin-left: 70px;*!*/
  /*padding-top: 0;*/
  /*vertical-align: middle;*/
  /*height: 30px;*/
  /*line-height: 30px;*/
  /*width: 70px;*/
  /*font-size: 14px;*/
  /*}*/
  /*}*/
  /*label {*/
  /*text-align: right;*/
  /*padding-right: 0;*/
  /*}*/
  /*.input-group-addon {*/
  /*cursor: pointer;*/
  /*}*/
  /*.validate-text {*/
  /*text-align: right;*/
  /*color: orangered;*/
  /*}*/
  /*.verifi-code {*/
  /*span {*/
  /*cursor: not-allowed;*/
  /*color: #f8f8f8;*/
  /*background: rgb(235, 123, 117);*/
  /*}*/
  /*.active {*/
  /*cursor: pointer;*/
  /*background: rgb(235, 123, 117);*/
  /*}*/
  /*}*/
  /*}*/

  /*@media screen and(max-width: 910px) {*/
  /*.login {*/
  /*width: 100%;*/
  /*height: 540px;*/
  /*margin: 0;*/
  /*padding: 0;*/
  /*overflow: hidden;*/
  /*background-image: url("login_bg.png");*/
  /*background-size: auto 100%;*/
  /*background-repeat: no-repeat;*/
  /*}*/
  /*}*/

  /*@media screen and(max-width: 760px) {*/
  /*.login {*/
  /*width: 100%;*/
  /*height: 540px;*/
  /*margin: 0;*/
  /*padding: 0;*/
  /*overflow: hidden;*/
  /*background-image: url("login_bg.png");*/
  /*background-size: auto 100%;*/
  /*background-repeat: no-repeat;*/
  /*}*/
  /*}*/

</style>
