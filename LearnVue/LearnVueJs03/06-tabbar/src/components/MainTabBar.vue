<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img src="~assets/img/tabbar/Home.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/Home-active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img src="~assets/img/tabbar/Option.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/Option-active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img src="~assets/img/tabbar/Basket.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/Basket-active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img src="~assets/img/tabbar/Avatar.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/Avatar-active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/tabbar/TabBar.vue'
import TabBarItem from './tabbar/TabBarItem.vue'
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>
