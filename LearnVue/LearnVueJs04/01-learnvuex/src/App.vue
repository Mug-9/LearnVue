<template>
  <div id="app">
    <h2>{{ $store.state.b.name }}</h2>
    <button @click="updataName">修改名字</button>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.fullName }}</h2>
    <h2>{{ $store.getters.fullName2 }}</h2>
    <h2>{{ $store.getters.fullName3 }}</h2>
    <button @click="asyncUpdataName">异步修改</button>
    <button @click="Addition">+</button>
    <button @click="Subtraction">-</button>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
import { INCREMENT } from './store/mutations-types'

export default {
  components: { HelloVuex },
  name: 'App',
  data () {
    return {
      message: "我是app组件"
    }
  },
  methods: {
    Addition () {
      // this.$store.commit(INCREMENT)
      // this.$store.dispatch('aUpdate', {
      //   message: "我是message",
      //   success: () => {
      //     console.log('执行成功')
      //   }
      // })
      this.$store.dispatch('aUpdate', 'payload').then(res => {
        console.log(res)
        console.log('回调成功')
      })
    },
    Subtraction () {
      this.$store.commit('decrement')
    },
    updataName () {
      this.$store.commit('updataName', 'lisi')
    },
    asyncUpdataName () {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
</style>
