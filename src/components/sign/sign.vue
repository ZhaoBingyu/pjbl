<template>
  <div class="sign container-fluid">
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#">签约</a></li>
      <!--<li role="presentation"><a href="#">Profile</a></li>-->
    </ul>
    <form class="form-horizontal">
      <div class="radio">
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
    <div class="sign-btn-wrapper clearfix row">
      <div class="col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-3 col-xs-5 col-xs-offset-1">
        <button type="button" class="btn btn-primary  confirm-btn col-md-10 col-sm-10 col-xs-10" @click="goPre">上一步
        </button>
      </div>
      <div class="col-md-2 col-sm-4  col-xs-5">
        <button type="button" class="btn btn-primary  confirm-btn col-md-10 col-sm-10 col-xs-10" @click="goNext">下一步
        </button>
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

    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .sign {
    width: 100%;
    @media screen and (min-width: 960px){
      width: 80%;
    }
    margin-top: 30px;
    form {
      margin-top: 20px;
      padding-left: 5%;
      @media screen {
        @media (min-width: 960px) {
          padding-left: 20%;
        }
      }
    }
  }

  .underline-sign {
    label {
      cursor: not-allowed;
    }
  }
</style>
