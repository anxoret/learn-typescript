// Boolean
var isFetching = true;
var isLoading = false;
// Number
var int = 42;
var float = 4.2;
var num = 3e10;
// String
var message = 'Hello, Typescript';
// Array
var numberArray = [1, 1, 2, 3, 5, 8, 13]; // Array of numbers
var numberArray2 = [1, 1, 2, 3, 5, 8, 13]; // Array of numbers (generic types)
var words = ['Hello', 'Typescript']; // Array of strings
// Tuple (array of of different data types)
var contact = ['Vladilen', 1234567];
// Any
var variable = 42;
// ...
variable = 'New string';
variable = [];
// Functions
function sayMyName(name) {
    console.log(name);
}
sayMyName('Хайзенберг');
// Never (когда функция возвращает нам ошибку и никогда не заканчивает свое выполнение, либо когда действительно постоянно что-либо делает)
function throwError(message) {
    throw new Error(message);
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
