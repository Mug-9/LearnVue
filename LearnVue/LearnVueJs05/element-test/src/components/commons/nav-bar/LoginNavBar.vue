<template>
  <div>
    <el-dropdown>
      <el-avatar
        @click="itemClick"
        :size="52"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="profileClick">个人信息</el-dropdown-item>
          <el-dropdown-item @click="storeClick">收藏</el-dropdown-item>
          <el-dropdown-item @click="logClick">记录</el-dropdown-item>
          <el-dropdown-item @click="logoutClick">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "login-nav-bar",
  methods: {
    profileClick () {
      this.$router.push('/profile')
    },
    storeClick () {
      this.$router.push('/sotre')
    },
    logClick () {
      this.$router.push('/log')
    },
    logoutClick () {
      this.$router.push('/logout')
    }
  }
}
</script>

<style scoped>
</style>
