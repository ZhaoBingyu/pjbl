<template>
  <div class="trial container-fluid">
    <div class="trial-wrapper">
      <ul class="nav nav-tabs">
        <li role="presentation" class="" @click="toTrial">
          <a href="javascript:;">贴现利率试算</a>

        </li>

        <li role="presentation" class="active" @click="toTrialQuery">
          <a href="javascript:;">查询</a>

        </li>

        <!--<li role="presentation"><a href="#">Profile</a></li>-->
      </ul>
      <div class="row">
        <div class="col-md-10 ">
          <form class="form-horizontal">
            <div class="form-group">
              <div class="row">
                <div class="col-sm-6">
                  <label for="honnerName" class="col-sm-4 control-label"><span>*</span>承兑商户名称：</label>
                  <div class="col-sm-8">
                    <input v-model="honnerName" v-on:blur="honnerNameValidate"
                           type="text" class="form-control" id="honnerName" placeholder="请输入承兑商户名称">
                  </div>
                  <div class="validate-text col-sm-offset-4 col-sm-8" v-text="honnerNameValidateText"></div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-sm-6">
                  <label for="ticketAmt" class="col-sm-4 control-label"><span>*</span>票面金额：</label>
                  <div class="col-sm-8">
                    <input v-model="ticketAmt" v-on:blur="ticketAmtValidate"
                           type="number" class="form-control" id="ticketAmt" placeholder="请输入票面金额">
                  </div>
                  <div class="validate-text col-sm-offset-4 col-sm-8" v-text="ticketAmtValidateText"></div>
                </div>

              </div>
            </div>
            <div class="form-group">
              <div class="row">

                <div class="col-sm-6">
                  <label for="expireDate" class="col-sm-4 control-label"><span>*</span>票据到期日：</label>
                  <div class="col-sm-8">
                    <!--<input v-model="expireDate" v-on:blur="expireDateValidate" v-if="hasReset"-->
                    <!--type="text" data-date-format="yyyy-mm-dd" class="form-control datetimepicker"-->
                    <!--id="expireDate" placeholder="请输入票据到期日">-->
                    <input v-model="expireDate" v-on:blur="expireDateValidate" v-if="hasReset"
                           type="date" class="form-control "
                           id="expireDate" placeholder="请输入票据到期日">
                  </div>
                  <div class="validate-text col-sm-offset-4 col-sm-8" v-text="expireDateValidateText"></div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-sm-6">
                  <label for="transferDate" class="col-sm-4 control-label"><span>*</span>背书转让日期：</label>
                  <div class="col-sm-8">
                    <!--<input v-model="transferDate" v-on:blur="transferDateValidate"-->
                    <!--type="text" data-date-format="yyyy-mm-dd" class="form-control datetimepicker"-->
                    <!--id="transferDate" placeholder="请输入背书转让日期">-->
                    <input v-model="transferDate" v-on:blur="transferDateValidate"
                           type="date" class="form-control "
                           id="transferDate" placeholder="请输入背书转让日期">

                  </div>
                  <div class="validate-text col-sm-offset-4 col-sm-8" v-text="transferDateValidateText"></div>
                </div>

              </div>
            </div>
            <div class="form-group">
              <div class="row">

                <div class="col-sm-6">
                  <label for="ticketNumber" class="col-sm-4 control-label"><span></span>票据编号：</label>
                  <div class="col-sm-8">
                    <input v-model="ticketNumber"
                           type="text" class="form-control" id="ticketNumber" placeholder="请输入票据编号">
                  </div>
                  <div class="validate-text col-sm-offset-4 col-sm-8" v-text="ticketNumberValidateText"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-2 col-md-pull-3">
          <button type="button" class="btn btn-success btn-block" @click="getTrial">试算</button>
          <div class="trial-result">
            <div class="row">
              保理比例: <span>{{ladRat }}</span>
            </div>
            <div class="row">
              保理金额: <span>{{feeAmt }}</span>
            </div>
            <div class="row">
              可用金额: <span>{{availableAmt }}</span>
            </div>
          </div>

        </div>
      </div>


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


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'trial',
    components: {},
    data() {
      return {
        ladRat: '',
        feeAmt: '',
        availableAmt: '',
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
      // this.dateDefind()
    },

    methods: {
      toTrial: function () {
        this.$router.push('/trial')
      },
      toTrialQuery: function () {
        this.$router.push('/trialQuery')
      },
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
      toTrial: function () {
        this.$router.push('/trial')
      },
      toTrialQuery: function () {
        this.$router.push('/trialQuery')
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
        // $('.datetimepicker').datetimepicker().on('changeDate', function () {
        //   const expireDate = $('#expireDate').val()
        //   if (expireDate) {
        //     sessionStorage.setItem('expireDate', expireDate)
        //   }
        // })
        // this.expireDate = sessionStorage.getItem('expireDate')
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
        // $('.datetimepicker').datetimepicker().on('changeDate', function () {
        //   const transferDate = $('#transferDate').val()
        //   if (transferDate) {
        //     sessionStorage.setItem('transferDate', transferDate)
        //   }
        // })
        // this.transferDate = sessionStorage.getItem('transferDate')
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
        this.validateFlag = this.phoneFlag && this.honnerNameFlag && this.ticketAmtFlag && this.expireDateFlag && this.transferDateFlag
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
      },
      // 试算接口
      getTrial: function () {
        const sendUrl = this.GLOBAL.api.BillFactoring + "/YQLBillFactoring003"
        const sendBody = {
          "acptName": this.honnerName,
          "amt": this.ticketAmt,
          "billNo": this.ticketNumber,
          "dueDate": this.expireDate.replace(/-/g, ''),
          "indorsDate": this.transferDate.replace(/-/g, ''),
          "phone": this.phoneNumber
        }
        window.sessionStorage.setItem('phone', this.phoneNumber)
        this.$http.post(sendUrl, {
          "acptName": "保利地产1",
          "amt": 50000.00,
          "dueDate": "20190808",
          "indorsDate": "20180808",
          "billNo": "9898988787899",
          "phone": "18801176433"
        })
          .then(
            (response) => {
              const result = response.body
              const dataList = result.dataList
              const dataObj = JSON.parse(dataList[0])
              if (result.code === "2000") {
                this.ladRat = dataObj.ladRat
                this.feeAmt = dataObj.feeAmt
                this.availableAmt = dataObj.availableAmt
              } else {
                // this.validateText = result.message
              }
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
  .trial-wrapper {
    width: 70%;
    margin: auto;
    margin-top: 60px;
  }

  .nav {
    margin-bottom: 30px;
  }

  .trial {
    width: 100%;
    height: 88%;
    background-image: url("tiexian-bg.png");
    background-size: 100% auto;
    .trial-result {
      div {
        font-size: 16px;
        /*padding-left: 45px;*/
        height: 28px;
        line-height: 24px;
        margin-top: 10px;
        /*font-weight: bold;*/
        span {
          color: red;
        }
      }
    }

    /*overflow: hidden;*/
    /*.trial-wrapper {*/
    /*width: 60%;*/
    /*margin: auto;*/
    /*padding-top: 40px;*/
    /*form {*/
    /*margin-top: 40px;*/
    /*margin-bottom: 40px;*/
    /*}*/
  }

  /*@media screen and (min-width: 960px) {*/
  /*width: 80%;*/
  /*}*/
  /*margin-top: 30px;*/
  /*form {*/
  /*margin-top: 20px;*/
  /*}*/

  /*}*/
  /*.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {*/
  /*background: none;*/
  /*color: orangered;*/
  /*}*/
  /*.validate-text {*/
  /*color: orangered;*/
  /*}*/

</style>
