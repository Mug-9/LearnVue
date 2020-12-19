<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon" /></div>
    <div class="item-icon" v-else>
      <slot name="item-icon-active" />
    </div>
    <div :style="activeStyle"><slot name="item-text" /></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) == 0
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(to.path, from.next)
    next()
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item:deep(img) {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
