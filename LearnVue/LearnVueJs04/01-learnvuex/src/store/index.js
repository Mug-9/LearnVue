import { createStore } from 'vuex'
import { INCREMENT } from './mutations-types'

const moduleB = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName (state, payload) {
      state.name = payload
    }

  },
  actions: {
    aUpdateName (context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000)
    }

  },
  getters: {
    fullName (state) {
      return state.name + '111'
    },
    fullName2 (state, getters) {
      return getters.fullName + '222'
    },
    fullName3 (state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  }
}


export default createStore({
  state: {
    counter: 1000
  },
  mutations: {
    [INCREMENT] (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    }
  },
  getters: {
    powerCounter (state) {
      return state.counter * state.counter
    }
  },
  actions: {
    // aUpdate (context, payload) {
    //   setTimeout(() => {
    //     context.commit(INCREMENT)
    //     console.log(payload.message)
    //     payload.success()
    //   }, 1000)
    // }
    aUpdate (context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        resolve('1111')
      })
    }
  },
  modules: {
    a: {
      state: {},
      mutations: {},
      actions: {},
      getters: {}
    },
    b: moduleB
  }
})
