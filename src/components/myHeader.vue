<template>
  <div class="my-header container-fluid">
    <div class="row">
      <div class="logo col-md-4 col-sm-4 col-xs-6"  :style="backgroundImgUrl">
      </div>
      <div class="user-info col-sm-8 col-xs-5" v-if="hasLoginInfo">
        <div class="row">
          <div class=" col-sm-6 col-sm-offset-4 col-xs-12">
            <div class="user-name"><span>&nbsp;用户：{{phoneNumber}}</span></div>
          </div>
          <div class=" col-sm-2 col-xs-12">
            <div class="logout"><span @click="goLogout">&nbsp退出</span></div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'myHeader',
    data() {
      return {
        logo: require('../common/img/logo.png'),
        userName: '',
        hasLoginInfo: false,
        phoneNumber: '',
        backgroundImgUrl: {
          backgroundImage: 'url(' + require('../common/img/logo.png') + ')'
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
          this.hasLoginInfo = false
        } else {
          this.hasLoginInfo = true
          this.phoneNumber = window.sessionStorage.getItem('phone') || ''
        }
      },
      //退出
      goLogout: function () {
        sessionStorage.removeItem('phone')
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @media screen {
    .my-header {
      overflow: hidden;
      position: relative;
      height: 40px;
      padding: 0;
      /*margin-bottom: 20px;*/
      .row {
        margin: 0;
        padding: 0;
        .logo {
          margin-left: 10px;
          height: 40px;
          padding: 0;
          background-repeat: no-repeat;
          background-position: left;
          background-size: contain;
        }
        .user-info {
          margin-top: 4px;
          margin-left: 30px;
          margin-right: -20px;
          padding: 0;
          height: 40px;
          .row {
            padding: 0;
            > div {
              padding: 0;
              margin-top: 4px;
              text-align: right;
              .user-name {
                margin-right: 19px;
              }
              .logout {
                margin-right: 22px;
              }
            }
          }
        }
      }
    }
    @media (min-width: 768px) {
      .my-header {
        position: relative;
        height: 60px;
        padding: 0;
        font-size: 14px;
        .row {
          margin: 0;
          padding: 0;
          padding-left: 10px;
          .logo {
            margin: 0;
            height: 60px;
            padding: 0;
            background-repeat: no-repeat;
            background-position: left;
            background-size: contain;
          }
          .user-info {
            margin: 0;
            padding: 0;
            height: 60px;
            line-height: 60px;
            .row {
              padding: 0;
              > div {
                padding: 0;
                margin-top: 4px;
                text-align: right;
                .user-name {
                }
                .logout {
                  cursor: pointer;
                  :hover{
                    color: orangered;
                  }
                }
              }
            }
          }
        }

      }
    }
  }
</style>
