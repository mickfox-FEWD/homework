// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  let currImage = 0;
  let body = document.querySelector("body"),
    lightBox = document.querySelector(".lightBox"),
    images = document.querySelectorAll(".gImg"),
    showImg = lightBox.querySelector(".showImg img"),
    close = lightBox.querySelector(".close");

  function lightbox() {
    for (const [index, image] of images.entries()) {
      // https://medium.com/@_DandyLyons/how-to-use-a-js-for-of-loop-with-an-index-a4675ed22351
      image.addEventListener("click", () => {
        showImage(index);
      });
    }
    // add next/prev links to lightbox
    lightBox.querySelector(".lightBox_content .showImg").insertAdjacentHTML(
      "afterend",
      `<div class="navigation-buttons">
      <a class="previous">❮</a>
      <a class="next">❯</a>        
    </div>`
    );

    lightBox
      .querySelector(".navigation-buttons .previous")
      .addEventListener("click", (event) => {
        if (currImage !== 0) {
          currImage -= 1;
          showImg.src = images[currImage].src;
        }
      });
    lightBox
      .querySelector(".navigation-buttons .next")
      .addEventListener("click", (event) => {
        if (currImage !== images.length - 1) {
          currImage += 1;
          showImg.src = images[currImage].src;
        }
      });

    close.addEventListener("click", () => {
      lightBox.style.display = "none";
      body.style.overflow = "visible";
    });

    //Mick attmpting to get buttons clickable
    // need to iterate
    dotList = document.getElementsByClassName("navigation-dot");

    for (let i = 0; i < dotList.length; i++) {
      // console.log("dotList[i]" + i);
      dotList[i].addEventListener("click", (event) => {
        // showImg.src = images[currImage].src;
        console.log("click on .navigation-dot[" + i + "]");
        showImage(i);
      });
    }
  }

  function showImage(imageIndex) {
    showImg.src = images[imageIndex].src;
    currImage = imageIndex;
    lightBox.style.display = "block";
    body.style.overflow = "hidden";
  }

  function init() {
    lightbox();
  }

  window.addEventListener("load", (event) => {
    init();
  });
  // ----------------------------------------------------------------
  // code for buttons taken from Ex01

  const navigation_dot_container_ref = document.getElementById(
    "navigation-dot-container_id"
  );
  //console.log("navigation_dot_container_ref " + navigation_dot_container_ref);

  let spanStr = "";
  let numImages = document.querySelectorAll(".image-box").length;
  console.log("numImages " + numImages);
  for (let i = 0; i < numImages; i++) {
    spanStr += "<span class='navigation-dot'> </span> ";
    //console.log(i + " | " + spanStr);
  }

  const newSpan = document.createElement("span");
  newSpan.innerHTML = spanStr;
  //newSpan.classList.add("navigation-dot");
  navigation_dot_container_ref.append(newSpan);

  // ----------------------------------------------------------------
})();

// old code
var slideIndex = 1;
//showSlide(slideIndex);

function openLightbox() {
  document.getElementById("Lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("Lightbox").style.display = "none";
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function toSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  let modalPreviews = document.getElementsByClassName("modal-preview");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

// here's googles version
// function showSlide(n) {
//   let slides = document.getElementsByClassName("slide"); // Assuming this is how you get the slides
//   let modalPreviews = document.getElementsByClassName("modal-preview");

//   console.log("slides:", slides);
//   console.log("modalPreviews", modalPreviews);

//   if (slides.length === 0) {
//     console.error("No slides found");
//     return;
//   }

//   if (modalPreviews.length === 0) {
//     console.error("No modalPreviews found");
//     return;
//   }

//   slideIndex = n; // Update the global index

//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   if (slideIndex < 1) {
//     slideIndex = slides.length;
//   }
//   console.log("slideIndex", slideIndex);

//   for (let i = 0; i < slides.length; i++) {
//     if (slides[i].style) {
//       slides[i].style.display = "none";
//     } else {
//       console.error("Slide at index " + i + " doesn't have the style property");
//     }
//   }
//   for (let i = 0; i < modalPreviews.length; i++) {
//     if (modalPreviews[i].className) {
//       modalPreviews[i].className = modalPreviews[i].className.replace(
//         " active",
//         ""
//       );
//     } else {
//       console.error(
//         "Modalpreview at index " + i + " doesn't have the className property"
//       );
//     }
//   }

//   // Safely access the elements
//   if (slides[slideIndex - 1]) {
//     slides[slideIndex - 1].style.display = "block";
//   } else {
//     console.error(`No slide at index ${slideIndex - 1}`);
//   }

//   if (modalPreviews[slideIndex - 1]) {
//     modalPreviews[slideIndex - 1].className += " active";
//   } else {
//     console.error(`No modalpreview at index ${slideIndex - 1}`);
//   }
// }
