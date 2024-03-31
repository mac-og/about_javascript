// To pre-load an image when a page loads, so that a delay or lag is not noticed 
// when dealing with a remote server, you can create a new instance of an Object 
// varible and use this varible along with its properties/methods to preLoad images
function preLoadImages() {
    let arrayImage = ["../images/windows.jpg", "../images/applelogo.png"];

    let presentImage = new Image();
    for (let i = 0; i < arrayImage.length; ++i) {
        presentImage.src = arrayImage[i];
        // firstImage.height = "250px";
        // firstImage.width = "250px";
    }
}

function loadImg() {
    let win = window.open("../../index.html", "new", "");
    /* parameters maybe
     * location (yes/no) - if to display location/address bar
     * menubar (yes/no) - if to display menu bar
     * status (yes/no) - if to display status bar
     * width (pixels) - width of new window
     * height (pixels) - height of new window
     * resizable (yes/no) - allow window resizing
     * scrollbars (yes/no) - allow window scrolling
     * if no parameters are set, then each is set to 'yes'
     * if one parameter is set, then the rest are set to 'no'
     */
}

let win_w = 700;
let win_h = 700;

let win_l = (screen.availWidth/2) - (win_w/2);
let win_t = (screen.availHeight/2) - (win_h/2);

function printPage() {
    window.print();
}
function closePage() {
    window.close();
}

let imageNum = 0;
let imageList = [ "all_DOM/images/iphone.jpg", 
                 "all_DOM/images/lg.jpg", 
                 "all_DOM/images/samsung.jpg",
                 "all_DOM/images/motorola.jpg",
                 "all_DOM/images/oneplus.jpg",
                 "all_DOM/images/nokia.jpg" ];
function rotateImage() {
    ++imageNum;

    if (imageNum == imageList.length) {
        imageNum = 0;
    }
    document.getElementById("phone").src = imageList[imageNum];

    setTimeout(rotateImage, 3000);
}
window.onload = rotateImage();
