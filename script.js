//time functions
function refresh_time(){
    var refresh=1000; // Refresh rate 1s
    var mytime = setTimeout('display_time()', refresh);
}
function display_time() {
    var x = new Date().toString();
    x = x.split(" ", 5);
    [x[1], x[2]] = [x[2], x[1]];
    x = x.join(" ");
    document.getElementById('time').innerHTML = x;
    // console.log(x);
    refresh_time();
}
display_time();



// slider functions
var slideIndex = 1;

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}
showSlides(slideIndex);