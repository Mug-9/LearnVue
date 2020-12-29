# 网络请求

## `Ajax`

传统的`Ajax`是基于`XMLHttpRequest(XHR)`

由于 配置和调用方式非常混乱，编码起来看起来非常蛋疼，所以真实开发很少直接使用，

## `jQuery-Ajax`

相对于传统`Ajax`非常好用

但是`Vue`不是用`jQuery`

## `Vue-resource`

相对于`jQuery`小很多，

但是 在`Vue2.0`推出后，`Vue`作者在`Github`的`Issues`中说明去掉`vue-resource`，并且不再更新

这意味着`vue-resource`不在支持新版本，也不再继续更新和维护

## `axios`

### 功能特点

- 在浏览器中发送`XMLHttpRequests`请求
- 在`node.js`中发送`http`请求
- 支持`Promise API`
- 拦截请求和响应
- 转换请求和响应数据
- 等等

### 支持多种请求方式

- `axios(config)`
- `axios.request(config)`
- `axios.get(url[,  config])`
- `axios.delete(url[, config])`
- `axios.head(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`

### 安装

使用`npm install axios --save`进行安装

### 使用

导入`axios`包，发送请求

```js
import axios from 'axios'
axios({
  url: 'http://httpbin.org/#/'
}).then(res => {
  console.log(res)
})
```

`axios(config)`默认发送`get`请求

使用`method`方法可以规定发送`get`还是`post`请求

```js
axios({
  url: 'http://httpbin.org/#/',
  mothod: 'post'
}).then(res => {
  console.log(res)
})
```

#### 发送多个请求

```js
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
}).then(res => {
  console.log(res)
})
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  mothod: 'get'
}).then(res => {
  console.log(res)
})
```

写两个`axios`，只发送一个`get`

### 发送参数

#### 封装`request`类

```js
import axios from 'axios'
import qs from 'qs'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://192.168.0.105:8888/api/',
    timeout: 5000,
  })

  instance.interceptors.request.use(config => {
    console.log(config)
    if (config.method == "POST") {
      config.data = qs.stringify(config.data)
    }
    return config
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}
```

#### `GET` 请求

```js
import { request } from './request'

//传参传入字典
export function getOnlineNumbers (data) {
  return request({
    method: 'get',
    url: 'online_number',
    params: data,
  })
}

```

#### `POST`请求

```js
import { request } from './request'

//传参传入formData
export function formLogin (config) {
  return request({
    method: 'post',
    url: 'login',
    data: config,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
```

#### 朴素写法

```js
axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'pop',
    page: 1
  },
  mothod: 'get'
}).then(res => {
  console.log(res)
})
```

### 并发

#### `axios` 并发

```js
axios.all([
  axios(),
  axios()
]).then(res=> {
  
})
```

`all`方法会在数组内的网络请求都完成后调用`then`方法进行处理

### `axios`全局配置

设置默认值(公共配置)

```js
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios.all([
  axios({
    url: '/home/multidata',
  }),
  axios({
    url: '/home/data',
    params: {
      type: 'pop',
      page: 5
    }
  })
]).then(results => {
  console.log(results)
})
```

`url = baseurl+url`

## `axios` 实例 

当全局配置不在满足需求是，可以创建`axios`实例来分别配置

```js
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

instance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
})

instance1({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res)
})

```

每个实例有自己的配置

#### `axios` 封装

创建`network`文件夹,创建`request.js`文件

导入`axios`

```js
import axios from 'axios'
```

创建`axios`实例

```js
const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
})
```

封装

```js
export function request (config, success, failure) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance(config).then(res => {
    success(res)
  }).catch(err => {
    failure(err)
  })
}
```

调用者传入success和failure函数，request将网络请求的结果通过回调函数返回给调用者

```js
import { request } from './network/request'

request({
  url: '/home/multidata'
}, res => {
  console.log(res)
}, err => {
  console.log(err)
})
```

#### 关于回调

可以在传参时，传入的对象中加入success和failure函数

```js
export function request (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance(config.baseConfig).then(res => {
    config.success(res)
  }).catch(err => {
    config.failure(err)
  })
}
```

调用时

```js
import { request } from './network/request'
request({
  baseConfig: {
    url: '/home/multidata'
  },
  success (res) {
    console.log(res)
  },
  failure (err) {
    console.log(err)
  }
})
```

#### 另一种方案

使用promise嵌套axios来实现

```js
export function request (config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    instance(config).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })
  })
}
```

```js
import { request } from './network/request'
request({
  url: '/home/multidata'
}).then(res=> {
  console.log(res);
}).catch(err=>{
  console.log(err);
})
```

#### 另另一种

直接`return instance`，因为`instance`实例本身就是一个`promise`，所以直接`return`

```js
export function request (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  return instance(config)
}
```

### `axios`拦截器

用于我们在发送每次请求或者得到应答后，进行相应的处理

四种拦截方法

- 请求成功拦截

  作用： 

  - 比如`config`中的一些信息不符合服务器的要求，在拦截器中修改
  - 比如每次发送网络请求时，都希望在界面中显示一个请求的图标
  - 默写网络请求(比如登录(`token`))，必须携带一些特殊信息

- 请求失败拦截

- 响应成功拦截
- 响应失败拦截

拦截器可以拦截全局和拦截实例

#### 请求拦截

拦截器的use函数有两个参数，请求成功调用的方法, 请求失败调用的方法

```js
 instance.interceptors.use(config=>{
	// 请求成功
        console.log(config)
        return config
  }, err=>{
    // 请求失败
  })
```

请求成功后拦截的`config`需要将`config`返回，否则接收的时候接收不到`config`，造成报错

#### 响应拦截

响应拦截跟请求拦截类似

```js
 instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })
```

