// callbacks are functions that are passed as argument to a function

let numbers = [3, 6, 9, 10, 6, 5, 2, 9]
findMin(numbers, displayConsole);
function findMin(numbers, displayConsole) {
    let result = Math.min(...numbers);
    displayConsole(result);
}

function displayConsole(value) {
    console.log(`The Minimum value is ${value}`);
}