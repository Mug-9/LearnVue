//! 导入
import { flag, sum } from "./aaa.js"
import { num1, mul } from "./aaa.js"
import { c } from "./aaa.js"

//! 导入default是不用加{}，
import addr from "./aaa.js"

//! 全部导入
import * as aaa from "./aaa.js"

console.log(aaa.flag)

if (flag) {
  console.log("haha")
}
console.log(sum(10, 100))
console.log(mul(10, 100))

const C = new c()
C.run()

// console.log(addr)
addr("abcd")
