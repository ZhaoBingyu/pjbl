<template>
  <div class="apply container-fluid">
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#">申请</a></li>
      <!--<li role="presentation"><a href="#">Profile</a></li>-->
    </ul>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="ticketNumber" class="col-sm-2 control-label">请输入票据号码：</label>
        <div class="col-sm-10">
          <input v-model="ticketNumber" v-on:blur=""
          type="text" class="form-control" id="ticketNumber" placeholder="请输入票据号码">
        </div>
      </div>
    </form>
    <div class="sign-btn-wrapper clearfix row">
      <div class="col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-3 col-xs-5 col-xs-offset-1">
        <button type="button" class="btn btn-primary  confirm-btn col-md-10 col-sm-10 col-xs-10" @click="goPre">上一步
        </button>
      </div>
      <div class="col-md-2 col-sm-4  col-xs-5">
        <button type="button" class="btn btn-danger  confirm-btn col-md-10 col-sm-10 col-xs-10" @click="goSubmit">完成
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'apply',
    data() {
      return {
        ticketNumber: ''
      }
    },

    methods: {

      //上一步
      goPre: function () {
        this.$router.push('/sign')
      },
      //完成
      goSubmit: function () {
        const sendUrl = "/api/login"
        const sendBody = this.GLOBAL.trialData
        sendBody.ticketNumber = this.ticketNumber
        console.log(sendBody)
        this.$http.post(sendUrl, sendBody, {emulateJSON: true})
          .then(
            (response) => {
              response = response.body
              console.log(response)
            },
            (error) => {
              console.log(error)
            }
          )
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .apply {
    width: 100%;
    @media screen and (min-width: 960px) {
      width: 80%;
    }
    margin-top: 30px;
    form {
      margin-top: 20px;
    }
  }
</style>
