<template>
  <div class="login container-fluid">
    <form class="form-horizontal">
      <div class="form-group ">
        <label class="control-label col-sm-4" for="phoneNumber">手机号：</label>
        <div class="col-sm-8">
          <input v-on:blur="phoneValidate" v-model="phoneNumber"
                 type="text" class="form-control" id="phoneNumber" placeholder="请输入手机号">
        </div>
      </div>
      <div class="form-group ">
        <label class="control-label col-sm-4" for="codeNumber">短信验证码：</label>
        <div class="col-sm-8">
          <div class="input-group verifi-code">
            <input v-model="codeNumber"
                   type="text" class="form-control" id="codeNumber">
            <span v-bind:class="{ active: phoneFlag }" @click="getVerifiCode"
                  class="input-group-addon" v-show="show">获取验证码</span>
            <span v-bind:class="{ active: phoneFlag }" @click="getVerifiCode"
                  class="input-group-addon" v-show="!show">{{count}} s</span>
          </div>
        </div>
      </div>
      <div class="validate-text" v-text="validateText"></div>
      <div class="btnBox row">
        <div class="col-md-6 col-sm-6 col-xs-6">
          <button @click="login"
                  type="button" class="btn btn-primary btn-lg btn-block confirm-btn ">登陆
          </button>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6">
          <button @click="goReset"
                  type="button" class="btn btn-warning btn-lg btn-block   reset-btn ">重置
          </button>
        </div>
      </div>
    </form>

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
        validateText: null,
        phoneFlag: false,
        codeFlag: false
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
        if (!this.validateText ) {
          this.phoneFlag = true
          return true
        }
      },
      // 短信验证码校验
      codeValidate: function () {
        this.validateText = this.GLOBAL.validate.codeNumber(this.codeNumber)
        if (!this.validateText ) {
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

      },
      // 获取验证码
      getVerifiCode: function () {
        if (this.phoneFlag) {
          this.countDownTimer(60)
          const sendUrl = ""
          const sendBody = {}
          this.$http.post(sendUrl, sendBody, {emulateJSON: true})
            .then(
              (response) => {
                console.log(response)
                this.goHome()
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
      },
      // 进入首页
      goHome: function () {
        if (this.phoneValidate()) {
          this.codeValidate()
        }
        if (this.validateFlag) {
          this.GLOBAL.userID = this.phoneNumber
          this.$router.push('/trial')
        }
      },
      //登录
      login: function () {
        // const sendUrl = "/api/login"
        // const sendBody = {}
        // this.$http.post(sendUrl, sendBody, {emulateJSON: true})
        //   .then(
        //     (response) => {
        //       response = response.body
        //       console.log(response)
        //       this.goHome()
        //     },
        //     (error) => {
        //       console.log(error)
        //     }
        //   )
        this.goHome()
      },
      // 重置
      goReset: function () {
        this.phoneNumber = ''
        this.codeNumber = ''
        this.validateText = ''
        this.phoneFlag = ''
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .login {
    width: 100%;
    padding-top: 100px;
    border-radius: 10px;
    form {
      padding: 10px;
    }
    label {
      text-align: right;
      padding-right: 0;
    }
    @media screen and (min-width: 960px) {
      width: 50%;
      margin: auto;
      form {
        padding: 80px;
        border: 1px solid silver;
        border-radius: 18px;
      }
    }

  }

  .input-group-addon {
    cursor: pointer;
  }

  .validate-text {
    text-align: right;
    color: orangered;
  }

  .verifi-code {
    span {
      cursor: not-allowed;
    }
    .active {
      cursor: pointer;
      background: dodgerblue;
    }
  }
</style>
