function stopWatch() {
    let timeStart, timeStop, duration = 0;
    let running;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch started already');
        running = true;
        timeStart = new Date();
    }
    this.stop = function() {
        if (!running)
            throw new Error("Not started yet !!!");
        running = false;
        timeStop = new Date();

        const numOfSecs = (timeStop.getTime() - timeStart.getTime()) / 1000;
        duration += numOfSecs;
    }
    this.reset = function() {
        timeStart = null;
        timeStop = null;
        duration = 0;
        running = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}

let watch = new stopWatch();