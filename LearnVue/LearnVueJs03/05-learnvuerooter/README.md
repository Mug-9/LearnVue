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

