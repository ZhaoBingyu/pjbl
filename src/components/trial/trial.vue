<template>
  <div class="trial container-fluid">
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#">贴现利率试算</a></li>
      <!--<li role="presentation"><a href="#">Profile</a></li>-->
    </ul>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="phoneNumber" class="col-sm-2 control-label"><span>*</span>手机号：</label>
        <div class="col-sm-10">
          <input v-model="phoneNumber" v-on:blur="phoneValidate"
                 type="text" class="form-control" id="phoneNumber" placeholder="请输入手机号">
        </div>
        <div class="validate-text col-sm-offset-2 col-sm-10" v-text="phoneValidateText"></div>
      </div>
      <div class="form-group">
        <label for="honnerName" class="col-sm-2 control-label"><span>*</span>承兑商户名称：</label>
        <div class="col-sm-10">
          <input v-model="honnerName" v-on:blur="honnerNameValidate"
                 type="text" class="form-control" id="honnerName" placeholder="请输入承兑商户名称">
        </div>
        <div class="validate-text col-sm-offset-2 col-sm-10" v-text="honnerNameValidateText"></div>
      </div>
      <div class="form-group">
        <label for="ticketAmt" class="col-sm-2 control-label"><span>*</span>票面金额：</label>
        <div class="col-sm-10">
          <input v-model="ticketAmt" v-on:blur="ticketAmtValidate"
                 type="number" class="form-control" id="ticketAmt" placeholder="请输入票面金额">
        </div>
        <div class="validate-text col-sm-offset-2 col-sm-10" v-text="ticketAmtValidateText"></div>
      </div>
      <div class="form-group">
        <label for="expireDate" class="col-sm-2 control-label"><span>*</span>票据到期日：</label>
        <div class="col-sm-10">
          <input v-model="expireDate" v-on:blur="expireDateValidate" v-if="hasReset"
                 type="text" data-date-format="yyyy-mm-dd" class="form-control datetimepicker"
                 id="expireDate" placeholder="请输入票据到期日">
        </div>
        <div class="validate-text col-sm-offset-2 col-sm-10" v-text="expireDateValidateText"></div>
      </div>
      <div class="form-group">
        <label for="transferDate" class="col-sm-2 control-label"><span>*</span>背书转让日期：</label>
        <div class="col-sm-10">
          <input v-model="transferDate" v-on:blur="transferDateValidate"
                 type="text" data-date-format="yyyy-mm-dd" class="form-control datetimepicker"
                 id="transferDate" placeholder="请输入背书转让日期">

        </div>
        <div class="validate-text col-sm-offset-2 col-sm-10" v-text="transferDateValidateText"></div>
      </div>
      <div class="form-group">
        <label for="ticketNumber" class="col-sm-2 control-label"><span>*</span>票据编号：</label>
        <div class="col-sm-10">
          <input v-model="ticketNumber" v-on:blur="ticketNumberValidate"
                 type="text" class="form-control" id="ticketNumber" placeholder="请输入票据编号">
        </div>
        <div class="validate-text col-sm-offset-2 col-sm-10" v-text="ticketNumberValidateText"></div>
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
    components: {},
    data() {
      return {
        phoneNumber: '',
        honnerName: '',
        ticketAmt: '',
        expireDate: '',
        transferDate: '',
        ticketNumber: '',
        phoneValidateText: '',
        honnerNameValidateText: '',
        ticketAmtValidateText: '',
        expireDateValidateText: '',
        transferDateValidateText: '',
        ticketNumberValidateText: '',
        phoneFlag: false,
        honnerNameFlag: false,
        ticketAmtFlag: false,
        expireDateFlag: false,
        transferDateFlag: false,
        ticketNumberFlag: false,
        validateFlag: false,
        hasReset: true
      }
    },
    mounted() {
      this.dateDefind()
    },

    methods: {
      //  日期空间初始化
      dateDefind() {
        var self = this
        $('.datetimepicker').datetimepicker({
          language: 'zh-CN',
          weekStart: 1,
          todayBtn: 1,
          autoclose: 1,
          todayHighlight: 1,
          startView: 2,
          minView: 2,
          forceParse: 0,
          clearBtn: true
        })
        $('.datetimepicker').datetimepicker().on('changeDate', function () {
          const expireDate = $('#expireDate').val()
          const transferDate = $('#transferDate').val()
          if (expireDate) {
            sessionStorage.setItem('expireDate', expireDate)
          }
          if (transferDate) {
            sessionStorage.setItem('transferDate', transferDate)
          }
        })
      },
      //手机号码校验
      phoneValidate: function () {
        this.phoneValidateText = this.GLOBAL.validate.phoneNumber(this.phoneNumber)
        if (!this.phoneValidateText) {
          this.phoneFlag = true
          return true
        }
      },
      //承兑商户名称校验
      honnerNameValidate: function () {
        this.honnerNameValidateText = this.GLOBAL.validate.isInputNull(this.honnerName)
        if (this.honnerNameValidateText) {
          this.honnerNameFlag = true
          this.honnerNameValidateText = ''
          return true
        } else {
          this.honnerNameValidateText = '承兑商户名称不能为空'
        }
      },
      //票面金额校验
      ticketAmtValidate: function () {
        this.ticketAmtValidateText = this.GLOBAL.validate.isInputNull(this.ticketAmt)
        if (this.ticketAmtValidateText) {
          this.ticketAmtFlag = true
          this.ticketAmtValidateText = ''
          return true
        } else {
          this.ticketAmtValidateText = '票面金额不能为空'
        }
      },
      //票据到期日校验
      expireDateValidate: function () {
        $('.datetimepicker').datetimepicker().on('changeDate', function () {
          const expireDate = $('#expireDate').val()
          if (expireDate) {
            sessionStorage.setItem('expireDate', expireDate)
          }
        })
        this.expireDate = sessionStorage.getItem('expireDate')
        this.expireDateValidateText = this.GLOBAL.validate.isInputNull(this.expireDate)
        if (this.expireDateValidateText) {
          this.expireDateFlag = true
          this.expireDateValidateText = ''
          return true
        } else {
          this.expireDateValidateText = '票据到期日不能为空'
        }
        this.hackReset = false
        this.$nextTick(() => {
          this.hackReset = true
        })
      },
      //背书转让日期校验
      transferDateValidate: function () {
        $('.datetimepicker').datetimepicker().on('changeDate', function () {
          const transferDate = $('#transferDate').val()
          if (transferDate) {
            sessionStorage.setItem('transferDate', transferDate)
          }
        })
        this.transferDate = sessionStorage.getItem('transferDate')
        this.transferDateValidateText = this.GLOBAL.validate.isInputNull(this.transferDate)
        if (this.transferDateValidateText) {
          this.transferDateFlag = true
          this.transferDateValidateText = ''
          return true
        } else {
          this.transferDateValidateText = '背书转让日期不能为空'
        }
      },
      //票据编号校验
      ticketNumberValidate: function () {
        this.ticketNumberValidateText = this.GLOBAL.validate.isInputNull(this.ticketNumber)
        if (this.ticketNumberValidateText) {
          this.ticketNumberFlag = true
          this.ticketNumberValidateText = ''
          return true
        } else {
          this.ticketNumberValidateText = '票据编号不能为空'
        }
      },
      goNext: function () {
        this.validateFlag = this.phoneFlag && this.honnerNameFlag && this.ticketAmtFlag && this.expireDateFlag && this.transferDateFlag && this.ticketNumberFlag
        if (this.validateFlag) {
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
        } else {
          this.phoneValidate() && this.honnerNameValidate() && this.ticketAmtValidate() && this.expireDateValidate() && this.transferDateValidate() && this.ticketNumberValidate()

        }

      },
      // 重置
      goReset: function () {
        Object.assign(this.$data, this.$options.data())
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

  .validate-text {
    color: orangered;
  }

</style>
