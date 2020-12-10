import { add, mul } from './js/mathUtil.js'
import { name, age } from './js/info'

require('./css/normal.css')
require('./css/special.less')

const add_answer = add(100, 200)

console.log(add(10, 20))

console.log(add_answer)

console.log(mul(10, 20))

console.log(name)

document.writeln('<h2>你好</h2>')
