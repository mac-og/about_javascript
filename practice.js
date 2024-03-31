
// setInterval(increaseTime, 1000);
let clear = () => console.clear();
let log = (msg) => console.log(msg);

changeTime = (time) => {
    time = time.toString();
    return (time.length < 2) ? '0' + time: time
}
function increaseTime() {
    let date = () => new Date();
    
    let ghrs = changeTime(dat().getHours());
    let gMins = changeTime(date().getMinutes());
    let gSecs = changeTime(date().getSeconds());

    ghrs = ghrs % 12 || 12;

    clear();
    log(`${ghrs}:${gMins}:${gSecs}`);
}