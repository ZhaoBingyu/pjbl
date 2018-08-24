<template>
  <div class="my-header container-fluid">
    <div class="row logo-wrapper">
      <div class="col-md-4 col-sm-6 col-xs-6">
        <img :src="logo" alt="融联科技logo" class="img-responsive">
      </div>
      <div class="col-md-4 col-md-offset-4 col-sm-6 col-xs-6">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">用户：{{phoneNumber}}</div>
          <div class="col-md-6 col-sm-6 col-xs-12">退出</div>
        </div>
      </div>
    </div>
    <!--<div class="logo">-->
    <!--&lt;!&ndash;<div class="row" style="text-align: right">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>用户:{{userName}}</span>&ndash;&gt;-->
    <!--&lt;!&ndash;<span>退出</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'myHeader',
    data() {
      return {
        logo: require('./logo.png'),
        userName: '',
        hasLoginInfo: false,
        phoneNumber:''
      }
    },
    watch: {
      '$route': 'getCommon'
    },
    mounted() {
      this.getCommon()
      this.phoneNumber = window.sessionStorage.getItem('phone')
    },
    methods: {
      getCommon: function () {
        if (this.$route.path === '/login') {
          this.hasLoginInfo = false
        } else {
          this.hasLoginInfo = true
        }
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .my-header {
    height: 12%;
    background: #f8f8f8;
    .logo-wrapper {
      height: inherit;
      padding: 10px 10px 10px 20px;
      img {
        vertical-align: bottom;
      }
    }
    /*.logo {*/
    /*height: inherit;*/
    /*margin-left: 100px;*/
    /*margin-top: 10px;*/
    /*background-image: url("logo.png");*/
    /*background-repeat: no-repeat;*/
    /*background-position: bottom;*/
    /*}*/
    /*.userInfo {*/
    /*height: 80px;*/
    /*font-size: 14px;*/
    /*}*/
  }

  /*@media screen and(max-width: 760px) {*/
  /*.my-header {*/
  /*height: 50px;*/
  /*.logo {*/
  /*height: 30px;*/
  /*margin-left: 20px;*/
  /*margin-top: 10px;*/
  /*background-image: url("logo.png");*/
  /*background-repeat: no-repeat;*/
  /*background-size: 160px 100%;*/
  /*}*/
  /*}*/
  /*}*/
</style>
