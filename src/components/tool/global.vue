<script type="text/ecmascript-6">
  const userID = null //登陆用户
  const trialData = null    //试算数据
  const validate = {  //校验方法
    /**
     * 输入是否为空校验
     * @param data
     * @returns {*}
     */
    isInputNull: function (data) {
      if (!data) {
        return fakse
      } else {
        return true
      }
    },
    /**
     * 手机号码校验
     * @param data
     * @returns {*}
     */
    phoneNumber: function (data) {
      const myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!data) {
        return '手机号不能为空'
      }
      if (!myreg.test(data)) {
        return '请输入正确的手机号'
      } else {
        return null
      }
    },

    /**
     * 短信验证码校验
     * @param data
     * @returns {string}
     */
    codeNumber: function (data) {
      if (!data) {
        return '验证码不能为空'
      }
      return null
    }
  }
  export default {
    userID, //登陆用户
    trialData, // 试算参数
    validate   // 校验方法

  }
</script>


