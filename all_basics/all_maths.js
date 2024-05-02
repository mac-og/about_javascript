var result = 10.756;
// result = Math.round(result); // 11

// result = Math.ceil(result); // 11

// result = Math.floor(result); // 10

var absValue = -9.56;
absValue = Math.abs(absValue); // 9.56

var randomNumber = Math.random(); // generates a number between 0-1
let nextNumber = Math.floor((Math.random() * 6) + 1);
// console.log(nextNumber);


let a = [2, 1, 4, 7, 5, 3]

console.log(Math.max(...a)) // 7
console.log(Math.max.call(null, ...a)) // 7
console.log(Math.max.apply(null, a)) // 7