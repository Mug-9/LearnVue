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



