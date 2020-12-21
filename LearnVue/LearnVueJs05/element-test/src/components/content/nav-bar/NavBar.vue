<template>
  <div id="nav-bar">
    <el-menu
      mode="horizontal"
      class="el-menu-demo"
      text-color="#E6A23C"
      background-color="#324157"
      router="true"
      @select="handleSelect"
      active-text-color="#F56C6C"
      menu-trigger="hover"
    >
      <el-menu-item index="/home">
        <img src="~assets/img/logo.png" alt="" />
      </el-menu-item>
      <el-menu-item class="fill"></el-menu-item>
      <el-menu-item index="/findWork">找工作</el-menu-item>
      <el-menu-item index="/findHome">找房子</el-menu-item>
      <el-menu-item index="/findCar">找车子</el-menu-item>
    </el-menu>
    <div class="nav-user">
      <div v-if="isLogin" class="nav-user-item">
        <login-nav-bar></login-nav-bar>
      </div>
      <div class="nav-user-item" v-else>
        <un-login-nav-bar></un-login-nav-bar>
      </div>
    </div>
  </div>
</template>

<script>
import LoginNavBar from 'commons/nav-bar/LoginNavBar.vue'
import UnLoginNavBar from 'commons/nav-bar/UnLoginNavBar.vue'

export default {
  components: { LoginNavBar, UnLoginNavBar },
  name: "NavBar",
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      console.log(this.$route)
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style scoped>
#nav-bar {
  display: flex;
}

.el-menu-demo {
  flex: 1;
}

.nav-user {
  width: 120px;
  background-color: #324157;
  margin-bottom: 1px;
  display: flex;
}

.nav-user-item {
  align-self: center;
}

.el-menu-demo img {
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-bottom: none;
}

.el-submenu-title:hover {
  background-color: rgba(50, 65, 87, 0) !important;
}

.el-menu-item:hover {
  background-color: rgba(50, 65, 87, 0) !important;
}
.el-menu el-menu-item {
  color: #0000;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
.el-menu-item {
  transition: none;
  font-size: 16px;
}

.el-menu {
  line-height: 100px;
}
</style>
