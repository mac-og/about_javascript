
document.getElementById('submit').onclick = function() {
    let temp = document.getElementById('value').value;
    temp = Number(temp);
    let celsiusChecked = document.getElementById('celsius').checked;
    let fahrenheitChecked = document.getElementById('fahrenheit').checked;

    if (!temp && celsiusChecked) {
        let final = toCelsius(temp);
        document.getElementById('result').innerHTML = `<p>Answer: ${final}<br />
        The zero(0) equivalent is given</p>`;
    }
    else if (!temp && fahrenheitChecked) {
        let final = toFahrenheit(temp);
        document.getElementById('result').innerHTML = `<p>Answer: ${final}<br />
        The zero(0) equivalent is given</p>`;
    }
    else {
        if (celsiusChecked) {
            let final = toCelsius(temp);
            document.getElementById('result').innerHTML = `<p>Answer: ${final}</p>`;
        }
        else if (fahrenheitChecked) {
            let final = toFahrenheit(temp);
            document.getElementById('result').innerHTML = `<p>Answer: ${final}</p>`;
        }
        else {
            document.getElementById('result').innerHTML = `<p>Enter a Unit</p>`;
        }
    }

    function toCelsius(temp) {
        let result = (temp - 32) * 5/9;
        result = result.toLocaleString(undefined, {style: 'unit', unit: 'celsius'});
        return result;
    }
    
    function toFahrenheit(temp) {
        let result = (temp * 9/5) + 32;
        result = result.toLocaleString(undefined, {style: 'unit', unit: 'fahrenheit'});
        return result;
    }
}