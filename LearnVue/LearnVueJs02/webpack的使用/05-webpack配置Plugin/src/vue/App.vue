<template>
  <div>
    <h2 class="title">我是标题</h2>
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
</style>
