## 1 安装webpack

`npm install webpack -g`

`-g`代表全局安装

这时基本可以用，但是有时`webpack -v` 会提醒安装`webpack-cli`

这时选择`no`，然后自行安装`npm install webpack-cli -g`

安装结束就可以用了

## 2 webpack使用

在要打包的目录下

-- dist

-- src

​	-- main.js

-- index.html

最新版本

`webpack ./src/main.js -o ./dist`

版本4

`webpack ./src/main.js -o ./dist/bundle.js`

版本3

`webpack ./src/main.js ./dist/bundle.js`

## 3 项目中依赖的包

使用`npm init`来生成`package.json`

在获取依赖时使用`npm install`

## 4 webpack默认配置

新建`webpack.config.js`文件

在其中写入

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
}

```

此后只需调用`webpack `即可对文件进行打包

## 5 `npm run`映射

在`package.json`中的`script`可以将命令映射到`npm run`中

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```

这样，我们只需要执行`npm run build`就可以执行`webpack`命令了

## 6 局部安装webpack

用`cmd`使用`webpack`会优先在全局寻找`webpack`而不同的项目所依赖的`webpack`不一定相同，`npm run`可以优先在本地寻找，所以使用`npm run`可以保证开发时依赖不变

```js
"devDependencies": {
    "webpack": "^5.10.0"
  },
  "dependencies": {
    "webpack-cli": "^4.2.0"
  }
```

