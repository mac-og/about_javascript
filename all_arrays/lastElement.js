// to allocate the last element of an array to a variable
// method 1
let fruits = ['orange', 'cucumber', 'apple', 'guava'];
let last = fruits.slice(fruits.length - 1, fruits.length)[0];
// let last = fruits.splice(fruits.length - 1, 1)[0];
// let [last] = fruits.slice(fruits.length - 1, fruits.length);
// console.log(last); // guava

// method 2
/* let [lastEle] = fruits.reverse(); // changes the order of the element
   console.log(fruits); // [ 'guava', 'apple', 'cucumber', 'orange' ] */
let [lastElement] = [...fruits].reverse();
console.log(lastElement);