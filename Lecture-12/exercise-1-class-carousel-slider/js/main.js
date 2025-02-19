(() => {
  class CarouselSlider {
    // Private properties
    #componentCarousel = document.querySelector(".component-carousel");
    #navigationDots = null;
    #navigationButtons = this.#componentCarousel.querySelectorAll(
      ".navigation-buttons > a"
    );
    #slides = this.#componentCarousel.getElementsByClassName("slide");
    #currentIndex = 0;

    constructor() {
      this.#initCarousel();
    }

    // Initialize the carousel
    #initCarousel() {
      // Add navigation dots
      let navigationDotsHtml = "";
      for (let i = 0; i < this.#slides.length; i++) {
        navigationDotsHtml += '<span class="navigation-dot"></span>';
      }

      const navDotsFragment = new DocumentFragment();
      let navDotsDiv = document.createElement("div");
      navDotsDiv.className = "navigation-dot-container";
      navDotsDiv.innerHTML = navigationDotsHtml;
      navDotsFragment.append(navDotsDiv);
      this.#componentCarousel
        .querySelector(".carousel-container")
        .appendChild(navDotsFragment);
      this.#navigationDots =
        this.#componentCarousel.querySelectorAll(".navigation-dot");

      // Show the initial slide
      this.#showSlides(this.#currentIndex);

      // Add event listeners for navigation buttons
      this.#navigationButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          if (event.target.className === "next") {
            this.#currentIndex = this.#incrementIndex(1);
          }
          if (event.target.className === "previous") {
            this.#currentIndex = this.#incrementIndex(-1);
          }
          this.#showSlides(this.#currentIndex);
        });
      });

      // Add event listeners for navigation dots
      this.#navigationDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          this.#showSlides(index);
        });
      });

      // Automate movement of the slides (optional)
      /*setInterval(() => {
        this.#showSlides(this.#incrementIndex(1));
      }, 2000);*/
    }

    // Show slides
    #showSlides(n) {
      this.#currentIndex = n;

      // Hide all slides
      for (let i = 0; i < this.#slides.length; i++) {
        this.#slides[i].style.display = "none";
      }

      // Remove active class from all dots
      for (let i = 0; i < this.#navigationDots.length; i++) {
        this.#navigationDots[i].classList.remove("active");
      }

      // Show the current slide and mark the corresponding dot as active
      this.#slides[this.#currentIndex].style.display = "flex";
      this.#navigationDots[this.#currentIndex].classList.add("active");
    }

    // Increment index
    #incrementIndex(increment) {
      return (
        (this.#currentIndex + increment + this.#slides.length) %
        this.#slides.length
      );
    }
  }

  // Initialize the carousel
  function initCarousel() {
    const carousel = new CarouselSlider();
  }

  // Wait for the window to load before initializing the carousel
  window.addEventListener("load", () => {
    initCarousel();
  });
})();
