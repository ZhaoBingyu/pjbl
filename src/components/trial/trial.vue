<template>
  <div class="trial container-fluid" :style="backgroundImgUrl">
    <!--<div class="trial container-fluid" >-->
    <div class="trial-container">
      <!--导航 start-->
      <myNav></myNav>
      <!--导航 end-->
      <!--试算 start-->
      <div class="trial-wrapper">
        <!--试算表单 start-->
        <div class="row trial-query-wrapper">
          <!--试算信息输入 start-->
          <!--<div class="col-md-6 col-sm-6 col-xs-12">-->
          <div>
            <div class="row" >
              <form id="trialForm">
                <div class="col-md-6 col-sm-6 col-xs-12 input-item">
                  <label for="honnerName" class="col-md-4 col-sm-5 col-xs-12"><span>*</span>承兑企业名称：</label>
                  <input v-model="honnerName" v-on:blur="honnerNameValidate"
                         type="text" class="form-control col-md-8 col-sm-7 col-xs-12 " id="honnerName"
                         placeholder="请输入承兑企业名称">
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 input-item">
                  <label for="ticketAmt" class="col-md-4 col-sm-5 col-xs-4"><span>*</span>票面金额：</label>
                  <input v-model="ticketAmt" v-on:blur="ticketAmtValidate"
                         type="text" class="form-control col-md-8 col-sm-7 col-xs-8" id="ticketAmt"
                         placeholder="请输入票面金额">
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 input-item">
                  <label for="transferDate" class="col-md-4 col-sm-5 col-xs-12"><span>*</span>背书转让日期：</label>
                  <input v-model="transferDate" v-on:blur="transferDateValidate" type="date"
                         class="form-control col-md-8 col-sm-7 col-xs-12 " id="transferDate" placeholder="请输入背书转让日期">
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 input-item">
                  <label for="expireDate" class="col-md-4 col-sm-5 col-xs-12"><span>*</span>票据到期日：</label>
                  <!--<input v-model="expireDate" v-on:blur="expireDateValidate" v-if="hasReset"-->
                  <!--type="text" data-date-format="yyyy-mm-dd" class="form-control datetimepicker"-->
                  <!--id="expireDate" placeholder="请输入票据到期日">-->
                  <input v-model="expireDate" v-on:blur="expireDateValidate" v-if="hasReset"
                         type="date" class="form-control col-md-8 col-sm-7 col-xs-12 "
                         id="expireDate" placeholder="请输入票据到期日">
                </div>

                <!--<div class="col-md-6 col-sm-6 col-xs-12 input-item">-->
                <!--<label for="ticketNumber" class="col-md-4 col-sm-5 col-xs-12"><span></span>票据编号：</label>-->
                <!--<input v-model="ticketNumber" type="text" class="form-control col-md-8 col-sm-7 col-xs-12"-->
                <!--id="ticketNumber"-->
                <!--placeholder="请输入票据编号">-->
                <!--</div>-->
                <!--显示Error Info  start-->
                <div class="col-md-12 col-sm-12 col-xs-12  validate-text">{{validateText}}</div>
                <!--显示Error Info  end-->
              </form>
            </div>
            <hr>
            <!--试算信息输入 end-->

          </div>
          <!--试算结果 start-->
          <div class="row">
            <div class=" trial-result-wrapper">
              <div class="row trial-btn-box">
                <!--<div class="row">-->
                <!--<button type="button" class="btn btn-success col-md-3  col-sm-3  col-xs-12 " @click="getTrial">试算-->
                <!--</button>-->
                <!--</div>-->
                <div class="row trialResult" style="display: none">
                  <div class="col-lg-2 col-lg-offset-2 col-sm-4 col-xs-12  result-item">
                    <button type="button" class="btn btn-info">保理比例: <span>{{ ladRat + '%'}}</span></button>
                    <!--保理比例: <span>{{ ladRat + '%'}}</span>-->
                  </div>
                  <div class="col-lg-2  col-lg-offset-1 col-sm-4 col-xs-12 result-item">
                    <button type="button" class="btn btn-info">保理金额: <span>{{'￥'+feeAmt}}</span></button>
                    <!--保理金额: <span>{{'￥'+feeAmt}}</span>-->
                  </div>
                  <div class="col-lg-2  col-lg-offset-1 col-sm-4 col-xs-12 result-item">
                    <button type="button" class="btn btn-info">可用金额: <span>{{'￥'+availableAmt}}</span></button>
                    <!--可用金额: <span>{{'￥'+availableAmt}}</span>-->
                  </div>
                </div>

              </div>
              <!--显示Error Info  start-->
              <div class="col-md-12 col-sm-12 col-xs-12  validate-text">{{trialResultMsg}}</div>
              <!--显示Error Info  end-->
            </div>

          </div>
          <!--试算结果 end-->
        </div>
        <!--&lt;!&ndash;票据编号 start&ndash;&gt;-->
        <!--<form class="form-horizontal">-->
        <!--<div class="form-group ticket-number">-->
        <!--<label for="ticketNumber" class="col-sm-2 control-label"><span>*</span>票据编号:</label>-->
        <!--<div class="col-sm-5">-->
        <!--<input type="text" class="form-control" id="ticketNumber" v-model="ticketNumber" placeholder="请输入票据编号">-->
        <!--</div>-->
        <!--<div class=" col-sm-5   ticket-validate-text">11111{{ticketNumberValidate}}</div>-->
        <!--</div>-->
        <!--</form>-->
        <!--&lt;!&ndash;票据编号 end&ndash;&gt;-->
        <!--试算表单 end-->
        <!--按钮组 start-->
        <div class="row btn-box" >
          <button type="button" class="btn btn-success col-lg-2 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-3 col-sm-offset-2 col-xs-4 col-xs-offset-1"
                  @click="getTrial">试算
          </button>
          <button type="button"
                  class="btn btn-primary  confirm-btn col-lg-2 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-3 col-sm-offset-2 col-xs-4 col-xs-offset-2"
                  @click="goNext">下一步
          </button>
          <!--<button type="button"-->
          <!--class="btn btn-warning  reset-btn col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1 col-xs-4 col-xs-offset-2"-->
          <!--@click="goReset">重置-->
          <!--</button>-->
        </div>
        <!--按钮组 start-->
      </div>
      <!--试算 end-->
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  import myNav from '@/components/trial/myNav'
  export default {
    name: 'trial',
    components: {
      myNav
    },
    data() {
      return {
        trialResultMsg: '',
        validateText: '',
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
        hasReset: true,
        backgroundImgUrl: {
          backgroundImage: 'url(' + require('../../common/img/tiexian-bg.png') + ')'
        }
      }
    },
    created() {
      //检测用户是否登录
      const phoneNumber = window.sessionStorage.getItem('phone')
      if (window.pjbl.check.isNull(phoneNumber)) {
        this.$router.push('/login')
      }
    },
    mounted() {

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
      /**  用户输入校验 start */
      //承兑商户名称校验
      honnerNameValidate: function () {
        if (window.pjbl.check.isNull(this.honnerName)) {
          this.validateText = '承兑企业名称不能为空'
          return
        }
        this.honnerNameFlag = true
        this.validateText = ''
        return true
      },
      //票面金额校验
      ticketAmtValidate: function () {
        if (window.pjbl.check.isNull(this.ticketAmt)) {
          this.validateText = '票面金额不能为空'
          return
        }
        if (!window.pjbl.check.float(this.ticketAmt)) {
          this.validateText = '票面金额输入有误'
          return
        }
        if (parseFloat(this.ticketAmt) < 10000) {
          this.validateText = '票面金额不能小于10000'
          return
        }
        this.ticketAmtFlag = true
        this.validateText = ''
        return true
      },
      //票据到期日校验
      expireDateValidate: function () {
        if (window.pjbl.check.isNull(this.expireDate)) {
          this.validateText = '票据到期日不能为空'
          return
        }
        this.expireDateFlag = true
        this.validateText = ''
        return true
      },
      //背书转让日期校验
      transferDateValidate: function () {
        if (window.pjbl.check.isNull(this.transferDate)) {
          this.validateText = '背书转让日期不能为空'
          return
        }
        this.transferDateFlag = true
        this.validateText = ''
        return true
      },

      /*用户输入校验 end*/

      // 试算接口
      getTrial: function () {
        if (!this.honnerNameValidate()) {
          return
        }
        if (!this.ticketAmtValidate()) {
          return
        }
        if (!this.expireDateValidate()) {
          return
        }
        if (!this.transferDateValidate()) {
          return
        }

        const trialData = {
          phoneNumber: window.sessionStorage.getItem('phone'),
          honnerName: this.honnerName,
          ticketAmt: this.ticketAmt,
          expireDate: this.expireDate,
          transferDate: this.transferDate,
          ticketNumber: this.ticketNumber
        }
        window.sessionStorage.setItem('trialData', JSON.stringify(trialData))
        const sendUrl = window.pjbl.api.BillFactoring + "/YQLBillFactoring003"
        const sendBody = {
          "phone": window.sessionStorage.getItem('phone'),
          "acptName": this.honnerName,
          "amt": this.ticketAmt,
          "dueDate": this.expireDate.replace(/-/g, ''),
          "indorsDate": this.transferDate.replace(/-/g, ''),
          "billNo": this.ticketNumber
        }
        // const sendBody = {
        //   "acptName": "保利地产1",
        //   "amt": 50000.00,
        //   "dueDate": "20190808",
        //   "indorsDate": "20180808",
        //
        //   "phone": "18801176433"
        // }
        this.$http.post(sendUrl, sendBody)
          .then(
            (response) => {

              const result = response.body
              if (result.code === "2000") {
                const dataList = result.dataList
                const dataObj = JSON.parse(dataList[0])
                window.sessionStorage.setItem('trialResultData', dataList[0])
                this.ladRat = dataObj.ladRat
                this.feeAmt = dataObj.feeAmt
                this.availableAmt = dataObj.availableAmt

                this.ladRat = this.ladRat * 100
                this.feeAmt = this.feeAmt.toFixed(2)
                this.availableAmt = this.availableAmt.toFixed(2)
                $('.trialResult').show()
                this.trialResultMsg = ''
              } else {
                console.log(result.message)
                this.trialResultMsg = result.message
              }
            },
            (error) => {
              console.log(error)
            }
          )
      },

      /* 下一步 Btn */
      goNext: function () {
        if (!this.honnerNameValidate()) {
          return
        }
        if (!this.ticketAmtValidate()) {
          return
        }
        if (!this.expireDateValidate()) {
          return
        }
        if (!this.transferDateValidate()) {
          return
        }
        if (this.trialResultMsg !== '') {
          return
        }

        this.getTrial()

        this.$router.push('/apply')
      },
      // 重置
      goReset: function () {
        Object.assign(this.$data, this.$options.data())
      }

    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">


  @media screen {




    @media (min-width: 768px) {
      .trial {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
      }

      .trial-container {
        width: 60%;
        margin: auto;
      }

      .trial-wrapper {

        margin-top: 50px;

        .trial-query-wrapper {
          #trialForm {
            .input-item {
              margin-bottom: 24px;
              label {
                padding-right: 0px;
                height: 34px;
                line-height: 1.7;
                text-align: right;
                font-size: 15px;
              }
              .form-control {
                width: 58.33333333%;
              }
            }
          }
          .trial-result-wrapper {
            button {
              margin-bottom: 20px;
            }
            .result-item {
              margin-bottom: 24px;
              line-height: 1.7;
              font-size: 17px;
              span {
                padding-left: 10px;
              }
            }
            .trial-result {

            }

          }
        }
        .validate-text {
          text-align: right;
          padding-right: 40px;
        }
      }

    }
    @media (min-width: 992px) {
      #trialForm {
        .input-item {
          label {
            text-align: right;
            padding-right: 0px;
          }
          .form-control {
            width: 66.66666667%;
          }
        }
      }
    }

  }

  .form-control {
    display: block;
    /* width: 100%; */
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  }


</style>
