// creating Objects using factory function

function companyA(label) {
    return {
        label,
        size: 50,
        locate: function() {
            console.log(`${this.label} is located in Europe`);
        },
        work() {
            console.log(`It is working`);
        }
    }
}
// com1.constructor = [Function: Object]
let com1 = companyA('place');
// console.log(com1);
// com1.work();

// creating Objects using constructor function
function companyB(label) {
    this.label = label;
    this.carModel = 'lambogini'
    this.numOfWorkers = 42;
    this.cars = function() {
        console.log(`it makes use of a ${this.carModel}`);
    }
}
// com2.constructor = [Function: companyB]
let com2 = new companyB('operations');
// com2.cars();
// console.log(com1.constructor);

// Functions can be regarded as Objects
// using the New Function to create Object

let companyC = new Function('label', `
this.label = label;
    this.carModel = 'Benz'
    this.numOfWorkers = 42;
    this.cars = function() {
        console.log('it makes use of a ' +  this.carModel);
    }`)

    const com3 = new companyC('okay');
    com3.cars();