let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

function goToMensClothin(){
  window.location.href = "./mens-clothing.html"
}

function goToFitness(){
  window.location.href = "./fitness.html";
}

function goToHeadphones(){
  window.location.href = "./headphones.html"
}

function goToBabyProd(){
  window.location.href = "./baby-prod.html";
}

function goToLaptops(){
  window.location.href = "./laptops.html";
}

function goToSmartphones(){
  window.location.href = "./smartphones.html";
}