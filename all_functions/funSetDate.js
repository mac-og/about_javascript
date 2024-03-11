let ndate = new Date();

function modern() {
    let mHours = ndate.getHours();
    let mMins = ndate.getMinutes();
    let mSecs = ndate.getSeconds();
    let myear = ndate.getFullYear();
    let mMonth = ndate.getMonth() + 1;
    let mdate = ndate.getDate();
    let mday = ndate.getDay();
    mday = changeDay(mday);

    function changeDay(dayOfWeek) {
        let nameOfWeek = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
        return nameOfWeek[dayOfWeek];
    }

    console.log(`Time-${mHours}:${mMins}:${mSecs} Date-${mdate}/${mMonth}/${myear}, ${mday}`);
}
modern();