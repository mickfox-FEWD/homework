// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  const componentCarousel = document.querySelector(".component-carousel");

  const navigationButtons = componentCarousel.querySelectorAll(
    ".navigation-buttons > a"
  );
  const slides = document.getElementsByClassName("slide");

  console.log("componentCarousel " + componentCarousel);
  // ----------------------------------------------------------------
  // Add navigation buttons here Ex01-6
  // The navigation dots are currently hard coded into the html. Change this to generate
  // .. the navigation dots using JavaScript
  const navigation_dot_container_ref = document.getElementById(
    "navigation-dot-container_id"
  );
  console.log("navigation_dot_container_ref " + navigation_dot_container_ref);

  let spanStr = "";
  console.log("slides.length " + slides.length);
  for (let i = 0; i < slides.length; i++) {
    spanStr += "<span class='navigation-dot'> </span> ";
    console.log(i + " | " + spanStr);
  }

  const newSpan = document.createElement("span");
  newSpan.innerHTML = spanStr;
  //newSpan.classList.add("navigation-dot");
  navigation_dot_container_ref.append(newSpan);

  //----------------------------------------------------------------

  let currentIndex = 0;
  const navigationDots = componentCarousel.querySelectorAll(".navigation-dot");
  //Initiate moving of slides
  function showSlides(n) {
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
    slides[currentIndex].style.display = "block";
    navigationDots[currentIndex].className += " active";
  }

  // named function expression
  const incrementIndex = (increment) =>
    Math.abs((currentIndex + increment) % slides.length);

  function initCarousel() {
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
  }

  window.addEventListener("load", (event) => {
    initCarousel();
  });
})();
