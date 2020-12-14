# 前后端

## 后端

### 后端渲染

客户将网页`url`发送给服务器，服务器利用`html+css+java`将页面渲染完成后再发给客户端浏览器，整个页面的渲染在后端完成

### 后端路由

后端路哟处理`url`和页面之间的映射关系

## 前后端分离

### 前端渲染

用户输入`url`，先去静态资源服务器请求`html+css+js`，然后在通过`ajax`去服务器请求数据,请求到的数据通过`js`前端自己来渲染

浏览器中显示的网页中的大部分内容， 都是由前端写的`js`代码在浏览器中执行，最终渲染出来的网页

## 前端

`SPA(单页富应用)`页面，整个网页只有一个`html`页面

### 	前端路由

管理`url`到页面的映射

客户浏览器请求资源时，从静态资源服务器中请求到所有的`html+css+js`资源，在用户请求不同的页面时，通过前端路由来把资源抽取出来，渲染到页面上

改变`url`，但是页面不进行整体的刷新

# 前端路由

## 更改`url`，而页面不整体刷新

### `hash`

前端路由会监听`hash`的改变，从前端路由的映射中，选择渲染的组件并渲染到页面上

### `pushState`

`html5` 中的`history`也可以改变`url`，而不整体刷新

`history.pashState({}, '', 'home')`表示向栈中压入一个元素

`history.back()`移除栈顶

### `go`

`history`中`go`可以选择栈中的元素

#### `replaceState`

`html5`中`replaceState`也可以改变`url`，而不需要整体刷新

# `Vue-router`路由

使用`cli`时勾选`router`即可安装

## `router`配置

在`router\index.js`中

在导出中的`routes`配置路由信息

导出的`router`挂载到`main.js`中

## 使用`vue-router`步骤

### 1 创建路由组件

```js
<template>
  <div>
    我是首页
    <h2>我是首页内容</h2>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
</style>
```



### 2 配置路由映射： 组件和路径映射关系

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ],
  mode: 'history'
})

```

`mode`设置`url`的显示模式,默认为`hash`,`url`显示中带`#`

`history`不带`#`

### 3 使用路由： 通过`router-link` 和` router-view`

```js
<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### `router-link`

#### `to`

`router-link`中的`to`属性,可以改变`url`的路径

#### `tag`

`router-link`默认渲染成`a`标签, 可以通过`tag`属性,将`router-link`渲染成其他的标签

```js
<router-link to="/home" tag="button">首页</router-link>
<router-link to="/about">关于</router-link>
```

#### `replace`

`router-link`默认属性`pushState`,通过`replace`属性可以将`router-link`的属性改为`replaceState`

```js
<router-link to="/home" tag="button" replace>首页</router-link>
<router-link to="/about">关于</router-link>
```

`replace`不需要写参数

#### `class`

`router-link`处于活跃状态时,会有默认`class=router-link-active`

通过`router-link-active`可以控制`router-link`处于活跃状态时的状态,

在`router/index.js`中添加`linkActiveClass:'active'`,可以给更改`router-link-active`的状态

```js
export default new Router({
 //...
  linkActiveClass: 'active'
})
```

### `click`事件与`router-link`

```js
<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about">关于</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick () {
      this.$router.push('/home')
      console.log('homeClick')
    },
    aboutClick () {
      this.$router.push('/about')
      console.log('aboutClick')
    }
  }

}
</script>

```

通过`click`事件也可以完成`router-link`的功能

### `User`界面动态绑定

个人界面通过`v-bind`动态绑定`url`成`/user/userId`

`User.vue`

```js
<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about">关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    homeClick () {
      this.$router.push('/home')
      console.log('homeClick')
    },
    aboutClick () {
      this.$router.push('/about')
      console.log('aboutClick')
    }
  }

}
</script>

<style>
.active {
  color: red;
}
</style>

```

`router/index.js`

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:userId',
      component: User
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

```

### 获取用户`id`

在组件中可以使用`this.route.params.userId`

注意这个`userId`必须与路由中配置的`path`相同

`router/index.js`

```js
{
    path: '/user/:userId',//因为这里是userId,所以下面也是userId,这里是aaa下面也得是aaa
        component: User
}
```

`User.vue`

```JS
<template>
  <div>
    <h2>我是用户界面</h2>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId () {
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>
</style>

```

## 路由懒加载

#### 打包文件

将项目进行打包`npm run build`会生成一个`dist`文件夹,在文件夹中的`static/js`中存在3个文件

- `app.js`: 当前应用程序开发的所有代码
- `manifest.js`: 为打包的代码做底层支撑
- `vendor.js`: 第三方提供的代码

#### 路由懒加载

随着项目的开发`app.js`会越来越大,客户端请求时可能会需要花费很长的时间

如果我们能把不同路由对应的组件分割成不同的代码块,然后当路由被访问的时候才加载对应组件,这样就更加高效了

#### 懒加载写法

```js
const Home = () => import('..//components/Home')
```

