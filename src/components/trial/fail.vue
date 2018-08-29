<template>
  <div class="fail">
    <div class="page icons js_show">
      <div class="page__bd page__bd_spacing">
        <div class="icon-box" style="text-align: center">
          <i class="weui-icon-warn weui-icon_msg"></i>
          <div class="icon-box__ctn">
            <h3 class="icon-box__title h3">提交失败</h3>
            <!--<p class="icon-box__desc">用于表示操作后将引起严重的不可挽回的后果的情况</p>-->
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 70px">
      <button type="button"
              class="btn btn-primary  confirm-btn col-xs-2 col-xs-offset-5"
              @click="returnTrial">返回
      </button>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'fail',
    created() {
      //检测用户是否登录
      const phoneNumber = window.sessionStorage.getItem('phone')
      if (window.pjbl.check.isNull(phoneNumber)) {
        this.$router.push('/login')
      }
    },
    methods: {
      //  返回试算页
      returnTrial: function () {
        this.$router.push('/trial')
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .fail {
    margin-top: 30px !important;
  }

</style>
