// it is used to iterate elements of an array

let colors = ['brown', 'white', 'yellow', 'blue', 'green'];

for (let col of colors) {
    console.log(col);
}

// a for-in loop can also be used but not advisable

let cars = ['jeep', 'honda', 'toyota', "acura"];
for (let index in cars) {
    console.log(index, cars[index]);
}