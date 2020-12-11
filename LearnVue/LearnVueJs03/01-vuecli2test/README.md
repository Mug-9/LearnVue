# vuecli2test

> test vue cli2

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 1 安装`CLI`

`npm install -g @vue/cli`

如果`cli`的版本大于2的话， 还需要拉取`2.x`模板

`npm install -g @vue/cli-init`

## 2 初始化项目

### 2.1 `VUE-CLI 2.x`

在初始化的目录下使用：`vue init webpack my-project`

- `	my-project`是最终项目文件夹的名字，

- `Project name`是真正项目的名字，默认使用`my-project`， 不能包含大写

- `Project description` 项目描述信息，默认`A Vue.js project`

- `Author` 作者信息，默认是全局`.gitconfig`中的信息

- `Vue build` 项目选择`Runtime-only`

- `vue-router` 安装路由
- `ESLint` 规范`js`代码 可选择`standard`和`airbnb`规范，一般看自己的情况
- `unit tests`单元测试，某些公司强制要求写，一般是`NO`
- `e2e test`端到端测试 ,安装`Nightwarch`利用`selenium`或`webfriver`或`phantomjs`等进行自动化测试的框架
- `npm or yarn`以后使用`npm`还是`yarn`,一般`npm`

以上信息存储在`package.json`

### 2.2 `VUE-CLI 3.x`

在初始化的目录下使用：`vue create my-project `

## 3 项目分析

### `package.json`

`package.json`中，

```js
"scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js"
  },
```

#### `build`

`npm run build`使用`node`打包项目

#### `dev`

通过`webpack-dev-server`来搭建本地服务器

### `.editorconfig`

设置编程风格

### `.eslintignore`

`eslint`忽略某些文件

### `.gitignore`

`git`上传时忽略某些文件

### `package.json`和`package-lock.json`

因为`package.json`中的版本是由`^`来安装，所以可能会导致实际安装的版本与`package.json`中的版本不同， `package-lock.json`所做的就是在它们之间做一个映射