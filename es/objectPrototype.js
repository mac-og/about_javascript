// to have an Object inheret properties or methods from another Object
function mechinery(color) {
    this.color = color;

}
// mechinery.prototype.automatic = true;
mechinery.prototype.transport = function() {
    console.log(`It is a good means of transport`);
}
// if you reset the prototype of an Object also reset the Construtor
autoMobile.prototype = Object.create(mechinery.prototype);
autoMobile.prototype.constructor = autoMobile;

function autoMobile(make, color) {
    // to inheret from an Object use the call method
    mechinery.call(this, color);
    // two types of members in an Object: Instance & Prototype members
    // Instance members
    this.make = make;
    this.distance = function(mph = 80) {
        this.speed = mph;
        console.log(`${this.make} can travel at ${this.speed}mPh to cover a distance of ${this.speed * 5}Km in 5Hrs`);
    }
}
// Prototype members
autoMobile.prototype.country = 'USA';
autoMobile.prototype.drive = function() {
    console.log(`${this.make} is a good car to drive`);
}

let car = new autoMobile('Ford', 'red');
// console.log(Object.keys(car)); // iterates only instance members
for (let index in car) {
    console.log(index); // iterates over all members
}
// car.transport();
// console.log(car.color);
