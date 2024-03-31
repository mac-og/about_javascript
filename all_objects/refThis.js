// In a regular function 'this' references the global or window object
// it may include callbacks

/* Method 1 - To reference 'this' */
let saying1 = {
    word: "say a word",
    write: "writing something",
    sports: ['football', 'basketball', 'tennis', 'boxing'],

    doing: function() {
        return `doing something`;
    },
    run: function(duration=1000) {
        // to reference this, declare a varible that points to 'this' 
        const self = this;
        setTimeout(function() {
            console.log(`${that.sports.join(', ')}`);
        }, duration)
    }
}
// console.log(saying1.run());

/* Method 2 - To reference 'this' */
let saying2 = {
    word: "say a word",
    write: "writing something",
    sports: ['football', 'basketball', 'tennis', 'boxing'],

    doing: function() {
        return `doing something`;
    },
    run(duration=1000) {
        console.log(this);
        setTimeout(function() {
            console.log(`${this.sports.join(', ')}`);
        }.bind(this), duration)
    }
}
// console.log(saying2.run());

/* Method 3 - To reference 'this' */
let saying3 = {
    word: "say a word",
    write: "writing something",
    sports: ['football', 'basketball', 'tennis', 'boxing'],

    doing: function() {
        return `doing something`;
    },
    run(duration=1000) {
        setTimeout(() => console.log(`${this.sports.join(', ')}`), duration);
    }
}
console.log(saying3.run());