<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about">关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/' + userId">用户</router-link>
    <router-link :to="{ path: '/profile', query: { name: '123', age: 12 } }"
      >档案</router-link
    > -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <keep-alive exclude="Profile">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    homeClick () {
      this.$router.push('/home')
      console.log('homeClick')
    },
    aboutClick () {
      this.$router.push('/about')
      console.log('aboutClick')
    },
    userClick () {
      this.$router.push('/user/' + this.userId)
    },
    profileClick () {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 18
        }
      })
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  color: red;
}
</style>
