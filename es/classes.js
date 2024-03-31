/* class definitions are not hoisted
 * class declaration - class {}
 * class expression - let qwerty = class {}
 */

class family {
    static numOfFamily = 0;

    constructor(fName, lName) {
        // instance members
        this.fName = fName;
        this.lName = lName;
        this.work = function() {
            console.log(`${fName} can work`);
        }
        family.numOfFamily++;
    }
    // outside the constructor, you define prototype members
    fullName = function() {
        console.log(`${fName}, ${lName}`);
    }
}
let first = new family('john', 'smith');
let second = new family('james', 'doe');
console.log(first);

console.log(family.numOfFamily);
