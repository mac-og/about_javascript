// abstraction is a concept of hiding some variables so that they are not accessible
// from the outside of the object

function objPerson(fname, age) {
    this.age = age;
    this.fname = fname;

    let continent = 'europe';
    let age20 = this.age + 20; // abstration - not visible outside the object
    let country = 'Scotland'; // abstraction

    this.dept = function() {
        console.log(`${this.fname} works in production in ${continent}.`);
    };
    this.origin = function() {
        console.log(`${this.fname} is from ${country}`);
    }
    this.ageIn20 = function() {
        console.log(`${fname} will be ${age20} in the next 20 years`);
    }

    Object.defineProperty(this, 'continent', {
        get: function() {
            return continent;
        }
    })

    Object.defineProperty(this, 'age20', {
        get: function() {
            return age20;
        }
    })
}

let smart = new objPerson('John', 23);
// smart.continent = 'london';
smart.ageIn20();
console.log(smart.continent);
console.log(smart.age20);