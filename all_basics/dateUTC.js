let date = new Date(2024, 1, 25)
// console.log(date) // 2024-02-24T23:00:00.000Z

let recommendedDate = new Date(Date.UTC(2024, 1, 25))
// recommendedDate.getUTCFullYear() // 2024
// console.log(recommendedDate) // 2024-02-25T00:00:00.000Z

let options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'short'
}
/* let options = {
    weekday : "narrow", "short" & "long"
    era : possible values are "narrow", "short" & "long"
    year : possible values are "numeric" & "2-digit"
    month : possible values are "numeric", "2-digit", "narrow", "short" & "long"
    day : possible values are "numeric" & "2-digit"
    hour : possible values are "numeric" & "2-digit"
    minute : possible values are "numeric" & "2-digit"
    second : possible values are "numeric" & "2-digit"
    timeZoneName : possible values are "short" & "long"
}
*/
let date2 = new Date();
date = date.toLocaleString([], options);

console.log(date2); // Mon, Apr 22, 2024