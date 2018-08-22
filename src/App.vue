<template>
  <div id="app">
    <!--<myHeader></myHeader>-->
    <router-view/>
  </div>
</template>

<script>
  import myHeader from '@/components/myHeader/myHeader'
export default {
  name: 'App',
  components: {
    myHeader
  }

}
</script>

<style scoped lang="less" rel="stylesheet/less">
#app {
  font-size: 12px;
}
</style>
