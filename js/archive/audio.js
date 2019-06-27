var mic;
var FPS = 60;
var prev = color(255, 255, 255, 255)
var next = color(255, 255, 255, 255)
var tick = 100;
var flowerR;
var flowerG;
var flowerB;
var saying;

var myFont;
var fontReady = false;

// function preload() {
//   myFont = loadFont('./assets/hybrid.ttf', fontReady);
// }

function fontReady(){
  fontReady = true;
}

function setup() {
  // createCanvas(710, 200);
  initCanvas();

  // Create an Audio input
  //new audioIn  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  prev = color(255, 255, 255, 255);
  next = color(255, 255, 255, 255);
  // prev = get(width/2, height/2)

  flowerR = random(50, 120);
  flowerG = random(50, 120);
  flowerB = random(50, 120);

  var sayings = ["we want a sumptuous drizzling please",
                "just cooking up a nice batch of sabotage",
                "oil separation is normal",
                "you bet your garden",
                "garden hoe",
                "who's that hottie over by the hydrangeas???",
                "i love making pickles, do you?",
                "what's your ideal harvest season?",
                "your organic garden or mine?",
                "you're like a sweet honeybee stinging my heart",
                "all natural horticultural hijinks",
                "i'm just not that into you",
                "what are you doing after this?",
                "we should hang out sometime",
                "haha, then what??",
                "rip vine and chill?",
                "no one installs a fence post quite like you"];
  saying = sayings[getRandomInt(0, sayings.length)];

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initCanvas(){
  var canvas = createCanvas(windowWidth, windowHeight, P2D);
  canvas.parent('sketch');
  frameRate(FPS);
  // noSmooth();
  // strokeWeight(WEIGHT);
  // stroke(FOREGROUND, OPACITY);
}

function draw() {
  if (frameCount % 100 == 0){
  //   prev_color = random(200, 250), random(200, 250), random(200, 250));
      prev = next;
      next = color(random(180, 250), random(180, 250), random(180, 250))
      // background(prev_color)
  }
  // background(random(255),random(255),random(255),random(255))
//   fill(random(255),random(255),random(255),random(255));
  prev = lerpColor(prev, next, (frameCount % 100)/100.0)
  // fill(prev)
  background(prev)

  // background(prev_color)

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  // fill(127);
  // stroke(0);

  // // Draw an ellipse with height based on volume
  var h = map(vol, 0, 1, height/2, 0);
  // ellipse(width/2, h - 25, 50, 50);
  // A design for a simple flower
  translate(windowWidth/2, windowHeight/2);
  noStroke();

  push()
  fill(flowerR, flowerG, flowerB, 40);
  rotate(radians(frameCount)/12)
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, h/4, h);
    // scale(h, h)
    // rotate(PI/5);
    rotate(PI/5);// +radians(frameCount)/10)
  }
  pop()

  push()
  fill(flowerR, flowerG, flowerB, 50);
  rotate(radians(frameCount)/10)
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, h/4, h);
    // scale(h, h)
    // rotate(PI/5);
    rotate(PI/5);// +radians(frameCount)/10)
  }
  pop()

  push()
  fill(flowerR, flowerG, flowerB, 60);
  rotate(radians(frameCount)/8)
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, h/4, h);
    // scale(h, h)
    // rotate(PI/5);
    rotate(PI/5);// +radians(frameCount)/10)
  }
  pop()

  // textFont(myFont)
  textFont("Baskerville")
  textSize(h/6);
  fill(255, 255, 255)
  textAlign(CENTER, CENTER)
  text(saying, -windowWidth/4, -windowHeight/4, windowWidth/2, windowHeight/2);

}

// TODO: flower rotation

// we want a sumptuous drizzling please
// just cooking up a nice batch of sabotage
// oil separation is normal
// you bet your garden
// garden hoe
// who's that hottie over by the hydrangeas???
// i love making pickles, do you?
// what's your ideal harvest season?
// your organic garden or mine?
// you're like a sweet honeybee stinging my heart
// no one installs a fence post quite like you