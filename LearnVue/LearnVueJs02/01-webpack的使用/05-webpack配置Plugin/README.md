## 1 Plugin

##  1.1版权插件

在`webpack.config.js`中

```js
const webpack = require('webpack')
//...
plugins: [
    //...
    new webpack.BannerPlugin('最终版权归Mug-9所有')
  ]
```

## 1.2 打包html

使用`npm install html-webpack-plugin --save-dev`来安装

在`webpack.config.js`中

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
//...
plugins: [
    //...
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
```

由于`index.html`被打包到`dist`文件下，所以当初打包时的`publicpath`就不需要，注释掉即可

## 2 搭建本地服务器

### 2.1 安装 `webpack-dev-server`

使用`npm install webpack-dev-server --save-dev`来安装

### 2.2 配置文件

在`webpack.config.js`中

```js
 devServer: {
    contentBase: './dist',
    // inline : 是否实时监听
    inline: true,
    // 页面自动打开
    open: true
  }
```

### 2.3 配置脚本

在`package.json`中添加

```js
"scripts": {
    //...
    "dev": "webpack-dev-server"
  },
```

注意`webpack-cli 4.x`启动时有问题，最好换成`3.x`

#### webpack-cli 4.x 

```js
"scripts": {
    //...
    "dev": "webpack serve"
  },
```

使用`serve` 来启动`webpack-dev-server`

### 2.4 使用

 在控制台使用 `npm run dev`就可以启动本地服务器了

