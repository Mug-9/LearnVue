const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  filters: {
    showPrice (price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    priceSum () {
      let result = 0
      for (let book of this.books) {
        result += book.price
      }
      return result
    }
  },
  methods: {
    increment (index) {
      this.books[index].count++
    },
    decrement (index) {
      this.books[index].count--
    },
    removeClick (index) {
      this.books.splice(index, 1)
    }
  }
})

// const nums = [10, 20, 30, 100, 200, 500, 80]

// //! 1. 得到所有小于100的值
// // * filter ，参数中有一个回调函数，要求返回boolean，boolean为true就把n加入新数组
// // TODO 改变数组的大小，不改变值
// let newNum = nums.filter(function (n) {
//   return n < 100
// })

// // * 箭头可以简化操作
// newNum = nums.filter(n => n < 100)

// //! 2. newNum中的值都*2
// // * map，参数中有一个回调，返回加入新数组中的值
// // TODO 改变数组的值，不改变数组大小
// newNum = newNum.map(function (n) {
//   return n * 2
// })

// // * 用箭头简化
// newNum = newNum.map(n => n * 2)
// console.log(newNum)

// //! 3. 求数组中值的和
// // * reduce 参数中有一个prevalue代表前缀和，初始值为0， n代表当前值，累加后变成数组中的下一个值
// // TODO 对数组中所有内容进行汇总
// let sum = newNum.reduce(function (prevalue, n) {
//   return prevalue + n
// }, 0)

// // * 箭头简化
// sum = newNum.reduce((prevalue, n) => prevalue + n)

// //* 究极套娃写法
// sum = nums.filter(n => n < 100).map(n => n * 2).reduce((prevalue, n) => prevalue + n)
