const expTotalSlides = document.getElementsByClassName("experience-contents").length;
const expSlideNumber = 2;

const skillTotalSlides = document.getElementsByClassName("skills-contents").length;
const skillSlideNumber = 3;

var mainSlides = document.getElementsByClassName("main");

var expSlides = document.getElementsByClassName("experience-contents");
var dots = document.getElementsByClassName("exp-dot");

var skillSlides = document.getElementsByClassName("skills-contents");
var skillDots = document.getElementsByClassName("skill-dot");

var nextButton = document.getElementsByClassName("next");
var prevButton = document.getElementsByClassName("prev");

var navHeader = document.getElementById("header").getElementsByTagName("a");

var mainSlideIndex = 0;
var expSlideIndex = 0;
var skillSlideIndex = 0;

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

    for (i = 0; i < skillTotalSlides; i++) {
      skillSlides[i].style.display = "none";
      skillDots[i].className = skillDots[i].className.replace(" active","");
    }
    skillSlideIndex = 0;
  }
  else if (n == skillSlideNumber) {
    skillSlides[0].style.display = "block";
    skillDots[0].className = skillDots[0].className += " active";
    nextButton[0].style.display = "block";
    prevButton[0].style.display = "block";

    for (i = 0; i < expTotalSlides; i++) {
      expSlides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active","");
    }
    expSlideIndex = 0;
  }

  else {
    nextButton[0].style.display = "none";
    prevButton[0].style.display = "none";
    
    for (i = 0; i < expTotalSlides; i++) {
      expSlides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active","");
    }

    for (i = 0; i < skillTotalSlides; i++) {
      skillSlides[i].style.display = "none";
      skillDots[i].className = skillDots[i].className.replace(" active","");
    }

    expSlideIndex = 0;
    skillSlideIndex = 0;
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

function skillSlide(n) {

  var i;
    
  skillSlideIndex += n;

    if (skillSlideIndex >= skillTotalSlides) {
      skillSlideIndex = 0;
    }
    if (skillSlideIndex < 0) {
      skillSlideIndex = skillTotalSlides - 1;
    }

    for (i = 0; i < skillTotalSlides; i++) {
        skillSlides[i].style.display = "none";
        skillDots[i].className = skillDots[i].className.replace(" active","");
    }

    skillSlides[skillSlideIndex].style.display = "block";
    skillDots[skillSlideIndex].className = skillDots[skillSlideIndex].className += " active";

}

function expandMenu() {
  var x = document.getElementById("header");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}