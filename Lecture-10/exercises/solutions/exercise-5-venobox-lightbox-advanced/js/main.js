// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  let imageBoxes = document.querySelectorAll(".image-box");

  function lightbox() {
    // VenoBox requires all images that you want in the lightbox to be wrapped in an <a> tag

    for (const [index, imageBox] of imageBoxes.entries()) { // https://medium.com/@_DandyLyons/how-to-use-a-js-for-of-loop-with-an-index-a4675ed22351
      
      let imageLink = document.createElement('a');
      //while (imageBox.childNodes.length > 0) {
      //  imageLink.appendChild(imageBox.childNodes[0]);
      //}
      const imageURL = imageBox.querySelector('img').src;
      imageLink.setAttribute('href', imageURL);
      imageLink.setAttribute('data-gall', "gallery01");
      imageLink.className = 'image-box-link';
      //imageBox.replaceChildren(imageLink);
      imageBox.appendChild(imageLink);
    }

    // create lightbox and initialise
    new VenoBox({
      selector: '.image-box-link',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
    });

  }

  function init() {
    lightbox();
  }

  window.addEventListener("load", (event => {
      init();
  }));

})();
