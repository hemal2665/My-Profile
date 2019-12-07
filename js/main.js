const expTotalSlides = document.getElementsByClassName("experience-contents").length;
const expSlideNumber = 2;
var mainSlides = document.getElementsByClassName("main");
var expSlides = document.getElementsByClassName("experience-contents");
var dots = document.getElementsByClassName("exp-dot");
var nextButton = document.getElementsByClassName("next");
var prevButton = document.getElementsByClassName("prev");

var navHeader = document.getElementById("header").children;

var mainSlideIndex = 0;
var expSlideIndex = 0;

function loadDefault() {
  //load first div
  mainSlides[mainSlideIndex].style.display = "block";
  navHeader[mainSlideIndex].style.backgroundColor = "grey";
  nextButton[0].style.display = "none";
  prevButton[0].style.display = "none";
}


function showPage(n) {

  var i;

  for(i = 0; i < mainSlides.length; i++){
    mainSlides[i].style.display = "none";
    navHeader[i].style.backgroundColor = "";
  }

  mainSlides[n-1].style.display = "block";
  navHeader[n-1].style.backgroundColor = "grey";

  if(n == expSlideNumber) {
    expSlides[0].style.display = "block";
    dots[0].className = dots[0].className += " active";
    nextButton[0].style.display = "block";
    prevButton[0].style.display = "block";
  }
  else {
    nextButton[0].style.display = "none";
    prevButton[0].style.display = "none";
  }

  if(n == expSlideNumber) {
    expSlides[0].style.display = "block";
    dots[0].className = dots[0].className += " active";
    nextButton[0].style.display = "block";
    prevButton[0].style.display = "block";
  }
  else {
    nextButton[0].style.display = "none";
    prevButton[0].style.display = "none";
  }
}


function expSlide(n) {

  var i;
    
    expSlideIndex += n;

    if (expSlideIndex >= expTotalSlides) {
      expSlideIndex = 0;
    }
    if (expSlideIndex < 0) {
      expSlideIndex = expTotalSlides - 1;
    }

    for (i = 0; i < expTotalSlides; i++) {
        expSlides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active","");
    }

    expSlides[expSlideIndex].style.display = "block";
    dots[expSlideIndex].className = dots[expSlideIndex].className += " active";

}