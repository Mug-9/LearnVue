## 1 安装Vue依赖

使用`npm install vue --save`来安装`vue`，非开发版本

## 2 在js中应用Vue

`import Vue from 'vue'`

## 3 问题

`vue`在构建发布版本时，构建了`runtime-only`和`runtime-complier`

`runtime-only`不可以在代码中有任何的`template`，包括主组件

`runtime-compiler`可以有`template`

## 4 解决方法

在`webpack.config.js`中添加配置为`vue`指定版本

```js
resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
```

## 5 Vue中template的关系

在`main.js`中`new Vue`不需要创建一个变量来接收，

在实际开发时，开发人员并不希望频繁修改`index.html`文件，所以一般`index.html`文件中只有一个

```js
<div id="app"></div>
```

### 5.1 原生tmeplate

通过`template`来实现`app`的内容

```js
new Vue({
  el: '#app',
  data: {
    message: 'hello Vue'
  },
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnclick">按钮</button>
    </div>
  `,
  methods: {
    btnclick () {
      console.log("按钮被点击")
    }
  }
})
```

### 5..2 封装template

通过`npm install --save-dev vue-loader vue-tmeplate-compiler`来安装`vue`的`loader`

在`webpack.config.js`中添加

```js
{
    test: /\.vue$/,
        use: {
            loader: 'vue-loader'
        }
}
```

这时`npm run build`如果出现

```js
ERROR in ./src/vue/App.vue
Module Error (from ./node_modules/vue-loader/lib/index.js):
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
```

那么可以在`webpack.config.js`中加入

```js
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // ...
  plugins: [
    new VueLoaderPlugin()
  ]
}
```

## 6 template

```js
<template>
  <div>
    <h2 class="title">我是标题</h2>
    <cpn></cpn>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
  name: 'App',
  components: { Cpn },

}
</script>
<style scoped>
.title {
  color: green;
}
</style>

```

`template`中写模板，`script`中导出一个匿名对象，这里也可以导入其他的组件，`style scope`则是样式

## 7 导入时省略后缀

在`webpack.config.js`中加入

```js
resolve: {
    // ...
    extensions: ['.css', '.js', '.vue'],
  },
```

