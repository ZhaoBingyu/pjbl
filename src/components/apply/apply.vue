<template>
  <div class="apply container-fluid">
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#">申请</a></li>
      <!--<li role="presentation"><a href="#">Profile</a></li>-->
    </ul>
    <div class="info-box">
      <ul class="list-group" v-if="trialData">
        <li class="list-group-item">
          <span>承兑商户名称：</span>
          <span>{{trialData.honnerName}}</span>
        </li>
        <li class="list-group-item">
          <span>票面金额：</span>
          <span>{{trialData.ticketAmt}}</span>
        </li>
        <li class="list-group-item">
          <span>票据到期日：</span>
          <span>{{trialData.expireDate}}</span>
        </li>
        <li class="list-group-item">
          <span>背书转让日期：</span>
          <span>{{trialData.transferDate}}</span>
        </li>
        <li class="list-group-item">
          <span>票据编号：</span>
          <span>{{trialData.ticketNumber}}</span>
        </li>
        <li class="list-group-item">
          <span>客户账号：</span>
          <span>{{trialResultData.custNo}}</span>
        </li>
        <li class="list-group-item">
          <span>保理比例：</span>
          <span>{{trialResultData.ladRat}}</span>
        </li>
        <li class="list-group-item">
          <span>保理金额：</span>
          <span>{{trialResultData.feeAmt}}</span>
        </li>
        <li class="list-group-item">
          <span>可用金额：</span>
          <span>{{trialResultData.availableAmt}}</span>
        </li>
        <li class="list-group-item">
          <span>账户名称：</span>
          <span>{{trialResultData.cardName}}</span>
        </li>
        <li class="list-group-item">
          <span>银行账号：</span>
          <span>{{trialResultData.cardNo}}</span>
        </li>
        <li class="list-group-item">
          <span>开户银行：</span>
          <span>{{trialResultData.bankName}}</span>
        </li>
        <li class="list-group-item">
          <span>开户行联行行号：</span>
          <span>{{trialResultData.bankNo}}</span>
        </li>
      </ul>
    </div>

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
        trialData: null,
        trialResultData: null
      }
    },
    mounted() {
      this.trialData = JSON.parse(window.sessionStorage.getItem('trialData'))
      this.trialResultData = JSON.parse(window.sessionStorage.getItem('trialResultData'))
      console.log(this.trialData)
      console.log(this.trialResultData)
    },
    methods: {

      //上一步
      goPre: function () {
        this.$router.push('/sign')
      }
      ,
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
    height: 100%;
    .list-group-item {
      border: none;
    }
  }
</style>
