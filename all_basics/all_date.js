let now = new Date();

let later = new Date(2025, 11, 19);
console.log(later.toUTCString());

let gday = now.getDay(); // to get the day of the week, in numeric form, 0 - sun
// to convert it to its equivalent name
/*
 *   let nameOfWeek = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
 *   var nameDay = nameOfWeek[gday];
*/
// gday = now.setDay(4); // to change the day: set day to wednesday

let gMonth = now.getMonth(); // to get month, 0 - jan
// gMonth = now.setMonth(2); // to change the month: set month to march

let gYear = now.getFullYear(); // to get year, 2024
// gYear = now.setFullYear(2030); // to change the year: set year to 2030

let gHour = now.getHours(); // to get hours
// gHour = now.setHours(16); // to change the hour: set hour to 4pm

let gMins = now.getMinutes(); // to get minutes
// gMins = now.setMinutes(25); // to change the minutes: set minutes to 25

let gSecs = now.getSeconds(); // to get seconds
// gSecs = now.setSeconds(32); // to change the second: set second to 32

let gDate = now.getDate(); // to get day of the month
// gDate = now.setDate(27); // to change the day of month: set day to 27

// console.log(gDate);