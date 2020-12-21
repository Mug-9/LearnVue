<template>
  <div>
    <nav-bar class="home-nav">
      <template #center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
    <ElButton>你好</ElButton>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import { getHomeMultiData } from 'network/home'


export default {
  name: "Home",
  components: {
    NavBar
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    getHomeMultiData().then(res => {
      this.banners = res.data.banner
      this.recommends = res.data.recommend
      console.log(res)
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
