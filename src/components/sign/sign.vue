<template>
  <div class="sign container-fluid">
    <div class="sign-wrapper">
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="#">签约</a></li>
        <!--<li role="presentation"><a href="#">Profile</a></li>-->
      </ul>
      <form class="form-horizontal col-sm-offset-3">
        <div class="radio" style=" color: orangered;">
          <label>
            <input type="radio" name="optionsRadios" id="online" value="option1" checked>
            线下签约
          </label>
        </div>
        <div class="radio underline-sign">
          <label>
            <input type="radio" name="optionsRadios" id="underline" value="option1" disabled>
            线上签约&lt;敬请期待&gt;
          </label>
        </div>
      </form>
      <div class="sign-info"></div>
      <div class="sign-btn-wrapper clearfix row">
        <div class="col-md-2 col-md-offset-3 col-sm-4 col-sm-offset-3 col-xs-5 col-xs-offset-1">
          <button type="button" class="btn btn-primary  confirm-btn col-md-10 col-sm-10 col-xs-10" @click="goPre">上一步
          </button>
        </div>
        <div class="col-md-2 col-sm-4  col-xs-5">
          <button type="button" class="btn btn-warning  confirm-btn col-md-10 col-sm-10 col-xs-10" @click="goSign">完成
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'sign',
    methods: {
      //上一步
      goPre: function () {
        this.$router.push('/trial')
      },
      //下一步
      goNext: function () {
        this.$router.push('/apply')
      },
      //  完成
      goSign: function () {
        const sendUrl = this.GLOBAL.api.BillFactoring+ "/YQLBillFactoring004"
        const sendBody = {
         'phone': window.sessionStorage.getItem('phone')
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
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .nav-tabs>li.active>a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover{
    background: none;
    color: orangered;
  }
  .sign {
    background-image: url("qianyue-bg.png");
    background-size: 100% auto;
    width: 100%;
    height: 540px;
    overflow: hidden;
    .sign-wrapper {
      width: 60%;
      margin: auto;
      padding-top: 40px;
      form {
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }

  }

  .underline-sign {
    label {
      cursor: not-allowed;
    }
  }
</style>
