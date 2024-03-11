// to list all the prime numbers
function showPrimeA(value) {
    let isPrime = true;
    let result = [];
    result[0] = 1;
    result[1] = 2;
    for (let num = 2; num <= value; ++num) {
        isPrime = true;
        for (let divisor = 2; divisor < num; ++divisor) {
            if (num % divisor === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            result.push(num);
        }
    }
    return result;
}

// to check if a number is prime
function showPrimeB(value) {
    let isPrime = true;

    for (let num = 3; num <= value/2; num += 2) {
        if (value % num === 0) {
            console.log(`${value} is not a prime number`);
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log(`${value} is prime`);
    }
}
showPrimeB(17);