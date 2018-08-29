<template>
  <div id="app" :style="backgroundImgUrl">
    <myHeader class="my-header"></myHeader>
    <router-view class="container"></router-view>
    <!--<myFooter></myFooter>-->
  </div>
</template>

<script>
  import myHeader from '@/components/myHeader'
  import myFooter from '@/components/myFooter'

  export default {
    name: 'App',
    components: {
      myHeader,
      myFooter
    },
    data() {
      return {
        hasHeader: true,
        hasFooter: true,
        backgroundImgUrl: {
          backgroundImage: 'url(' + require('./common/img/tiexian-bg.png') + ')'
        }
      }
    },
    watch: {
      '$route': 'getCommon'
    },

    mounted() {
      this.getCommon()
    },
    methods: {
      getCommon: function () {
        if (this.$route.path === '/login') {
          this.hasHeader = false
          this.hasFooter = false
          this.backgroundImgUrl.backgroundImage= 'url(' + require('./common/img/login_bg.png') + ')'
        } else {
          this.hasHeader = true
          this.hasFooter = true
          if (this.$route.path === '/trial') {
            this.backgroundImgUrl.backgroundImage= 'url(' + require('./common/img/tiexian-bg.png') + ')'
            console.log(this.backgroundImgUrl.backgroundImage)
          }
          if (this.$route.path === '/apply') {
            this.backgroundImgUrl.backgroundImage= 'url(' + require('./common/img/shenqing-bg.png') + ')'
          }else{
            this.backgroundImgUrl.backgroundImage= ''
          }
        }

      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @media screen {
    /*#app {*/
      /*width: 100%;*/
      /*height: 100%;*/
      /*overflow: auto;*/
      /*margin: auto;*/
      /*padding: 0;*/
      /*font-size: 12px;*/
      /*background-size: cover;*/
      /*background-repeat: no-repeat;*/
      /*background-position: center;*/
      /*.my-header{*/
        /*width: 100%;*/
        /*height: 80px;*/
        /*background: #fff;*/
        /*box-sizing: border-box;*/
        /*padding-top: 10px;*/
        /*padding-bottom: 10px;*/
        /*padding-left: 30px;*/
        /*!*margin-top: 10px;*!*/
        /*!*margin-left: 10px;*!*/
      /*}*/
      /*.container{*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*margin-top: -80px;*/
      /*}*/
    /*}*/
  }
</style>
