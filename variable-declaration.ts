function foo() {
  // okay to capture 'a'
  return a
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo()

let a


/**
 * 解构
 */
// 数组
let input = [1, 2]
let [first, second] = input
console.log(first)  // 1
console.log(second) // 2

let inputs: [number, number] = [1, 2]
function f([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}
f(inputs)

let [firsts, ...rest] = [1, 2, 3, 4, 5]
console.log(firsts) // 1
console.log(rest)  // [2, 3, 4]

let [one] = [1, 2, 3, 4, 5]
let [, two] = [1, 2, 3, 4, 5]
console.log(one, two)  // 1 2

// 对象
let o = {
  a: 'foo',
  b: 3,
  c: 'bar'
}
let { a, b } = o

let { a2, ...passthrough } = o
let total = passthrough.b + passthrough.c

// 属性重命名
let { a: newName1, b: newName2 } = o
let {a, b}: {a: string, b: number} = o

// 默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject
}

// 函数声明
type C = { a: string, b?: number }
function fun({ a, b }: C): void {
  // ...
}

function func({ a = '', b = 0 } = {}): void {
  // ...
}

function funct({ a, b = 0 } = { a: '' }): void {
  // ...
}
funct({ a: 'yes' }) // OK, 默认 b = 0
funct()             // OK, 默认 a: '', b = 0
funct({})           // Error, 一旦传入参数则 a 是必须的


/**
 * 展开
 */
// 数组
let fir = [1, 2]
let sec = [3, 4]
let bothPlus = [0, ...fir, ...sec, 5]

// 对象
let defaults = { food: 'spicy', price: '$10', ambiance: 'noisy' }
// 展开对象后面的属性会覆盖前面的属性。
let search = { ...defaults, food: 'rich' } // { food: 'rich', price: '$10', ambiance: 'noisy' }
let search = { food: 'rich', ...defaults } // { food: 'spicy', price: '$10', ambiance: 'noisy' }


