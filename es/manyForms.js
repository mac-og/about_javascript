// polymorphism is the ability of a property or method to take different forms
function animal(specie) {
    this.specie = specie;
}
animal.prototype.eat = function() {
    console.log(`Living things eat`);
}

function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function human(country, specie) {
    animal.call(this, specie);
    this.country = country;
    this.place = function() {
        console.log('lives on land');
    };
}
extend(human, animal);

human.prototype.act = function() {
    console.log(`${this.specie} can run`);
}

function fish(specie) {
    animal.call(this, specie);
    this.place = function() {
        console.log('lives on water');
    };
}
extend(fish, animal);

fish.prototype.act = function() {
    console.log(`${this.specie} can swim`);
}
let livingThings = [ new human('canada', 'human'),
           new fish('tilapia') ];
for (let index of livingThings) {
    index.act();
}