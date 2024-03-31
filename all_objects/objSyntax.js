// old sytanx for for creating object using factory function
function animal(specie, sound) {
   return {
    specie: specie,
    sound: sound,

    agressive: function() {
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell} !!!`);
    },
    speed: function(mph) {
        console.log(`${this.specie} runs at a speed of ${mph} mph`);
    }
}
}

// new sytanx for for creating object using factory function

function animal2(specie, sound) {
    return {
     specie,
     sound,
 
     agressive() {
         var yell = this.sound.toUpperCase();
         console.log(`${yell} ${yell} ${yell} !!!`);
     },
     speed(mph) {
         console.log(`${this.specie} runs at a speed of ${mph} mph`);
     }
 }
 }

var cat = animal2('cat', 'meow');
cat.agressive();