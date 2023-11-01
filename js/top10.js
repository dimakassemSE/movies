var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls for Action
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}*/

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  /*var dots = document.getElementsByClassName("demo");*/
  /*var captionText = document.getElementById("caption");*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
/*  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
/*  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;*/
} 


var slideIndex_C = 1;
showSlides_C(slideIndex_C);

// Next/previous controls for Comedy
function plusSlides_C(n) {
  showSlides_C(slideIndex_C += n);
}

function showSlides_C(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_C");

  if (n > slides.length) {slideIndex_C = 1}
  if (n < 1) {slideIndex_C = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex_C-1].style.display = "block";
}


var slideIndex_T = 1;
showSlides_T(slideIndex_T);

// Next/previous controls for Cartoon
function plusSlides_T(n) {
  showSlides_T(slideIndex_T += n);
}

function showSlides_T(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_T");

  if (n > slides.length) {slideIndex_T = 1}
  if (n < 1) {slideIndex_T = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex_T-1].style.display = "block";
}


