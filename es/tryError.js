try {
    let num = "test";
    num = Number(num);

    if (isNaN(num))
        throw `${num}, not a number`;
    console.log(`${num} is a number`);
}
catch(error) {
    console.log(error);
}