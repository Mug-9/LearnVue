## 箭头函数

一种定义函数的方式

### 1 function

```js
const aaa = function () {}
```

### 2 对象自变量

```js
const obj = {
    bbb: function () {},
    bbb() {

    }
}
```

### 3 箭头函数

```js
const ccc = (参数列表) => {
}
```

无参形式

```js
const cc = () => {}
```

有参形式

```js
// 1.参数问题
// 1.1 放入2个参数
const sum = (num1, num2) => {
    return num1 + num2
}
// 1.2 放入1个参数，可以省略括号
const power = num => {
    return num * num
}
```

函数中

```js
// 2. 函数中
// 2.1 函数代码块中有多行代码
const test = () => {
    console.log('hello')
    console.log('world')
}
// 2.2 函数代码中只有一行代码，自动返回结果
const mul = (num1, num2) => num1 * num2
```

