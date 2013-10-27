;(function(exports) {
  var setUpGameTick = function() {
    window.requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
				setTimeout(callback, 1000/60);
			};
  };

  window.onload = function() {
    setUpGameTick();
	  var game = new Game();
	  var windowLoop = function() {
		  requestAnimationFrame(windowLoop);
		  game.loop();
	  };
	  var acceptInput = function(keyObj) {
		  game.keyInput(keyObj);
	  }
	  document.addEventListener("keydown",acceptInput,false);
	  windowLoop();
  }
})(this);