class CarouselSlider {
  //properties
  #componentCarousel;
  #navigationButtons;
  #slides;
  #navigationDots = null;
  #currentIndex = 0;
        
  constructor() {
    this.#componentCarousel = document.querySelector('.component-carousel');
    this.#navigationButtons = this.#componentCarousel.querySelectorAll('.navigation-buttons > a');
    this.#slides = document.getElementsByClassName("slide");
  
    // start add navigation dots
    let navigationDotsHtml = '';
    for (let i=0; i<this.#slides.length; i++) {
      navigationDotsHtml += '<span class="navigation-dot"></span>';
    }

    const navDotsFragment = new DocumentFragment(); // https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    let navDotsDiv = document.createElement("div");
    navDotsDiv.className = 'navigation-dot-container';
    navDotsDiv.innerHTML = navigationDotsHtml;
    navDotsFragment.append(navDotsDiv);
    this.#componentCarousel.querySelector('.carousel-container').appendChild(navDotsFragment);
    this.#navigationDots = this.#componentCarousel.querySelectorAll('.navigation-dot');
    // end add navigation dots

    this.#showSlides(this.#currentIndex);
    // add event handlers for navigation buttons
    this.#navigationButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.className === 'next') {
          this.#currentIndex = this.#incrementIndex(1);
        }
        if (event.target.className === 'previous') {
          this.#currentIndex = this.#incrementIndex(-1);
        }
        this.#showSlides(this.#currentIndex);
      });
    });
    // add event handlers for navigation dots
    this.#navigationDots.forEach(dot => {
      dot.addEventListener('click', (event) => {
        // find index of current dot
        const parent = event.target.parentNode;
        const index = [].indexOf.call(parent.children, event.target);
        this.#showSlides(index);
      });
    });
    // automate movement of the slides
    /*setInterval(() => {
      showSlides(incrementIndex(1));
    }, "2000"); */
  }

  //Initiate moving of slides
  #showSlides(n) {
    let i;
    this.#currentIndex = n;
    for (let i=0; i<this.#slides.length; i++) {
      this.#slides[i].style.display = "none";
    }
    for (let i=0; i<this.#navigationDots.length; i++) {
      this.#navigationDots[i].className = this.#navigationDots[i].className.replace(" active", "");
    }
    this.#slides[this.#currentIndex].style.display = "flex";
    this.#navigationDots[this.#currentIndex].className += " active";
  }

  // named function expression 
  #incrementIndex = (increment) => Math.abs((this.#currentIndex + increment) % this.#slides.length);  

}

function initCarousel() {
  const carouselSlider = new CarouselSlider();
}

window.addEventListener("load", (event => {
  initCarousel();
}));

