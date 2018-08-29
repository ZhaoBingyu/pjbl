(function ($) {
  window.pjbl = window.pjbl || {}

  /**
   * 格式检查
   * @type {{mobile: scf.check.mobile, phone: scf.check.phone, zipCode: scf.check.zipCode, qq: scf.check.qq, ip: scf.check.ip, chrnum: scf.check.chrnum, chinese: scf.check.chinese, byteRangeLength: scf.check.byteRangeLength}}
   */
  window.pjbl.check = {
    /**
     * 空验证
     * @param value
     * @returns {boolean}
     */
    isNull: function (value) {
      return value === undefined || value === null || value === ""
    },
    /**
     * 手机号码格式验证
     * @param value
     * @returns {boolean}
     */
    mobile: function (value) {
      var length = value.length
      // var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
      var mobile = /^1[3|4|5|8|9][0-9]\d{4,8}$/
      return length === 11 && mobile.test(value)
    },
    /**
     * 电话号码格式验证
     * @param value
     * @returns {boolean}
     */
    phone: function (value) {
      var tel = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/
      return tel.test(value)
    },
    /**
     * 邮政编码格式验证
     * @param value
     * @returns {boolean}
     */
    zipCode: function (value) {
      var tel = /^[0-9]{6}$/
      return tel.test(value)
    },
    /**
     * qq号码格式验证
     * @param value
     * @returns {boolean}
     */
    qq: function (value) {
      var tel = /^[1-9]\d{4,9}$/
      return tel.test(value)
    },
    /**
     * Ip地址格式验证
     * @param value
     * @returns {*|boolean}
     */
    ip: function (value) {
      var ip = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      return ip.test(value) && (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256)
    },
    /**
     * 输入验证：只能输入数字和字母(字符A-Z, a-z, 0-9)
     * @param value
     * @returns {boolean}
     */
    chrnum: function (value) {
      var chrnum = /^([a-zA-Z0-9]+)$/
      return chrnum.test(value)
    },
    /**
     * 输入验证：只能输入数字(0-9)
     * @param value
     * @returns {boolean}
     */
    number: function (value) {
      var number = /^([0-9]+)$/
      return number.test(value)
    },
    /**
     * 输入验证：产品利率不能大于24
     * @param value
     * @returns {boolean}
     */
    product24: function (value) {
      return value <= 24
    },
    rate: function (value) {
      var rate
      if (value.toString().indexOf('.') !== -1) {
        return false
      }
      if (value.length === 1) {
        rate = /^\d+$/
        return rate.test(value)
      } else if (value.length === 2) {
        rate = /^[1-9][0-9]+$/
        return rate.test(value)
      }
      return false
    },
    /**
     * 输入验证：只能输入数字(0-9)
     * @param value
     * @returns {boolean}
     */
    float: function (value) {
      var float = /^([0-9|.]+)$/
      return float.test(value)
    },
    /**
     * 输入验证：小数位不大于2位
     * @param value
     * @returns {boolean}
     */
    decimal2: function (value) {
      if (value.toString().indexOf('.') > 0) {
        var o = value.toString().split('.')
        if (o.length === 2 && o[1].length > 2) {
          return false
        }
      }
      return true
    },
    /**
     * 输入验证：数值不能大于等于100
     * @param value
     * @returns {boolean}
     */
    decimal00: function (value) {
      if (parseInt(value) >= 100) {
        return false
      }
      return true
    },
    /**
     * 输入验证：数值不能大于100
     * @param value
     * @returns {boolean}
     */
    decimaNew: function (value) {
      if (parseInt(value) > 100) {
        return false
      }
      return true
    },
    /**
     * 输入验证：数值不能大于100
     * @param value
     * @returns {boolean}
     */
    decimal00for3: function (value) {
      if (parseInt(value) > 100) {
        return false
      }
      return true
    },
    /**
     * 输入验证：只能输入金融(0-9)
     * @param value
     * @returns {boolean}
     */
    amount: function (value) {
      var amount
      if (typeof value === "number" || (typeof value !== "number" && value.length === 1)) {
        amount = /^\d+$/
        return amount.test(value)
      } else if (value.toString().indexOf('.') === -1) {
        amount = /^[1-9][0-9]+$/
        return amount.test(value)
      } else if (value.toString().indexOf('.') > 0) {
        var o = value.toString().split('.')
        if (o.length === 2 && (o[1].length === 1 || o[1].length === 2)) {
          if (o[0] === "0") {
            return true
          } else {
            amount = /^[1-9][0-9|.]+$/
            return amount.test(value)
          }
        }
        // var amount = /^([0-9|.]+)$/;
        // if (!amount.test(value)) {
        //     return false;
        // }

        // if (value.toString().indexOf('.') > 0) {
        //     var o = value.toString().split('.');
        //     return !(o.length === 2 && o[1].length > 2);
        // } else {
        //     return true;
        // }
      }
      return false
    },
    /**
     * 输入验证：只能输入数字(0-9)
     * @param value
     * @returns {boolean}
     */
    day: function (value) {
      // var number = /^\d+$/;
      // var number = /^([1-9]{1,1}[0-9]+)$/;
      // return number.test(value);
      var number
      if (typeof value === "number" || (typeof value !== "number" && value.length === 1)) {
        number = /^\d+$/
        return number.test(value)
      } else {
        number = /^[1-9][0-9]+$/
        return number.test(value)
      }
    },
    /**
     * 输入中文验证
     * @param value
     * @returns {*|boolean}
     */
    chinese: function (value) {
      var chinese = /^[\u4e00-\u9fa5]+$/
      return chinese.test(value)
    },
    /**
     * 输入值验证：请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)
     * @param value
     * @param param
     * @returns {boolean}
     */
    byteRangeLength: function (value, param) {
      var length = value.length
      for (var i = 0; i < value.length; i += 1) {
        if (value.charCodeAt(i) > 127) {
          length += 1
        }
      }
      return length <= param[1] && length >= param[0]
    }
  }

  window.pjbl.dateFormat = function (date) {
    const year = date.slice(0,4)
    const month = date.slice(4,6)
    const day = date.slice(6)
    return year + '-' + month + '-' + day
  }
})(jQuery)

