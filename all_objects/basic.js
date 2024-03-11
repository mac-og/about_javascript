var person = new Object();

person.fName = 'John';
person.lName = 'Smith';
person.age = 20;
person.country = 'Holland';
console.log(person);

// using template literals
let numbers = {
    one: 100,
    two: 200,
    three: 300,
    four: function() {
        console.log(`This is a method in OOP`);
    },
    // OR
    five() {
        console.log(`This can also be used`);
    }
};
// numbers.five();
// console.log(numbers);
// to access the properties use either the dot notation or bracket notation
console.log(numbers.two); // numbers['two'];