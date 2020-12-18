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

