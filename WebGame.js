var stage = new createjs.Stage("demoCanvas")

var circle = new createjs.Shape();

var KEYCODE_LEFT = 37,
		KEYCODE_RIGHT = 39,
		KEYCODE_UP = 38,
		KEYCODE_DOWN = 40;

function init() {

  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  circle.y = 50;
  circle.x = 50;
  stage.addChild(circle);

  this.document.onkeydown = keyPressed;

  // createjs.Ticker.on("tick", tick);
  // createjs.Ticker.setFPS(30);
}

// function tick(event) {
//   circle.x = circle.x + 3;
//   if (circle.x > stage.canvas.width) { circle.x = 0; }
//   stage.update(event);
//   }

  function keyPressed(event) {
  		switch(event.keyCode) {
  			case KEYCODE_LEFT:
  				circle.x -= 5;
  				break;
  			case KEYCODE_RIGHT:
  				circle.x += 5;
  				break;
  			case KEYCODE_UP:
  				circle.y -= 5;
  				break;
  			case KEYCODE_DOWN:
  				circle.y += 5;
  				break;
  		}
  		stage.update();
  	}
