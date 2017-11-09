var x = 180;
var y = 180;
var xspeed = 2;
var yspeed = 2;
var saying;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);
  mic = new p5.AudioIn();
  mic.start();
  var sayings = ["we want a sumptuous drizzling please",
                "just cooking up a nice batch of sabotage",
                "oil separation is normal",
                "you bet your garden",
                "garden hoe",
                "who's that hottie over by the hydrangeas???",
                "i love making pickles, do you?",
                "what's your ideal harvest season?",
                "your organic garden or mine?",
                "i'm just not that into you",
                "what are you doing after this?",
                "we should hang out sometime",
                "rip vine and chill?",
                "haha, then what??",
                "you're like a sweet honeybee stinging my heart",
                "all natural horticultural hijinks",
                "no one installs a fence post quite like you"];
  saying = sayings[getRandomInt(0, sayings.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw() {

	// stroke(0, 80);
  noStroke()

	//distance from center of the screen
	// var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);
	var vol = mic.getLevel();
	var d = map(vol, 0, 1, windowHeight/3, 0);

	fill (random(200, 250), random(200, 250), random(200, 250));
	// ellipse (x, y, d, d);
  push()
  translate(x, y)
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, d/4, d);
    // scale(h, h)
    // rotate(PI/5);
    rotate(PI/5);// +radians(frameCount)/10)
  }
  pop()

    //bouncing horizontally
	x = x + xspeed;
    
 	if (x > windowWidth || x < 0)  {
		xspeed = -xspeed;
  }

  //bouncing veritcally
  y = y + yspeed;

  if (y > windowHeight || y < 0) {
		yspeed = -yspeed;
  }

  push()
  textFont("Baskerville");
  textSize(50);
  fill(100);
  textAlign(CENTER, CENTER);
  // text(saying), 0, 0);
  text(saying, (windowWidth/2)-2, (windowHeight/2)+2)
  pop()

  push()
  textFont("Baskerville");
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  // text(saying), 0, 0);
  text(saying, windowWidth/2, windowHeight/2)
  pop()
}