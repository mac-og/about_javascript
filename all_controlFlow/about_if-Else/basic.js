// The IF statement if used to check if a value is true or false
// before it executes the statement that follows

var lang = 'javaScript';
if (lang !== 'javaScript')
    console.log(`javaScript is a programming language`);
else
    console.log(`There are other programming languages`);
console.log(`executes irrespective of the outcome`);

let score = 74;
if (score === 74 || score === 59 || score === 49) {
    score++;
    // nested IF statements
    if (score >= 75)
        console.log(`You got A`);
    else if (score >= 60)
        console.log(`You got B`);
    else if (score >= 50)
        console.log(`You got C`);
    else if (score >= 40)
        console.log(`You got D`);
    else
        console.log(`You failed`); }