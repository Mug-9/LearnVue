var flag = true
function sum (num1, num2) {
  return num1 + num2
}

//! 导出方法一
export {
  flag, sum
}

//! 导出方法二
export var num1 = 100

//! 导出函数/类

export function mul (num1, num2) {
  return num1 * num2
}

export class c {
  run () {
    console.log("i'm running!")
  }
}

//! 导出不命名方法或者由导入者命名的变量, 每个js只能有一个default导出
// const address = "北京"
// export default address

//! 导出方法时，不需要命名
export default function (arg) {
  console.log(arg)
}

