let sentence1 = new String('This is a method of creating objcet strings'); // typeof = object

let sentence2 = String('This is a method of creating strings'); // typeof = string

// using string literals "double-column", 'single-column', or `back-ticks`
const sen = "This is a good way of creating string.";

let word1 = sen.concat(' Concatenation with concat');
let word2 = sen.split(" "); // ['This', 'is', 'a', 'good', 'way', 'of', 'creating', 'string.']
let word3 = sen.valueOf();

console.log(word2);

// using string literals
var user = 'John Smith';

let str = `
Dear ${user.toUpperCase()},
It is nice writing to you at this time, i just wanted 
to let you know that there are different template literals 
used for creating a string.
You can make use of a single-column, a double-colmn or the
back-tick character and they all work.
Thank you very much for coming this far. See you soon.

Regards,
Learner`;
// console.log(str);