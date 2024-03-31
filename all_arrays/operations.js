// Adding element to the beginning of an array
let arr = [1, 2, 3, 4, 5, 6];
arr.unshift('first', 'second');

// Removing element from the beginning of the array
arr.shift();

// Adding element to the end of the array
arr.push('last', 'extrem', 10);

// Removing element from the end
arr.pop();

// console.log(arr);

// Removing or adding elements anywhere
// splice - returns an array, original array is affected
const qaz = [10, 20, 'one', 'two', 30, 50];
// let sec = qaz.splice(2, 1); // ['one']
qaz.splice(2, 1, 'add1', 'add2');
// console.log(qaz); // [10, 20, 'add1', 'add2', 'two', 30, 50];

// Slice
var numbers = [2, 4, 6, 8, 10];
let ot = numbers.slice(1, 4);
// numbers is not affected
// console.log(ot); // [4, 6, 8]

// sort an array
let arrayA = [10, 8, 9, 7, 11, 24];

let sor = arrayA.sort((a, b) => a - b); // in ascending order
console.log(sor);