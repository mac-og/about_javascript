// finding if an element is contained in an array

let arr = [2, 4, 5, 7, 8, 9];

// using a for-of loop
function findElement(arr, searchNumber) {
    for (let ele of arr) {
        if (ele === searchNumber)
            return true;
    }
    return false;
}
let res = findElement(arr, 1);
console.log(res);

// using the array.prototype.includes()
let method1 = arr.includes(11); // true

// using the array.prototype.indexOf()
let method2 = arr.indexOf(7); // returns the index of element, if false returns -1


// finding elements in Object
const colors = [
    {color: 'white', size: 5},
    {color: 'red', size: 3},
    {color: 'green', size: 5},
    {color: 'orange', size: 6}
]

let was = colors.find(obj => obj.color === 'red');
// console.log(was);

// split and join method
let word = "This is javascript language";

let wordSplit = word.split(' '); // split a string into array

let wordJoin = wordSplit.join('-'); // joins elements of an array using a delimiter

// console.log(wordJoin);


// exclude an element from an array
function excludes(array, excludeNumber) {
    let result = [];

    for (let num of array)
        if (!excludeNumber.includes(num))
            result.push(num);
    return result;
}

let res1 = excludes(arr, [9, 7]);
// console.log(res1);

// functon to move an element in an array to a certain index
function moveElement(array, index, palce) {
    let position = index + palce;

    if (position >= array.length || position < 0) {
        console.error("Invalid position");
        return;
    }
    let output = [...array];
    let element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

// function to count the number of occurance of an element in an array
function countOccurance(array, searchNumber) {
    let count = 0;
    
    for (let num of array) {
        if (num === searchNumber) {
            count++;
        }
    }
    return count;
    /* using the reduce method
     * array.reduce((accumulator, current) {
        const final = (current === searchNumber) ? 1: 0;
        return accumulator + final;
     }, 0)
}