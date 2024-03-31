// the .toLocaleString converts a number into a string with a language representation
let num = 1234567.981;
// num = num.toLocaleString('en-US'); // look for the format code
// let num2 = num.toLocaleString('en-NGN');
let numCurrency = num.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // GBP, NGN
// console.log(numCurrency);

// to format number as a percent
let value = 20;
value = value.toLocaleString(undefined, {style: 'percent'});
console.log(value);

// to format number as a unit
let result = 200;
result = result.toLocaleString(undefined, {style: 'unit', unit: 'fahrenheit'}); // 200°C
console.log(result); 