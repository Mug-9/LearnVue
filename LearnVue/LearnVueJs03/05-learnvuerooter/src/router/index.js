import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('..//components/Home'),
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
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
    component: () => import('..//components/About'),
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId',
    component: () => import('..//components/User'),
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: () => import('..//components/Profile'),
    meta: {
      title: '档案'
    },
  }
]

const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
