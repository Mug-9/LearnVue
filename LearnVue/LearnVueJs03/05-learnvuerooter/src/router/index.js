import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('..//components/Home'),
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: () => import('..//components/HomeNews')
        },
        {
          path: 'message',
          component: () => import('..//components/HomeMessage')
        }
      ]
    },
    {
      path: '/about',
      component: () => import('..//components/About')
    },
    {
      path: '/user/:userId',
      component: () => import('..//components/User')
    },
    {
      path: '/profile',
      component: () => import('..//components/Profile')
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
