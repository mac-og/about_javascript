function sum(...numbers) {
    if (numbers.length === 1) {
        let [first] = [...numbers];
        console.log(first.reduce((a, b) => a + b));
        return;
        // console.log(first);
    }
    console.log(numbers.reduce((a, b) => a + b));
    console.log(numbers.length);

    // console.log(a + b);
}

sum(3, 5);
// let count = sum(9, 14);
// console.log(count);