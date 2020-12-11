<template>
  <div>
    <h2 class="title">我是标题</h2>
    <h2>我是内容</h2>
    <h2 class="title2">我是内容2</h2>
    <cpn></cpn>
  </div>
</template>

<script>
import Cpn from './Cpn'
export default {
  name: 'App',
  components: { Cpn },

}
</script>
<style scoped>
.title {
  color: green;
}
.title2 {
  color: rgb(10, 10, 104);
}
</style>
