let list = new Map(
    [
    ['bag', 15],
    ['leather', 20],
    ['shoe', 25],
    ['belt', 10]
    ]
);

// to add a pair to the Map
list.set('watch', 32);
let cart = 0;
// if 'shoe' is selected
cart += list.get('shoe'); // 25
console.log(cart);
list.forEach((key, value) => console.log(key, value));