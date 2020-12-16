## `Promise`

对异步操作进行封装

### 参数

- resolve： 本身是一个函数
- reject： 本身是一个函数

```js
new Promise((resolve, reject) => {
    
})
```

### then

在promise中使用resolve可以在then方法中，执行要执行的异步操作

```js
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 1000)
}).then(()=>{
    console.log("hello world");
})
```

如果有嵌套的网络异步操作，可以`new`一个`promise`，然后在`then`中操作

```js
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 1000)
}).then(() => {
    console.log('hello world')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}).then(() => {
    console.log('hello vue')
})
```

另一种形式

```js
new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("hello world")
    }, 1000)
}).then(data=>{
    console.log(data);
}, err=> {
    console.log(err);
})
```



### `reject`

成功时调用`resolve`，失败时调用`reject`

### `catch`

当调用`reject`时，`Promise`会执行`catch`

### 使用情况

一般情况下是有异步操作时，使用`Promise`对这个异步操作进行封装

### `Promise`的三种状态

- `pending`：等待状态，比如正在进行网络请求，或者定时器没有到时间
- `fulfill`：满足状态，当我们主动回调了`resolve`时，就处于该状态，并且会回调`.then()`
- `reject`：拒绝状态，当我们主动回调`reject`时，就处于该状态，并且回调`.catch()`

 ### Promise简写

```js
return new Promise((resolve, reject) => {
    resolve(res + '111')
})
```

没有异步操作时可以简写为

```js
return new Promise(resolve => {
    resolve(res + '111')
})
```

还可以简写为

```js
return Promise.resolve(res + '111')
```

`reject`同理也可以简写

```js
return Promise.reject("error message")
```

`reject`也可以用`throw`手动抛出异常

```js
throw "error message"
```



## 多个异步请求

### `all`方法

```js
Promise.all([
    new Promise((resolve, reject) => {
        $ajax({
            url: 'url1',
            success: function (data) {
                resolve(data)
            },
        })
    }),
    new Promise((resolve, reject) => {
        $ajax({
            url: 'url2',
            success: function (data) {
                resolve(data)
            },
        })
    }),
]).then((results) => {})
```

`all`方法，可以传入多个请求`Promise`，当多个请求同时被满足时，`all`方法调用`then`回调，

`results`数组存储多个请求的返回值，下标对应请求下标