let arr = [
    {id: 100, dept: 'operations'},
    {id: 101, dept: 'quality'},
    {id: 102, dept: 'hse'},
    {id: 103, dept: 'operations'}
]

let res = arr.filter(obj => {
    let flag = false
    Object.values(obj).forEach(str => {
        if (String(str).indexOf('operations') > -1) {
            flag = true
            return
        }
    })
    if (flag)
        return obj
})


console.log(res) // [ { id: 100, dept: 'operations' }, { id: 103, dept: 'operations' } ]