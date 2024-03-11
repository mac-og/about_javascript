// Method 1 - using the slice operator
var sentence = "This is a new way of life";

for (let i = 0; i < sentence.length; ++i)
{
    if (sentence.slice(i, i+3) === 'new')
    {
        sentence = sentence.slice(0, i) + 'modern' + sentence.slice(i+3)
    }
}
// console.log(sentence);

// Method 2 - using the indexOf operator
var place = sentence.indexOf('way');

if (place !== -1)
        sentence = sentence.slice(0, place) + 'culture' + sentence.slice(place+3);
// console.log(sentence);

// Method 3 - replace
const country = "Switzerland is a country in europe. Switzerland is not a continent";
// let repCountry = country.replace('Switzerland', 'Finland');
let repCountry = country.replace(/Switzerland/g, 'Finland'); // to replace everywhere
console.log(repCountry);