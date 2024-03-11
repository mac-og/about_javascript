let person = {
    fname: 'james',
    lname: 'smith',
    age: 20,
    dept: 'operations',
    fullname() {
        console.log(`${this.fname}, ${this.lname}`);
    },
    car: function() {
        console.log(`${this.fname} drives a car`);
    }
}

// Method 1
let clonePerson1 = {};
for (let key in person) {
    clonePerson1[key] = person[key];
}

// Method 2
let clonePerson2 = Object.assign({/* carYear: 2020 */}, person);

// method 3 - spread operator
let {...clonePerson3} = person;

console.log(clonePerson3);