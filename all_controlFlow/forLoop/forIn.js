// the for-in loop is used to iterate Objects
// when used in Objects its result is the Value of the Object

var person = {
    age: 20,
    lName: 'John',
    fName: 'Smith',
    get fullName() {
        console.log(`${this.fName}, ${this.lName}`);
    }
}
for (let pro in person) {
    console.log(pro, person[pro]);
}
person.fullName;