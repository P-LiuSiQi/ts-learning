/**
 * 布尔值
 */
let isDone: boolean = false


/**
 * 数字
 */
let decLiteral: number = 20           // 十进制
let hexLiteral: number = 0x14         // 十六进制
let binaryLiteral: number = 0b10100   // 二进制
let octalLiteral: number = 0o24       // 八进制


/**
 * 字符串
 */
let names: string = 'bob'
names = 'smith'

let age: number = 2
let sentence: string = `Hello, my name is ${names}
I'll be ${age + 1} years old nex year
`


/**
 * 数组
 */
// 方式一:
let list: number[] = [1, 2, 3]
// 方式二:
let lists: Array<number> = [1, 2, 3]


/**
 * 元祖Tuple
 */
let x: [string, number]
x = ['hello', 3]      // OK
x = [10, 'hello']     // Error

console.log(x[0].substr(1))   // OK
console.log(x[1].substr(1))   // Error, 'number'不存在'substr'方法
// 访问一个越界元素会报错，不应该使用该特性
x[3] = 'world'                // OK,字符串可以赋值给(string | number)类型
console.log(x[5].toString())  // OK, 'string' 和 'number'都有toString
x[6] = true                   // Error, 布尔值不是(string | number)类型


/**
 * 枚举
 */
enum Color {Red, Green, Blue}
let c: Color = Color.Green

// 默认从0开始元素编号，也可以手动指定成员的数组
enum Color {Red = 1, Green, Blue}
// 或
enum Color {Red = 1, Green = 2, Blue = 4}

// 可以通过枚举的值得到值
let colorName: string = Color[2]


/**
 * any
 */
let notSrue: any = 4
notSrue = 'maybe a string instead'
notSrue = false

let arr: any[] = [1, true, 'free']
arr[1] = 100


/**
 * void 表示没有任何类型。当一个函数没有返回值时，通常其返回值类型是void
 */
function warnUser(): void {
  console.log('This is my warning message');
}
// 声明一个void类型没有什么大用，因为你只能为它赋值undefined和null
let unusable: void = undefined


/**
 * null 和 undefined 
 * 默认情况下 null 和 undefined 是所有类型的子类型。
 * 当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自，这能避免 很多常见的问题。
 */
let u: undefined = undefined
let n: null = null


/**
 * never  
 * never 类型表示的是那些永不存在的值的类型。
 * never 类型是任何类型的子类型
 * 没有类型是 never 的子类型或可以赋值给never 类型（除了 never 本身之外）
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}


/**
 * object 表示非原始类型
 */
declare function create(o: object | null): void

create({ prop: 0 })   // OK
create(null)          // OK

create(32)          // Error
create('stirng')    // Error
create(false)       // Error
create(undefined)   // Error


/**
 * 类型断言  通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
 */
let someValue: any = 'this is a string'

// 方式一:
let strLength: number = (<string>someValue).length
// 方式二: 当你在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的。
let slength: number = (someValue as string).length