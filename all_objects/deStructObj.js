// Method 1
let person = {
    fName: 'John',
    lName: 'Smith',
    age: 19,
    dept: 'Operatons'
}

var details = person => {
    console.log(`${person.fName} works in the department of ${person.dept}`);
};
// if you don't want to make use of the dot notation, you can use destructuring
var details = ({fName, dept}) => {
    console.log(`${fName} works in the department of ${dept}`);
};
// details(person);

// Method 2
var gender = 'male';
var number = 20;
var country = 'Ireland';

var login = {gender, number, country};
// console.log(login); // { gender: 'male', number: 20, country: 'Ireland' }