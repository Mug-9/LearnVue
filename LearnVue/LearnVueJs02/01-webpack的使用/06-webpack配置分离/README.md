## 1 安装`webpack-merge`

使用`npm install webpack-merge --save-dev`

## 2 分割配置文件

将配置文件分成3份`base.config.js`,`prod.config.js`,`dev.config.js`

`base.config.js` 表示公共的配置文件

```js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // img会找到编译后存储在dist中的图片
    //publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责加载，不负责解析
        // style-loader负责将样式添加到DOM
        use: ['vue-style-loader', 'style-loader', 'css-loader']
      }, {
        // test 目标文件
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载图片小于limit会将图片编译成base64
              // 当大于limit时，会使用file-loader
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }, {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.css', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归Mug-9所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
  // devServer: {
  //   contentBase: './dist',
  //   // inline : 是否实时监听
  //   inline: true,
  //   // 页面自动打开
  //   open: true
  // }
}
```



`prod.config.js`表示上线的配置文件

```js
module.exports = {

}
```



`dev.config.js`表示本地测试的配置文件

```js
module.exports = {
  devServer: {
    contentBase: './dist',
    // inline : 是否实时监听
    inline: true,
    // 页面自动打开
    open: true
  }
}
```

## 3 合并配置文件

在`dev.config.js`中加入

```js
const WebpackMerge = require('webpack-merge')
const BaseConfig = require('./base.config')

module.exports = WebpackMerge(BaseConfig, {
  devServer: {
    contentBase: './dist',
    // inline : 是否实时监听
    inline: true,
    // 页面自动打开
    open: true
  }
})
```

`prod.config.js`中类似

## 4 路径设置

由于`base.config.js`在`/buid`下，所以打包的文件也会在`/build`下，更改`base.config.js`的打包路径使得打包的文件存在`/dist`下

```js
 output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // img会找到编译后存储在dist中的图片
    //publicPath: 'dist/'
  },
```

