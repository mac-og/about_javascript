let made = [2, 45, true, null, 'name', undefined, 1];

// function that takes an array and returns the number of truthy
function countTruthy(value) {
    let count = 0;
    for (let num of value) {
        if (num) {
            count++;
        }
    }
    return count;
}

// function that takes an array and returns the values that are truthy
function truthyValues(value) {
    let result = [];

    for (let num of value) {
        if (num) {
            result.push(num);
        }
    }
    return result;
}

console.log(countTruthy(made));
console.log(truthyValues(made));