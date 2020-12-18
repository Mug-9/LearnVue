import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

createApp(App).use(store).use(router).mount('#app')



// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   mothod: 'get'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   },
//   mothod: 'get'
// }).then(res => {
//   console.log(res)
// })
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([
//   axios({
//     url: '/home/multidata',
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'pop',
//       page: 5
//     }
//   })
// ]).then(results => {
//   console.log(results)
// })

// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })



// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success (res) {
//     console.log(res)
//   },
//   failure (err) {
//     console.log(err)
//   }
// })

import { request } from './network/request'

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
