// method 1
let fruits = ['orange', 'cucumber', 'apple', 'guava'];
let count = ['one', 2, 3, 'four'];
let comb = [...fruits, ...count];
// console.log(comb);

// method 2
let sports = ['football', 'basketball'];
let num = [11, 5];
let com2 = sports.concat(num);
let convertToString = com2.join(', ');
let convertToArray = convertToString.split(', ');
console.log(convertToArray); 
