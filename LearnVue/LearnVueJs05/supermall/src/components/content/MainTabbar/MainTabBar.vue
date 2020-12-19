<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template #item-icon>
        <img src="~assets/img/tabbar/Home.svg" alt="Home" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/Home-active.svg" alt="Home" />
      </template>
      <template #item-text>
        <div slot="item-text">首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category">
      <template #item-icon>
        <img src="~assets/img/tabbar/Option.svg" alt="Option" />
      </template>
      <template #item-icon-active>
        <img
          src="~assets/img/tabbar/Option-active.svg"
          alt="Option"
          slot="item-icon-active"
        />
      </template>
      <template #item-text>
        <div slot="item-text">分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <template #item-icon>
        <img src="~assets/img/tabbar/Basket.svg" alt="Basket" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/Basket-active.svg" alt="Home" />
      </template>
      <template #item-text>
        <div slot="item-text">购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template #item-icon>
        <img src="~assets/img/tabbar/Avatar.svg" alt="Avatar" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/Avatar-active.svg" alt="Home" />
      </template>
      <template #item-text>
        <div slot="item-text">我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'common/tabbar/TabBar'
import TabBarItem from 'common/tabbar/TabBarItem.vue'
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.img-style {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
