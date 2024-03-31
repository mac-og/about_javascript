function journey(...args) {
    let [first, ...remaining] = args;
    let [destination, ...inBetween] = remaining.reverse();

    console.log(`pass through - ${args.length} places`);
    console.log(`journey starts at - ${first}`);
    console.log(`journey ends at - ${destination}`);
    console.log(`you pass through - ${inBetween.length} places inbetween the first and last`);

}

journey(
    'one',
    'two',
    'three',
    'four',
    'five'
);