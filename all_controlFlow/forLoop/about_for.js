let num = 10;
for (let i = 0; i <= num; ++i)
{
    if (i % 2)
        console.log(`${i} is odd`);
    else
        console.log(`${i} is even`);
}

var city = 'Moscow';
var options = ['Norway', 'Italy', 'Brazil', 'Russia', 'Spain', 'Scotland'];
var found = false;

for (let i = 0; i < options.length; ++i)
{
    if (options[i].toLowerCase() === 'russia')
    {
        console.log(`${city} is the capital of ${options[i]}`);
        found = true;
    }
}
if (found === false)
    console.log('OPtion not available');