// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals

  function lightbox() {
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
