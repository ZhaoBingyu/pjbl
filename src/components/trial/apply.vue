<template>
  <!--<div class="apply container-fluid" :style="backgroundImgUrl">-->
    <div class="apply container-fluid" >
    <!--<ul class="nav nav-tabs">-->
    <!--<li role="presentation" class="active"><a href="#">申请</a></li>-->
    <!--&lt;!&ndash;<li role="presentation"><a href="#">Profile</a></li>&ndash;&gt;-->
    <!--</ul>-->
    <div class="apply-wrapper">
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
      <!--票据编号 start-->
      <form class="form-horizontal bill-form">
        <div class="form-group ticket-number">
          <label for="ticketNumber" class="col-sm-2 col-sm-offset-2 control-label"><span>*</span>票据编号:</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" id="ticketNumber" v-model="ticketNumber" placeholder="请输入票据编号" v-on:change="ticketNumberValidate">
          </div>
          <div class=" col-sm-9  ticket-validate-text">{{ticketNumberValidateText}}</div>
        </div>
      </form>
      <!--票据编号 end-->
      <div class="apply-btn-wrapper clearfix row">
        <div class="col-md-12">
          <div class="row btn-box">
            <button type="button" class="btn btn-primary  confirm-btn col-md-2 col-md-offset-4 col-sm-5 col-xs-10"
                    @click="goPre">上一步
            </button>
            <button type="button" class="btn btn-danger  confirm-btn col-md-2 col-md-offset-1 col-sm-5 col-xs-10"
                    @click="goSubmit">提交
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--&lt;!&ndash; 模态框（Modal） &ndash;&gt;-->
    <!--&lt;!&ndash; 按钮触发模态框 &ndash;&gt;-->
    <!--<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" id="submitSuccessBtn" style="display: none" ></button>-->
    <!--&lt;!&ndash; 模态框（Modal） 提交成功&ndash;&gt;-->
    <!--<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">-->
      <!--<div class="modal-dialog">-->
        <!--<div class="modal-content">-->
          <!--<div class="modal-header">-->
            <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
            <!--&lt;!&ndash;<h4 class="modal-title" id="myModalLabel">模态框（Modal）标题</h4>&ndash;&gt;-->
          <!--</div>-->
          <!--<div class="modal-body" style="text-align: center; font-size: 28px;">提交成功</div>-->
          <!--<div class="modal-footer">-->
            <!--<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>-->
            <!--<button type="button" class="btn btn-primary" @click="goPre">返回</button>-->
          <!--</div>-->
        <!--</div>&lt;!&ndash; /.modal-content &ndash;&gt;-->
      <!--</div>&lt;!&ndash; /.modal &ndash;&gt;-->
    <!--</div>-->

    <!--&lt;!&ndash; 按钮触发模态框 &ndash;&gt;-->
    <!--<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" id="submitFailBtn" style="display: none" ></button>-->
    <!--&lt;!&ndash; 模态框（Modal） 提交成功&ndash;&gt;-->
    <!--<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">-->
      <!--<div class="modal-dialog">-->
        <!--<div class="modal-content">-->
          <!--<div class="modal-header">-->
            <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
            <!--&lt;!&ndash;<h4 class="modal-title" id="myModalLabel">模态框（Modal）标题</h4>&ndash;&gt;-->
          <!--</div>-->
          <!--<div class="modal-body" style="text-align: center; font-size: 28px;">提交失败</div>-->
          <!--<div class="modal-footer">-->
            <!--<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>-->
            <!--<button type="button" class="btn btn-primary" @click="goPre">返回</button>-->
          <!--</div>-->
        <!--</div>&lt;!&ndash; /.modal-content &ndash;&gt;-->
      <!--</div>&lt;!&ndash; /.modal &ndash;&gt;-->
    <!--</div>-->

  </div>
</template>

<script type="text/ecmascript-6">



  export default {
    name: 'apply',
    data() {
      return {
        ticketNumber: '',
        ticketNumberValidateText: '',
        trialData: null,
        trialResultData: null,
        backgroundImgUrl: {
          backgroundImage: 'url(' + require('../../common/img/shenqing-bg.png') + ')'
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
      this.trialData = JSON.parse(window.sessionStorage.getItem('trialData'))
      this.trialResultData = JSON.parse(window.sessionStorage.getItem('trialResultData'))
      console.log(this.trialData)
      console.log(this.trialResultData)
    },
    methods: {
      //票据编号校验
      ticketNumberValidate: function () {
        if (window.pjbl.check.isNull(this.ticketNumber)) {
          this.ticketNumberValidateText = '票据编号不能为空'
          return
        }
        this.ticketNumberValidateText= ''
        return true
      },

      //上一步
      goPre: function () {
        // this.$router.push('/sign')
        this.$router.push('/trial')
        $('.modal-backdrop').hide()
      },

      //提交
      goSubmit: function () {
        if (!this.ticketNumberValidate()) {
          return
        }
        const sendUrl = window.pjbl.api.BillFactoring + '/YQLBillFactoring004'
        const sendBody = {
          'billNo': this.ticketNumber,
          'billUuid': this.trialResultData.billUuid,
          'phone': window.sessionStorage.getItem('phone')
        }
        console.log(sendBody)
        this.$http.post(sendUrl, sendBody)
          .then(
            (response) => {
              const result = response.body
              console.log(result)
              if (result.code === "2000") {
              // $("#submitSuccessBtn").click()
                this.$router.push('/success')
              } else {
              // $('#submitFailBtn').click()
                this.$router.push('/fail')
              }
            },
            (error) => {
              console.log(error)
              this.$router.push('/fail')
            }
          )
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .apply {
    margin-top: 8px !important;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    .apply-wrapper {
      margin: auto;
      margin-top: 15px;
      .info-box {
        width: 50%;
        margin: auto;
        padding-top: 15px;
        padding-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 20px;
        li {
          width: 50%;
          margin: auto;
          border: none;
          height: 28px;
        }

      }
      .bill-form {
        margin-top: 30px;
        label {
          font-size: 15px;
          text-align: right;
          padding-right: 0;
          span {
            color: red;
            font-weight: bold;
          }
        }
        .ticket-validate-text {
          margin-top: 10px;
          font-size: 15px;
          color: red;
          text-align: right;
        }

      }

    }

  }

</style>
