// a symbol generates a unique identifier when called

let _type = Symbol();
let _drive = Symbol();
class car {
    constructor(type) {
        this[_type] = type;
    }
    [_drive]() {
        console.log(`${_type} is a good car to drive`);
    }
}

let res = new car('Benz');
console.log(res)
console.log(Object.getOwnPropertySymbols(res));

console.log(_type)