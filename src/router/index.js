import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import trial from '@/components/trial/trial'
import sign from '@/components/sign/sign'
import apply from '@/components/apply/apply'
import trialQuery from '@/components/trialQuery/trialQuery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login', // 登录页
      name: 'login',
      component: login
    },
    {
      path: '/trial', //试算页
      name: 'trial',
      component: trial
    },
    {
      path: '/sign', //签约页
      name: 'sign',
      component: sign
    },
    {
      path: '/apply', //提交申请页
        name: 'apply',
      component: apply
    },
    {
      path: '/trialQuery', //查询页
      name: 'trialQuery',
      component: trialQuery
    }
  ]
})
