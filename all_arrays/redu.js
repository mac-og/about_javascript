let colors = [
    {id: 'one',
     type: 'red',
     num: 'a'
    },
     {id: 'two',
     type: 'yellow',
     num: 'b'
    },
     {id: 'three',
     type: 'green',
     num: 'c'
    }
]

let res = colors.reduce((obj, {id, type, num}) => {
    obj[id] = {type, num};
    return obj;
}, {})

console.log(res)
/*
{
    one: { type: 'red', num: 'a' },
    two: { type: 'yellow', num: 'b' },
    three: { type: 'green', num: 'c' }
  }
*/

const color2 = ["red", "red", "green", "blue", "green"];
let qaz = color2.reduce((a, b) =>
    (a.indexOf(b) !== -1) ? a: [...a, b], [])

console.log(qaz)