// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  class CarouselSlider {
    // globals
    //Create private properties for any global variables in the original code. Use the same names
    #componentCarousel = document.querySelector(".component-carousel");
    #navigationDots = null; // add navigation dots
    #navigationButtons = componentCarousel.querySelectorAll(
      ".navigation-buttons > a"
    );
    #slides = document.getElementsByClassName("slide");

    #currentIndex = 0;

    ////////////////////////////////

    constructor(component) {
      //Copy the initCarousel function code into the class constructor
      //function initCarousel() {
      // start add navigation dots
      let navigationDotsHtml = "";
      for (let i = 0; i < slides.length; i++) {
        navigationDotsHtml += '<span class="navigation-dot"></span>';
      }

      const navDotsFragment = new DocumentFragment(); // https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
      let navDotsDiv = document.createElement("div");
      navDotsDiv.className = "navigation-dot-container";
      navDotsDiv.innerHTML = navigationDotsHtml;
      navDotsFragment.append(navDotsDiv);
      componentCarousel
        .querySelector(".carousel-container")
        .appendChild(navDotsFragment);
      navigationDots = componentCarousel.querySelectorAll(".navigation-dot");
      // end add navigation dots

      showSlides(currentIndex);
      // add event handlers for navigation buttons
      navigationButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          if (event.target.className === "next") {
            currentIndex = incrementIndex(1);
          }
          if (event.target.className === "previous") {
            currentIndex = incrementIndex(-1);
          }
          showSlides(currentIndex);
        });
      });
      // add event handlers for navigation dots
      navigationDots.forEach((dot) => {
        dot.addEventListener("click", (event) => {
          // find index of current dot
          const parent = event.target.parentNode;
          const index = [].indexOf.call(parent.children, event.target);
          showSlides(index);
        });
      });
      // automate movement of the slides
      /*setInterval(() => {
      showSlides(incrementIndex(1));
    }, "2000"); */
      // }
    } //  constructor(component)

    ////////////////////////////////

    //Copy the code for the showSlides, incrementIndex functions and make them private
    //Initiate moving of slides
    #showSlides(n) {
      let i;
      currentIndex = n;
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = 0; i < navigationDots.length; i++) {
        navigationDots[i].className = navigationDots[i].className.replace(
          " active",
          ""
        );
      }
      slides[currentIndex].style.display = "flex";
      navigationDots[currentIndex].className += " active";
    }

    // named function expression
    #incrementIndex = (increment) =>
      Math.abs((currentIndex + increment) % slides.length);
  } // class CarouselSlider

  function initCarousel() {
    carousel = new CarouselSlider();
  }
  window.addEventListener("load", (event) => {
    initCarousel();
  });
})();
