// to have an Object inherit properties or methods from another Object
class mechinery {
    constructor(color) {
        // instance member
        this.color = color;
    }
    // prototype member
    transport() {
        console.log(`It is a good means of transport`);
    }
}

class autoMobile extends mechinery{
    constructor(make, color) {
        super(color);
        this.make = make;
    }
    distance(mph = 80) {
        this.speed = mph;
        console.log(`${this.make} can travel at ${this.speed}mPh to cover a distance of ${this.speed * 5}Km in 5Hrs`);
    }
}

let car = new autoMobile('Ford', 'red');

console.log(car.color)

