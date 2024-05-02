function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1)
}

function callBack(fact, n) {
    console.log(`The factorial of ${n} is ${fact(n)}`)
}

callBack(factorial, 6)
