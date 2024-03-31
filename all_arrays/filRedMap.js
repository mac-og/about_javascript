// filter checks a condition and filters the result into a new array
let numA = [1, 5, 8, 9, 7, 2];

let result = numA.filter(val => val > 0);
// console.log(result);

// reduce function compresses an array into a single element

let final = numA.reduce((a, b) => a + b);
// console.log(final);

// map function performs a function on each of the elements of the array
let numMap = numA.map(a => a * a);
console.log(numMap);