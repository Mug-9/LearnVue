<template>
  <div>
    <h2>我是用户界面</h2>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId () {
      return this.$route.params.userId
    }
  },
  created () {
    console.log('create')
  }
}
</script>

<style scoped>
</style>
