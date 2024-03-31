let _fullName = new WeakMap();
let _work = new WeakMap();

class person {
    constructor(fullName) {
        _fullName.set(this, fullName);
        _work.set(this, () => console.log(`working good`));
    }
    fName() {
        console.log(`fullname is ${_fullName.get(this)}`);
    }
    work() {
        _work.get(this)();
    }
    // getter - a property
    get Name() {
        return _fullName.get(this)
    }
    set Name(value) {
        if (typeof value == 'number')
            throw ('Name cannot be a number');
        _fullName.set(this, value);
    }
}

let qa = new person('kopi');
console.log(qa)
qa.Name = 'yet';
console.log(qa.Name);