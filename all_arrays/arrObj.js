let obj = {
    0: 'good',
    1: 'very good',
    2: 'excellent',
    length: 3
}

let sec = Array.from(obj)
console.log(sec) // [ 'good', 'very good', 'excellent' ]

// OR
let objA = {
    0: 'good',
    1: 'very good',
    2: 'excellent'
}

console.log(Object.values(objA)) // [ 'good', 'very good', 'excellent' ]
