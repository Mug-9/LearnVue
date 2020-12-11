# `Runtime-Only`和`Rumtime-Compiler`的区别

## 1 `ESLint`

在已经包含`ESLint`的项目中如何关掉`ESLint`，

在`./config/index.js`中找到`useEslint:  true`

修改`true`为`false`

## 2 `Vue`运行过程

`template---(parse)-->abstract syntax tree--(complie)-->render(functions) ----> virtual dom ---->UI`

`vue`中的`template`会经过解析转成`abstract syntax tree(抽象语法树)`，在通过编译装换成`render`函数，`render`函数会形成`virtual dom(虚拟DOM)`，最后`virtual`会转成真实的`UI`

## 3 `Runtime-Compiler` 运行过程

`template --> abstract syntax tree --> render --> virtual dom --> UI`

## 4 `Runtime-Only` 运行过程

`render-->virtual dom-->UI`

`template`在传入`main.js`已经被`vue-template-compiler`渲染成`reander`函数

不存在`template --> abstract syntax tree`这个步骤

## 5 `Runtime-Only`和`Rumtime-Compiler`的区别

|  `runtime-only`  | `runtime-compiler` |
| :--------------: | :----------------: |
|     性能更好     |      性能较差      |
| 需要的处理代码少 |  需要的处理代码多  |

## 6 `render`

### 6.1 普通用法

```js
render: function(createElement) {
    return createElement('h2', {class: 'box'}, 'abcd')
}
```

`render`返回的是一个对象，可以替换到`index.html`中的那个`div` 

### 6.2 传入组件对象

```js
render: function(createElement) {
    return createElement(cpn)
}
```

`cpn`是一个组件，效果跟上面一样

### 6.3 render好处

由于`Vue`运行的流程，通过`render`进行渲染组件，不需要进行`template`的步骤直接进入`virtual dom`中,性能提升

在开发依赖中存在`vue-template-compiler`可以渲染`template`，而在运行时的时候，项目中已经没有`template`，所以不需要再渲染`template`，在运行依赖中只存在`vue`依赖.

