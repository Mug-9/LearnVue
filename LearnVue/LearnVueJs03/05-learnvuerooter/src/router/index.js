import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('..//components/Home')
    },
    {
      path: '/about',
      component: () => import('..//components/About')
    },
    {
      path: '/user/:userId',
      component: () => import('..//components/User')
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
