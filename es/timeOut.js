// the setTimeOut executes a function after a given number of secs

let imageNum = 0;
let imageList = ["all_DOM/images/iphone.jpg", 
                 "all_DOM/images/lg.jpg", 
                 "all_DOM/images/samsung.jpg",
                 "all_DOM/images/motorola.jpg",
                 "all_DOM/images/oneplus.jpg",
                 "all_DOM/images/nokia.jpg"
            ];

// using setTimeOut
function rotateImage() {
    let time = setTimeout(rotateImage, 3000);

    ++imageNum;
    if (imageNum == imageList.length) {
        clearTimeout(time);
    }
    console.log(imageList[imageNum]);
}
// rotateImage();

// using setInterval
setInterval(loopImage, 2000);

function loopImage() {
    ++imageNum;
    
    if (imageNum == imageList.length)
         imageNum = 0;
    console.log(imageList[imageNum]);
}
