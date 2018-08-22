<template>
  <div class="trial container-fluid">
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#">贴现利率试算</a></li>
      <!--<li role="presentation"><a href="#">Profile</a></li>-->
    </ul>
    <form class="form-horizontal">
      <div class="form-group has-error">
        <label for="phoneNumber" class="col-sm-2 control-label"><span>*</span>手机号：</label>
        <div class="col-sm-10">
          <input v-model="phoneNumber" v-on:blur="phoneValidate"
          type="text" class="form-control" id="phoneNumber" placeholder="请输入手机号">
        </div>
        <div class="col-sm-10">
          手机号不能为空
        </div>
      </div>
      <div class="form-group">
        <label for="honnerName" class="col-sm-2 control-label"><span>*</span>承兑商户名称：</label>
        <div class="col-sm-10">
          <input v-model="honnerName" v-on:blur="honnerNameValidate"
          type="text" class="form-control" id="honnerName" placeholder="请输入承兑商户名称">
        </div>
        <div class="col-sm-10">
          手机号不能为空
        </div>
      </div>
      <div class="form-group">
        <label for="ticketAmt" class="col-sm-2 control-label"><span>*</span>票面金额：</label>
        <div class="col-sm-10">
          <input v-model="ticketAmt" v-on:blur="ticketAmtValidate"
           type="text" class="form-control" id="ticketAmt" placeholder="请输入票面金额">
        </div>
        <div class="col-sm-10">
          手机号不能为空
        </div>
      </div>
      <div class="form-group">
        <label for="expireDate" class="col-sm-2 control-label"><span>*</span>票据到期日：</label>
        <div class="col-sm-10">
          <input v-model="expireDate" v-on:blur="expireDateValidate"
          type="date" class="form-control" id="expireDate" placeholder="请输入票据到期日">
        </div>
        <div class="col-sm-10">
          手机号不能为空
        </div>
      </div>
      <div class="form-group ">
        <label for="transferDate" class="col-sm-2 control-label"><span>*</span>背书转让日期：</label>
        <div class="col-sm-10">
          <input v-model="transferDate"  v-on:blur="transferDateValidate"
          type="date" class="form-control" id="transferDate" placeholder="请输入背书转让日期">
        </div>
        <div class="col-sm-10">
          手机号不能为空
        </div>
      </div>
      <div class="form-group">
        <label for="ticketNumber" class="col-sm-2 control-label"><span>*</span>票据编号：</label>
        <div class="col-sm-10">
          <input v-model="ticketNumber" v-on:blur="ticketNumberValidate"
          type="text" class="form-control" id="ticketNumber" placeholder="请输入票据编号">
        </div>
        <div class="col-sm-10">
          手机号不能为空
        </div>
      </div>
    </form>
    <div class="trial-btn-wrapper clearfix row">
      <div class="col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-3 col-xs-5 col-xs-offset-1">
        <button type="button" class="btn btn-primary  confirm-btn col-md-10 col-sm-10 col-xs-10" @click="goNext">下一步
        </button>
      </div>
      <div class="col-md-2 col-sm-4  col-xs-5">
        <button type="button" class="btn btn-warning  reset-btn col-md-10 col-sm-10 col-xs-10" @click="goReset">重置
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'trial',
    data() {
      return {
        phoneNumber: '',
        honnerName: '',
        ticketAmt: '',
        expireDate: '',
        transferDate: '',
        ticketNumber: ''
      }
    },
    methods: {
      //手机号码校验
      phoneValidate: function () {
        this.phoneValidateText = this.GLOBAL.validate.phoneNumber(this.phoneNumber)
        if (!this.phoneValidate) {
          this.phoneFlag = true
          return true
        }
      },
      goNext: function () {
        const trialData = {
          phoneNumber: this.phoneNumber,
          honnerName: this.honnerName,
          ticketAmt: this.ticketAmt,
          expireDate: this.expireDate,
          transferDate: this.transferDate,
          ticketNumber: this.ticketNumber
        }
        this.GLOBAL.trialData = trialData
        this.bus.$emit('sendTrialData', trialData)

        this.$router.push('/sign')

      },
      // 重置
      goReset: function () {
        this.phoneNumber = ''
        this.codeNumber = ''
      }

    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .trial {
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
