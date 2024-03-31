// destructuring an object
var sports = {
    racket: 'lawn tennis',
    board: 'snooker',
    net: ['soccer', 'football'],
    fav(result='soccer') {
        return `Your favourite sport is ${result}`;
    }
}

var {racket, fav} = sports;
console.log(fav());
// console.log(board, net); // snooker [ 'soccer', 'football' ]

// destructuring an array can only be done to represent the first element of the array

let [country] = ['ghana', 'senegal', 'morroco', 'egypt'];
// console.log(country); //ghana

let [,,cot] = ['ghana', 'senegal', 'morroco', 'egypt'];
// console.log(cot); // morroco