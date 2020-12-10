<template>
  <div>
    <h2>我是标题</h2>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Cpn',
  data () {
    return {
      message: "Cpn中的组件"
    }
  }
}
</script>

<style scoped>
</style>
