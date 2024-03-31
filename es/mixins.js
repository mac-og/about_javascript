let onRoad = {
    type: 'automobile',
    transport() {
        console.log(`moves on road`);
    }
}

let onAir = {
    type: "airplane",
    transport() {
        console.log(`transport by air`);
    }
}

let drive = {
    driver: 'driver',
    work() {
        console.log(`drives a volkswagen`);
    }
}

let pilot = {
    driver: 'pilot',
    work() {
        console.log(`drives a jet`);
    }
}

let criuse = Object.assign({}, onRoad, drive);
// console.log(criuse);

// you can also assign an Object to a constructor
function fast(val) {
    this.val = val;
}
Object.assign(fast.prototype, onAir, pilot)
let meansOfTransport = new fast(21);
console.log(meansOfTransport);
