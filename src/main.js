// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.min.css'
import './common/css/common.css'
import './common/lib/weui/lib/weui.min.css'
import './common/lib/weui/css/jquery-weui.min.css'

import 'bootstrap/dist/js/bootstrap.min.js'
import '@/common/js/common.pjbl.js'
import '@/common/js/common.pjbl.api.js'


import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

// import bus from './common/js/bus.js'
// import global_ from '@/components/tool/global'


// Vue.prototype.GLOBAL = global_    // 全局方法/参数

const bus = new Vue()
Vue.prototype.bus = bus     //eventBus

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
