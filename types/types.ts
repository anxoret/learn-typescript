// Boolean
const isFetching: boolean = true
const isLoading: boolean = false

// Number
const int: number = 42
const float: number = 4.2
const num: number = 3e10

// String
const message: string = 'Hello, Typescript'

// Array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13] // Array of numbers
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // Array of numbers (generic types)
const words: string[] = ['Hello', 'Typescript'] // Array of strings

// Tuple (array of of different data types)
const contact: [string, number] = ['Vladilen', 1234567]

// Any
let variable: any = 42
// ...
variable = 'New string'
variable = []

// Functions
function sayMyName(name: string): void {
  console.log(name)
}

sayMyName('Хайзенберг')

// Never (когда функция возвращает нам ошибку и никогда не заканчивает свое выполнение, либо когда действительно постоянно что-либо делает)
function throwError(message: string): never {
  throw new Error(message)
}

// function infinite(): never {
//   while (true) {

//   }
// }

// Create your own types
type Login = string // alias

const login: Login = 'admin'

// потенциально различные типы данных для одной и той же переменной (для таких ситуаций когда, например, id может быть либо строкой, либо числом)
type ID = string | number 
const id1: ID = 1234
const id2: ID = '1234'

// null and undefined
type SomeType = string | null | undefined
