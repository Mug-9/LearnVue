## 划分目录结构

```
- src
	- assets
	- common //公共的js文件
	- components //小组件
		- common // 公共组件
		- content // 项目组件
	- network // 封装的网络函数
	- router 
    - store
    - views
```

## 引入两个`css`文件

使用`npm install --save normalize.css`下载`normalize.css`文件，在`node_models`中找到`normalize.css`，`copy`到`/assets/css`中

在需要的`css`文件中使用`@import 'normalize.css.path'`来导入

在`/assets/css`中新建`base.css`文件

`css`文件中`base.css`是基础`css`文件，`normalize.css`是引用的第三方`css`，

有其他的`css`文件可以后期添加

### `css` 语法

使用`：root`获取`root`

定义变量： `--large-size: 50px`

定义了`large-size`为`50px`，在其他的`css`样式中可以直接使用`large-size`

```css
:root { //定义变量
  --color-text: #666;
  --color-high-text: #ff5777;
  --color-tint: #ff8198;
  --color-background: #fff;
  --font-size: 14px;
  --line-height: 1.5;
  --large-size: 50px;
}
body {//使用变量
  font-family: 'Cascadia Code';
  user-select: none;
  background: var(--color-background);
  color: var(--color-text);
  width: 100vw;
}
```

## 配置

### 别名

创建`vue.config.js`

```js
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('./src/assets'),
        'commons': resolve('./src/commons'),
        'components': resolve('./src/components'),
        'common': resolve('./src/components/common'),
        'content': resolve('./src/components/content'),
        'views': resolve('./src/views'),
      }
    },
  }
}
```

### `.editconfig`

添加`editconfig`，配置项目的编码风格

```js
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

## 错误与修改

在`cli3.x`中，淘汰了`slot`，改用`v-slot`，所以在我们的`maintagbar`中需要将`slot`改成`v-slot`，而`v-slot`必须写在`template`中，我们我们的最终代码是

```js
<tab-bar-item path="/home">
      <template #item-icon> // 相当于slot中的slot="item-icon"
        <img src="~assets/img/tabbar/Home.svg" alt="Home" />
      </template> //slot 组件必须包裹在template中
      <template #item-icon-active>
        <img src="~assets/img/tabbar/Home-active.svg" alt="Home" />
      </template>
      <template #item-text>
        <div slot="item-text">首页</div>
      </template>
    </tab-bar-item>
```

修改了`v-slot`以后，发现图标并没有按照预定的样式显示，这时因为`vue`的规范，未在虚拟`dom`中渲染的元素无法修改样式,`img`一开始并不存在在`slot`样式中，所以无法修改样式，

解决方案：

- 去掉`style`标签中的`scoped`属性
- 使用`:deep()`

```js
.tab-bar-item:deep(img) {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
```

