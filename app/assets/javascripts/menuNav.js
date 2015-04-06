$(document).ready(function(){
  var panelExample = $('#panel').scotchPanel({
      containerSelector: 'body', // Make this appear on the entire screen
      direction: 'right', // Make it toggle in from the left
      duration: 400, // Speed in ms how fast you want it to be
      transition: 'ease-in-out', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
      clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
      distanceX: '20%', // Size fo the toggle
      enableEscapeKey: true // Clicking Esc will close the panel
  });

  jQuery('#togglePanel').click(function(){
    panelExample.toggle() // Toggles the Panel
  });

  (function() {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
      });
    }

  })();

});
