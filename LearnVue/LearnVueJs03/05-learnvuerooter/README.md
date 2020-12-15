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

是`route`不是`router`

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

### 嵌套路由

通过`/home/news`和`/home/message`访问不同的页面

#### `children`

在`router/index.js`中，在`home`中，加上`children`属性

```js
{
      path: '/home',
      component: () => import('..//components/Home'),
      children: [
        {
          path: 'news',
          component: () => import('..//components/HomeNews')
        },
        {
          path: 'message',
          component: () => import('..//components/HomeMessage')
        }
      ]
    },
```

#### 子路由的显示

在`/components/Home.vue`中，加上子路由的显示与子路由的跳转

```js
<div>
    我是首页
    <h2>我是首页内容</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
```

注意：`to`属性，必须要加完整的路径，否则会跳转错误

#### 子路由默认值

跟上面的默认值类似

```js
{
    path: '',
        redirect: 'news'
},
```

### 路由之间传递参数

#### `params`方式

- 配置路由格式： `/router/:id`
- 传递方式： 在`path`后面跟上对应的值
- 传递后形成的路径: `/router/123`, `/router/abc`
- 使用`this.$params.对应值`，就可以取得传递的值

#### `query`方式

- 配置路由格式: `/router` ，普通配置
- 传递方式： 对象中使用`query`的`key`作为传递方式
- 传递后形成的路径: `/router?id=123`, `/router?id=abc`

#### 使用query传递

在router-link中使用对象来传递

```js
<router-link :to="{ path: '/profile', query: { name: '123', age: 12 } }"
      >档案</router-link
```

`:to`，使用`v-bind`来传递一个对象，在这个对象中使用一个`query`对象来传递参数

#### 使用`query`取出

```js
<div>
    <h2>我是profile组件</h2>
<h2>{{ $route.query.name }}</h2>
</div>
```

在`profile.vue`页面使用`route.query`可以来取出参数

#### `onclick`传递

```js
<button @click="userClick">用户</button>
<button @click="profileClick">档案</button>
```

```js
userClick () {
    this.$router.replace('/user/' + this.userId)
},
    profileClick () {
        this.$router.push({
            path: '/profile',
            query: {
                name: 'kobe',
                age: 18
            }
        })
    }
```

#### `router`和`route`

`route`是当前处于活跃的路由

`router`是`router`导出的一个对象

所有组件都继承自`Vue`原型

# 导航守卫

可以监听页面的跳转，并在页面跳转期间做一些事情

## 生命周期函数

### `create`

当组件被创建时回调

### `mounted`

组件被创建后，组件的内容被加载时回调

### `update`

当页面更新时回调

## 导航守卫

重写`befroeEach`函数，`beforeEach`就是监听路由之间的跳转

```js
router.beforeEach((to, from, next) => {
    //从from路由 跳到to 路由
  document.title = to.meta.title
  next()
})
```

`next` 可以使跳转可以进行下去，可以使用`next('/')`来控制跳转页面

每个路由的`meta`属性，可以给路由添加参数

但是当有嵌套路由存在时，使用`meta`属性找不到`title`，

可以使用`matched`属性

```js
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
```

### 前置守卫

`beforeEach`在跳转前回调

### 后置守卫

`afterEach`在跳转后 回调

### 路由独享守卫

在路由内定义的守卫，只有在路由活跃时才起作用的守卫函数

### 组件内守卫

在组件内定义的守卫

#### `keep-alive`

`keep-alive`时`Vue`内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染

需求： `home`页面显示`message`组件，在页面跳转后，`home`页面显示的还是`message`组件

- 用`keep-alive`把`router-view`包裹住
- 在`router/index.js`中取消`home`的缺省值
- 在`Home.vue`，`data`中添加`path`路径，设置默认路径

- 在`Home.vue`中，实现`activated()`方法，实现当页面处于`actived`时，跳转至`path`
- 在`Home.vue`中，实现组件内守卫，实现`beforeRouteLeave`方法，在离开页面时记录当前的`path`

```js
<keep-alive>
    <router-view />
</keep-alive>
```

```js
data () {
    return {
      path: '/home/news',
    }
  },
  activated () {
    this.$router.push(this.path)
  },
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path
    next()
  }
```

#### `activated`和`deactivated`

`activated`和`deactivated`函数，只有在`keep-alive`里面才有效

#### `keep-alive`重要属性

- include  - 字符串或正则表达式，只有匹配的组件会被缓存
- exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存

```js
<keep-alive exclude="Profile">
    <router-view />
</keep-alive>
```

