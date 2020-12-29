<template>
  <div>
    <el-dropdown>
      <el-avatar @click="itemClick" :size="52" src="" :fit="fill"></el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="loginClick">登录</el-dropdown-item>
          <el-dropdown-item @click="registerClick">注册</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: "nav-user",
  data () {
    return {
      path: '/profile'
    }
  },
  methods: {
    itemClick () {
      console.log('item click')
      if (this.$store.isLogin) {

      } else {
        ElMessage.error('请先登录')
      }
    },
    loginClick () {
      this.$router.push('/login')
    },
    registerClick () {
      this.$router.push('/register')
    }
  }

}
</script>

<style scoped>
</style>
