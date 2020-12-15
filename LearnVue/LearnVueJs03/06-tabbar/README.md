## `css` 样式引用

在`assets/css`中创建新的`css`文件

在`main.js`·中通过`require('./assets/css/base.css')`引用（不推荐）

在`App.vue`中通过`@import './assets/css/base.css';`引用



## `TabBar`

在`tabbar`中规定了，导航栏的样式，

在其中添加`slot`插槽来动态接收`tabbaritem`

## `TabBarItem`

在`tabbaritem`中规定样式，

两个`slot`显示`item`图标，一个`slot`显示文字

利用计算属性`isActive`和`v-if`来控制显示图标

利用动态绑定来显示字体的颜色

`slot` 被替换，如果要给`slot`一个属性，那么属性会被替换掉

正确做法时给`slot`包裹一个`div`，给`div`一个属性

```js
<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img src="..//..//assets/img/tabbar/Box.svg" alt="" />
    <div>首页</div> -->
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
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
      return this.$route.path.indexOf(this.path)
    },
    activeStyle () {
      return !this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
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

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>

```

利用`props`来接收从父组件传来的`path`路径，用来根据路由跳转页面

## `mainTabbar`

在`maintabbar`中主要实现导航栏的内容

利用`path`和`activeColor`来传递路径和字体颜色

```js
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img src="../assets/img/tabbar/Home.svg" alt="" slot="item-icon" />
      <img
        src="../assets/img/tabbar/Home-active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img src="../assets/img/tabbar/Option.svg" alt="" slot="item-icon" />
      <img
        src="../assets/img/tabbar/Option-active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img src="../assets/img/tabbar/Basket.svg" alt="" slot="item-icon" />
      <img
        src="../assets/img/tabbar/Basket-active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img src="../assets/img/tabbar/Avatar.svg" alt="" slot="item-icon" />
      <img
        src="../assets/img/tabbar/Avatar-active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar.vue'
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

```



## `app`

子需要导入`maintabbar`即可实现导航栏

```js
<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar.vue'
export default {
  components: { MainTabBar },
  name: 'App'
}
</script>

<style>
@import './assets/css/base.css';
</style>

```

