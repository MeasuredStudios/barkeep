//
// aos.js
// Theme module
//

(function() {
  //
  // Functions
  //

  function init() {
    const options = {
      duration: 700,
      easing: 'ease-out-quad',
      once: true,
      startEvent: 'load',
    };
    AOS.init(options);
  }

  //
  // Events
  //

  if (typeof AOS !== 'undefined') {
    init();
  }
})();
