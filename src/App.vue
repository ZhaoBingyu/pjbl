<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view/>
    <!--<myFooter></myFooter>-->
  </div>
</template>

<script>
  import myHeader from '@/components/myHeader/myHeader'
  import myFooter from '@/components/myFooter/myFooter'

  export default {
    name: 'App',
    components: {
      myHeader,
      myFooter
    },
    data() {
      return {
        hasHeader: true,
        hasFooter: true
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
        } else {
          this.hasHeader = true
          this.hasFooter = true
        }
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 12px;
  }
</style>
