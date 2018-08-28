<template>
  <ul class="nav nav-tabs my-nav">
    <li role="presentation" :class="{'active': isTrial}" @click="toTrial">
      <a href="javascript:;">贴现利率试算</a>
    </li>
    <li role="presentation" :class="{'active': isTrialQuery}" @click="toTrialQuery">
      <a href="javascript:;">查询</a>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'my-nav',
    data() {
      return {
        isTrial: false,
        isTrialQuery: false
      }
    },

    watch: {
      '$route': 'getCurRouter'
    },
    mounted() {
      this.getCurRouter()
    },
    methods: {
      //获取当前路由地址
      getCurRouter: function () {
        switch (this.$route.path) {
          case '/trial':
            this.isTrial = true
            break
          case '/trialQuery':
            this.isTrialQuery = true
            break
        }
      },
      //goto 试算页面
      toTrial: function () {
        this.$router.push('/trial')
      },
      //goto 试算查询页面
      toTrialQuery: function () {
        this.$router.push('/trialQuery')
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @media screen {
    .my-nav {
      margin-top: 90px;
    }
    @media (min-width: 768px) {
      .my-nav {
        margin-top: 120px;
      }
    }
  }


</style>
