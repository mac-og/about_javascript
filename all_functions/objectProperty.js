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
function objectFunction(obj) {
    let result = [];
    for (let key in obj) {
        if (typeof(obj[key]) === "function") {
            result.push(obj);
        }
    }    
    return result;
}
console.log(objectFunction(person));
console.log(Object.values(obj));