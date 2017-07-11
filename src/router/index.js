import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: require('../view/index')
    },
    {
      path: '/music',
      name: 'music',
      component: require('../view/music')
    },
    {
      path: '/problem',
      name: 'problem',
      component: require('../view/problem')
    },
    {
      path: '/signDetail',
      name: 'signDetail',
      component: require('../view/sign-detail')
    },
    {
      path: '/musicDetail',
      name: 'musicDetail',
      component: require('../view/music-detail')
    },
    {
      path: '/profile',
      name: 'profile',
      component: require('../view/profile')
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
