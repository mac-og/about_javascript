class light {
    constructor(power, rating) {
        this.rating = rating;
        this._power = power;
        this.place = function() {
            console.log(`this is an instance member`);
        }
    }
    get power() {
        console.log(`${this._power}Watts`);
    }
    heigth = "120";
    locate() {
        console.log(`this is a prototype member`);
    }
}
let first = new light(120, 'high');
console.log(Object.keys(first));
first.locate()
first.place()
