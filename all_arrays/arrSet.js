let arr = [2, 4, 7, 8, 3, 4];

let arrSet = [...new Set(arr)]
console.log(arrSet) // [ 2, 4, 7, 8, 3 ]

// OR

let res = arr.reduce((prev, current) => {
    if (prev.indexOf(current) === -1)
        prev.push(current)
    return prev
}, [])

console.log(res) // [ 2, 4, 7, 8, 3 ]

function arraySet(array) {
    return array.reduce((prev, current) => {
        if (prev.indexOf(current) === -1)
            prev.push(current)
        return prev
    }, [])
}
console.log(arraySet([1, 3, 4, 5, 4, 3, 2, 1]))

/*
function unique(arr) {
    let res = []
    for (let i of arr) {
        if (res.indexOf(i) == -1) {
            console.log(res)
            res.push(i)
        }
    }
    return res
}
*/