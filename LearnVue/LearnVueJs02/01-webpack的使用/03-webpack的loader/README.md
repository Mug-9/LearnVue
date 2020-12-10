## 1 安装loader

使用

`npm install --save-dev style-loader` 解析样式

`npm install --save-dev css-loader` 加载css

`npm install --save-dev less-loader less` 解析less

`npm install --save-dev url-loader` 解析url文件

`npm install --save-dev babel-loader@7 babel-core babel-preset-es2015` 转换`ES6`语法

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
    filename: 'bundle.js',
    // img会找到编译后存储在dist中的图片
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责加载，不负责解析
        // style-loader负责将样式添加到DOM
        use: ['style-loader', 'css-loader']
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
              // 当加载图片小于limit会将图片编译成base64字符串
              // 当大于limit时，会使用file-loader
              limit: 13000
            }
          }
        ]
      }
    ]
  }
}

```

## 3 css使用

写好文件后在`main.js`中导入

`require('./css/normal.css')
require('./css/special.less')`

## 4 配置

### 4.1 img配置

使用`npm install url-loader --save-dev`来安装`url-loader`

然后在`webpack.config.json`来配置

```js
{
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
}
```

`test`代表目标文件，`loader`代表使用的`loader`，`options`代表一些配置

`limit`代表使用图片大小的限制，如果超过限制使用`file-loader`来加载图片，否则使用`base64`字符串编码

如果没有`file-loader`使用`npm install file-loader --save-dev`来安装

`name`关键字代表打包生成的`img`存储的地方，存在`img`文件夹，`[name]`为`img`原有的名字，`hash:8`为`8`位`hash`值，`ext`为原有后缀

## 4.2 less配置

使用`npm install --save-dev less-loader less`来安装`less`

在配置文件中加入

```js
 {
     	// test 目标文件
     	test: /\.less$/,
         use: [{
             loader: "style-loader"
         }, {
             loader: "css-loader"
         }, {
             loader: "less-loader"
         }]
 }
```

### 4.3 css配置

使用`npm install --save-dev style-loader`来安装 `css`解析器

使用`npm install --save-dev css-loader` 来安装`css`加载器

在配置文件中加入

```js
{
        test: /\.css$/,
        // css-loader只负责加载，不负责解析
        // style-loader负责将样式添加到DOM
        use: ['style-loader', 'css-loader']
      },
```

### 4.4 babel配置

`babel`将`ES6`的语法转成`ES5`的语法

使用`npm install --save-dev babel-loader@7 babel-core babel-preset-es2015 `来安装`babel`

在配置文件中加入

```js
{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
```

`exclude`: 只需要打包`src`中的`js`，把`node_modules`和`bower_components`排除

