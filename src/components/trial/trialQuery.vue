<template>
  <!--<div class="trial container-fluid" :style="backgroundImgUrl">-->
  <div class="trial-query container-fluid" :style="backgroundImgUrl">
    <div class="trial-container">
      <!--导航 start-->
      <myNav></myNav>
      <!--导航 end-->
      <div class="trial-query-wrapper">
        <div class="search-box">
          <!--查询条件 start-->
          <div class="">
            <div class="row query-item">
              <div class="col-md-6 col-sm-9 col-xs-12 ">
                <label for="acptName" class="col-md-4 col-sm-3 col-xs-4 control-label">承兑企业名称：</label>
                <div class="col-md-8 col-sm-9 col-xs-8">
                  <input v-model="acptName" type="text" class="form-control" id="acptName" placeholder="请输入承兑商户名称">
                </div>
              </div>
              <div class="col-md-6 col-sm-9 col-xs-12 ">
                <label for="amt" class="col-md-4 col-sm-3 col-xs-4 control-label">票面金额：</label>
                <div class="col-md-8 col-sm-9 col-xs-8">
                  <input v-model="amt" type="number" class="form-control" id="amt" placeholder="请输入票面金额">
                </div>
              </div>
            </div>
            <div class="row query-item">
              <div class="col-md-6 col-sm-9 col-xs-12 ">
                <label for="billNo" class="col-md-4 col-sm-3 col-xs-4 control-label">票据编号：</label>
                <div class="col-md-8  col-sm-9 col-xs-8">
                  <input v-model="billNo" type="text" class="form-control" id="billNo" placeholder="请输入票据编号">
                </div>
              </div>
              <div class="col-md-6 col-sm-9 col-xs-12 ">
                <label for="billStatus" class="col-md-4 col-sm-3 col-xs-4 control-label"><span></span>票据状态：</label>
                <div class="col-md-8 col-sm-9 col-xs-8">
                  <select class="form-control" name="billStatus" id="billStatus" v-model="billStatus">
                    <option value="">请选择票据状态</option>
                    <option value="00">已试算</option>
                    <option value="01">已审核</option>
                    <option value="02">已登记</option>
                    <option value="03">背书未签收</option>
                    <option value="04">背书准签收</option>
                    <option value="05">背书已签收</option>
                    <option value="06">已付款</option>
                    <option value="07">提示付款未签收</option>
                    <option value="08">提示付款已签收</option>
                    <option value="09">提示付款已拒付</option>
                    <option value="10">已回款</option>
                    <option value="11">已失败</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row query-item" style="margin-left: -15%">
              <div class="col-md-12 col-sm-9 col-xs-12 ">
                <label for="dueDateFrom" class="col-md-3 col-sm-3 col-xs-4 control-label">票据到期日：</label>
                <div class="col-md-4 col-sm-4 col-xs-7 ">
                  <input v-model="dueDateFrom" v-if="hasReset"
                         type="date" class="form-control date-start" id="dueDateFrom" placeholder="票据到期日-起始">
                </div>
                <div class="col-md-1 col-sm-1 col-xs-1 time-hr">-</div>
                <div class="col-md-4 col-sm-4 col-xs-7 col-sm-offset-0 col-xs-offset-4">
                  <input v-model="dueDateTo" v-if="hasReset"
                         type="date" class="form-control date-end" id="dueDateTo" placeholder="票据到期日-截止">
                </div>
              </div>
              <div class="col-md-12 col-sm-9 col-xs-12 ">
                <label for="indorsDateFrom" class="col-sm-3  col-xs-4 control-label">背书转让日期：</label>
                <div class="col-sm-4 col-xs-7">
                  <input v-model="indorsDateFrom"
                         type="date" class="form-control date-start"
                         id="indorsDateFrom" placeholder="请输入背书转让日期-起始">
                </div>
                <div class="col-sm-1 col-xs-1 time-hr">-</div>
                <div class="col-sm-4 col-xs-7 col-sm-offset-0 col-xs-offset-4">
                  <input v-model="indorsDateTo"
                         type="date" class="form-control date-end"
                         id="indorsDateTo" placeholder="请输入背书转让日期-截止">
                </div>
              </div>
            </div>
          </div>
          <!--查询条件 end-->
          <!--按钮在 start-->
          <div class="row btn-box">
            <button type="button"
                    class="btn btn-primary col-md-2 col-sm-3 col-xs-4 col-md-offset-4 col-sm-offset-3 col-xs-offset-1">
              查询
            </button>
            <button type="button"
                    class="btn btn-warning col-md-2 col-sm-3 col-xs-4 col-md-offset-1 col-sm-offset-1 col-xs-offset-1"
                    @click="goReset">重置
            </button>
          </div>
          <!--按钮在 end-->
        </div>


        <!--查询结果 start-->
        <div class="query-list-wrapper ">
          <hr>
          <div class="row">
            <div class="col-md-2 col-sm-2 col-xs-3 result-title">查询结果</div>
            <div class="result-hr col-md-10 col-sm-10 col-xs-9"></div>
          </div>
          <!--数据List start-->
          <div class="table-responsive">
            <table class="table">
              <tr>
                <th>票据编号</th>
                <th>票据金额</th>
                <th>交易金额</th>
                <th>手续费金额</th>
                <th>票据状态</th>
                <!--<th>开票日期</th>-->
                <th>背书转让日期</th>
                <th>到期日期</th>
                <th>登记日期</th>
                <!--<th>登记时间</th>-->
              </tr>
              <tr v-for="item in queryResultList">
                <td>{{item.billNo}}</td>
                <td>{{item.billAmt}}</td>
                <td>{{item.txnAmt}}</td>
                <td>{{item.feeAmt}}</td>
                <td>{{item.billStatus}}</td>
                <!--<td>{{item.drawDate}}</td>-->
                <td>{{item.indorsDate}}</td>
                <td>{{item.dueDate}}</td>
                <td>{{item.regdate}}</td>
                <!--<td>{{item.regtime}}</td>-->
              </tr>
            </table>
          </div>
          <!--数据List end-->
        </div>
        <!--查询结果 end-->
      </div>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  const phoneNumber = window.sessionStorage.getItem('phone')

  import myNav from '@/components/trial/myNav'

  export default {
    name: 'trial',
    components: {
      myNav
    },
    data() {
      return {
        phone: '',
        acptName: '',
        amt: '',
        dueDateFrom: '',
        dueDateTo: '',
        indorsDateFrom: '',
        indorsDateTo: '',
        billNo: '',
        billStatus: '',
        queryResultList: [],
        // ladRat: '',
        // feeAmt: '',
        // availableAmt: '',
        // phoneNumber: '',
        // honnerName: '',
        // ticketAmt: '',
        // expireDate: '',
        // transferDate: '',
        // ticketNumber: '',
        hasReset: true,
        backgroundImgUrl: {
          backgroundImage: 'url(' + require('../../common/img/tiexian-bg.png') + ')'
        }
      }
    },
    created() {
      //检测用户是否登录
      // if (window.pjbl.check.isNull(phoneNumber)) {
      //   this.$router.push('/login')
      // }
      //  查询接口
      this.searchQueryInter()
    },
    methods: {
      toTrial: function () {
        this.$router.push('/trial')
      },
      toTrialQuery: function () {
        this.$router.push('/trialQuery')
      },
      //获取票据状态
      getBillStatus: function(data){
        switch (data) {
          case '00':
            data = '已试算'
            return data
          case '01':
            data = '已审核'
            return data
          case '02':
            data = '已登记'
            return data
          case '03':
            data = '背书未签收'
            return data
          case '04':
            data = '背书准签收'
            return data
          case '05':
            data = '背书已签收'
            return data
          case '06':
            data = '已付款'
            return data
          case '07':
            data = '提示付款未签收'
            return data
          case '08':
            data = '提示付款已签收'
            return data
          case '09':
            data = '提示付款已拒付'
            return data
          case '10':
            data = '已回款'
            return data
          case '11':
            data = '已失败'
            return data
        }

      },
      //查询接口
      searchQueryInter: function () {
        const sendUrl = window.pjbl.api.BillFactoring + "/YQLBillFactoring005"
        const sendBody = {
          'phone': window.sessionStorage.getItem('phone'),
          'acptName': this.acptName,
          'amt':this.amt,
          'dueDateFrom':this.dueDateFrom,
          'dueDateTo':this.dueDateTo,
          'indorsDateFrom': this.indorsDateFrom,
          'indorsDateTo':this.indorsDateTo
        }
        this.$http.post(sendUrl, sendBody)
          .then(
            (response) => {
              const result = response.body
              if (result.code === "2000") {
                const dataList = JSON.parse(result.dataList[0])
                for (let i = 0; i < dataList.length; i++) {

                  dataList[i].billStatus = this.getBillStatus(dataList[i].billStatus)
                  dataList[i].indorsDate = window.pjbl.dateFormat(dataList[i].indorsDate)
                  dataList[i].dueDate = window.pjbl.dateFormat(dataList[i].dueDate)
                  dataList[i].regdate = window.pjbl.dateFormat(dataList[i].regdate)
                  this.queryResultList.push(dataList[i])
                  console.log(this.queryResultList[i])
                  console.log( dataList[i].billStatus)
                }


              } else {
                this.validateText = result.message
              }
            },
            (error) => {
              console.log(error)
            }
          )
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
      .trial-query {
        width: 100%;
        height: 100%;
        margin-bottom: 80px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
        .trial-container {
          width: 60%;
          margin: auto;
        }

        .trial-query-wrapper {
          margin-top: 30px;
          .query-item {
            margin-bottom: 10px;
            padding: 0;
            padding-right: 6px;
            text-align: right;
            label {
              padding: 0;
              height: 34px;
              line-height: 28px;
              font-size: 15px;
            }
            div {
              padding: 0;
            }
            .time-hr {
              width: 8.3%;
              text-align: center;
              margin: auto;
              font-size: 28px;
            }
          }
          .btn-box {
            margin-top: 40px;
          }
          .query-list-wrapper {
            padding: 0;
            .result-title {
              padding: 0;
              font-size: 16px;
              font-weight: bold;
              color: orangered;
            }
            .result-hr {
              margin-top: 9px;
              margin-left: -8px;
              border-bottom: 1px solid orangered;
            }
          }
        }

      }
    }
  }

  table th {
    padding: 8px 5px;
    vertical-align: middle;
    text-align: center;
    color: white;
    background: #e9565c;
  }

  table tr td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

</style>
