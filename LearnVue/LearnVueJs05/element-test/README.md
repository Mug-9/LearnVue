# 使用`element-Plus`

https://element-plus.gitee.io/#/zh-CN

安装

`npm install element-plus --save`

完整引入

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

按需引入

借助[babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)

安装`babel-plugin-component`

`npm install babel-plugin-component -D`

将`babel.config.js`添加

```js
"plugins": [
    [
      "component",
      {
        "libraryName": "element-plus",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
```



