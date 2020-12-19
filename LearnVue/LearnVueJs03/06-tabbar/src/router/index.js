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
    component: () => import('views/home/Home')
  },
  {
    path: '/category',
    component: () => import('views/category/Category')
  },
  {
    path: '/cart',
    component: () => import('views/cart/Cart')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile')
  }
]

const router = new Router({
  routes: routes,
  mode: 'history'
})

export default router
