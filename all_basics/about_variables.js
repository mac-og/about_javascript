// Variables is created using the keyword 'var', 'let' or 'const'
/*  
    The difference lies in the fact that their scope differs:
*   var - has its scope in the body of a file.
*   let - has its scope in a function
*   const - when declared, its value cannot be changed.
*/

// Data types
/*  There are two types of data types in javascript
 *  Primitive - numbers, string, boolean, undefined and null
 *  Reference - object, array and function
*/

var firstName = "James";
var lastName = "smith";

// console.log('Name: ' + firstName, 'Surname: ' + lastName);

/*
*   Numbers, Strings, booleans, Arrays, Objects are created using any of the
*   var, let or const keyword
*/

// Strings
var fName = 'James';
let lName = 'Smith';
const combinedName = firstName + lastName;

// Numbers
let personAge = 20;
var ageNext = personAge + 1;
const ageAfterDecade = personAge + 10;
// console.log(ageAfterDecade);

// Booleans
var finish = true;
let start = false;
const end = false;

// Object
let fullName = {
    first: "John",
    last: "Smith",
    get full() {
        console.log(this.first + ' ' + this.last);
    }
};
// fullName.full;

// Array
const arr = [1, 2, 3];
let arrMixed = [1, 'two', true, 'works'];
// console.log(arrMixed);

/* Truthy values includes:
 * numbers
 * strings
 * true
 * Infinity
 * []
 * {}
*/

/* Falsey values includes:
 * 0
 * false
 * null
 * undefined
 * NaN
 * ""
 */
