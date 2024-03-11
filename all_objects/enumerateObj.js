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

// function to return all the methods contained in an Object
// using the for-in method
function objectFunc(obj) {
    let result = [];
    for (let key in obj) {
        if (typeof(obj[key]) === "function") {
            result.push(obj);
        }
    }    
    return result;
}

// using the for-of method with Object.keys()
function objectString(obj) {
    let result = [];
    for (let key of Object.keys(obj)) {
        if (typeof(obj[key]) === "string") {
            result.push(key);
        }
    }
    return result;
}

// using the for-of method with Object.values()
function objectNumber(obj) {
    let result = [];
    for (let value of Object.values(obj)) {
        if (typeof(value) === "number") {
            result.push(value);
        }
    }
    return result;
}
// console.log(objectNumber(person));

// Iterating an Object, into an array
for (let entry of Object.entries(person)) {
    console.log(entry);
}