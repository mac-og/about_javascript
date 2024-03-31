// basic function that compares two numbers
let numbers = [20, 14, 2, 6, 27, 9];

function findMax(a, b) {
    let result = a > b ? a: b;
    return result;
}
// console.log(findMax(20, 14));

// to find maximum value in an array of numbers

function findMaxArray(value) {
    let maximum = value[0];
    for (let num of value) {
        if (num > maximum) {
            maximum = num;
        }
    }
    return maximum;
}
// console.log(findMaxArray(numbers));

// to find the maximum value between two numbers make use of the Math.max(a, b)

let big = Math.max(15, 29);
// console.log(big);

// to find the maximum value in an array of numbers make use of the Math.max(...Numbers)
let final = Math.max(...numbers);

// using the Array.prototypr.reduce method
let res = numbers.reduce((a, b) => (a > b) ? a: b);

