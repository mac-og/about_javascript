// using setTimeOut
let count = 5;

function display() {
    let time = setTimeout(display, 2000);

    count--;
    if (count == 0)
        clearTimeout(time);
    console.log(count);
}
display();

// using setInterval
let num = 0;
let over = setInterval(countUp, 2000);

function countUp() {
    num++;
    console.log(num);
    if (num >= 5)
        clearInterval(over);
}