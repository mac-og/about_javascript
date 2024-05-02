let arr1 = ['one', 'two', 'three']
var arr2 = [1, 2, 3];

let obj = arr1.reduce(function(obj, val, element) {
    obj[arr2[element]] = val
    return obj
}, {})

console.log(obj) // { '1': 'one', '2': 'two', '3': 'three' }
