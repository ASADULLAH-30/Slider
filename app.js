var img = document.getElementById('sliderImage');
var arr = ['./a1.jpg', './a2.jpg', './a3.jpg', './a4.jpg', './a5.jpg']; // Fixed the syntax error
var count = 0;

function time() {
    count++; 
    if (count >= arr.length) {
        count = 0; 
    }
    img.setAttribute("src", arr[count]);
}

function showPreviousImage() {
    count--; 
    if (count < 0) {
        count = arr.length - 1; 
    }
    img.setAttribute("src", arr[count]);
}

function showNextImage() {
    count++; 
    if (count >= arr.length) {
        count = 0; 
    }
    img.setAttribute("src", arr[count]);
}

document.getElementById('prevBtn').addEventListener('click', showPreviousImage);
document.getElementById('nextBtn').addEventListener('click', showNextImage);

setInterval(time, 4000);
