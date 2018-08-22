<template>
  <button type="button" class="btn btn-primary" v-on:getVerifiCode="childMethod" >获取验证码</button>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'getVerifiCode',
    mounted(){

    },
    methods:{
      childMethod() {
        console.log('childMethod do...')
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .code-btn {
    position: absolute;
    left: 223px;
  }

</style>
