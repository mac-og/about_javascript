var third = 'yes';

var obj1 = {
    one: 1,
    two: 2
};
var obj2 = {
    first: 'name',
    second: 'age'
};

let combined = {...obj1, ...obj2, third};
console.log(combined);