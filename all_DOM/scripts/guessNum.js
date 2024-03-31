let guess = Math.floor(Math.random() * 10 + 1);
let numOfGuess = 0;

document.getElementById('submit').onclick = function() {
    let result = document.getElementById('guess').value;
    numOfGuess++;

    if (!result) {
        document.getElementById('result').innerHTML = `
        <p>Please input a number !!!</p>` }
    else {
        if (result == guess) {
            document.getElementById('result').innerHTML = `
            <p>Congratulations, you got it right <br />
            Answer is ${guess} <br />
            It took you ${numOfGuess} times</p>`;
        }
        else if (result > guess) {
            document.getElementById('result').innerHTML = `
            <p>Number is too Large</>`;  
        }
        else if (result < guess) {
            document.getElementById('result').innerHTML = `
            <p>Number is too Small</P>`;  
        }
    }
}