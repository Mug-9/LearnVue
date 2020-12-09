## 1 安装loader

使用

`npm install --save-dev style-loader`

`npm install --save-dev css-loader`

来进行安装

## 2 配置 `webpack-config.js`

```js
const path = require('path')


module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责加载，不负责解析
        // style-loader负责将样式添加到DOM
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

```

## 3 css使用

写好`css`文件后在`main.js`中导入

`require('./css/normal.css')`

