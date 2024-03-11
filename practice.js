var yes = "it is okay";

// document.getElementById("later").innerHTML = "hello " + yes;
document.getElementById("l2").onclick = function() {
    let nam = document.getElementById('l1').value;
    document.getElementById('later').innerHTML = 'You typed in ' + nam;
}