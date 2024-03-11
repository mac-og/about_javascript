let num = 123.555; // using toFixed does not roundUp a number eg 0.5 remains 0.5

let str = num.toString();
if (str.charAt(num.length - 1) === "5")
{
    str = str.slice(0, str.length - 1) + "6";
}
let next = Number(str);
let final = next.toFixed(2);

console.log(final);