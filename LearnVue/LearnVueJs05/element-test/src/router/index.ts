import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('views/Home/Home.vue')
const FindHome = () => import('views/FindHome/FindHome.vue')
const FindWork = () => import('views/FindWork/FindWork.vue')
const FindCar = () => import('views/FindCar/FindCar.vue')
const Profile = () => import('views/Profile/Profile.vue')
const Login = () => import('views/Login/Login.vue')
const Register = () => import('views/Register/Register.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/findHome',
    component: FindHome
  },
  {
    path: '/findWork',
    component: FindWork
  },
  {
    path: '/findCar',
    component: FindCar
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
