var sketch = 0;
var mic;
var FPS = 60;
var tick = 0;
var saying;
var sketches = [0, 1, 2, 3];
var sayings = ["we want a sumptuous drizzling please",
              // "just cooking up a nice batch of sabotage",
              // "oil separation is normal",
              // "hey there, sexy garden gnome",
              // "you bet your garden",
              // "The Punch is Dry WTF How Is That Possible",
              // "do you... want to go to the Prom with me? no pressure",
              // "garden hoe",
              // "who's that hottie over by the hydrangeas???",
              "april showers bring twitter followers",
              "swipe right for more",
              "what’s your favorite color",
              "do you have any siblings",
              "i can't stop thinking about toast",
              "Good evening nice to meet you unfortunately I can't stay for long because i don't want to be here",
              // "i love making pickles, do you?",
              // "i love your... muscular smile",
              // "what's your ideal harvest season?",
              // "Everyone Is Wearing Their Seatbelt But Its Like Behind Your Shoulder Which Isn't Very Safe",
              // "your organic garden or mine?",
              // "one-way ticket to flavortown",
              // "We're All Crammed In The Backseat",
              // "You Had A Nip Slip All Night And No One Told You Sorry",
              // "game on, brotato",
              // "why are these bees so muscular, what are they eating?",
              // "you're like a, uh, sexy... flower pot",
              // "hit em with that g! cal! invite!",
              // "fill out a when2meet for my heart",
              // "i think you're my... Swolemate",
              // "existential dread and chill",
              // "i am, objectively, so sweaty",
              // "vulnerable and unbothered",
              // "overcooked, but palatable",
              // "what's your five year career plan?",
              // "did you go to philips or exeter?",
              // "hey, I like your zip-off pants",
              // "wow you are dusty!!!",
              // "seriously, why are you so dusty how does that happen",
              // "ask the cutie before you touch the booty",
              // "what's your alignment?",
              // "it’s funny how slippery this jam is!",
              // "i'm just not that into you",
              // "what are you doing after this?",
              // "i need to do some trimming",
              // "mushrooms?",
              // "it's tuber time",
              // "sweet sweet nectar",
              // "am i good enough now? is my dog good enough?",
              // "endorse me on linkedin so i know it's real",
              // "hot n juicy?",
              // "sound the alarm",
              // "i don't think about you",
              // "we should hang out sometime?",
              // "do you want to do.... Guy Stuff?",
              // "rip vine and chill?",
              // "haha, then what??",
              // "you're like a sweet honeybee stinging my heart",
              // "all natural horticultural hijinks",
              "no one installs a fence post quite like you"];
// Audio
var prev = color(255, 255, 255, 255)
var next = color(255, 255, 255, 255)
var randR;
var randG;
var randB;

// Bouncing
var x = 180;
var y = 180;
var xspeed = 2;
var yspeed = 2;

// Blob
var t;

// Video
var vid;

function setup() {
	initCanvas();
	background(25);

    mic = new p5.AudioIn();
    mic.start();

    tick = 0;

	randomChange();

	initAudio();
	initBouncing();
	initBlob();
}

function initCanvas(){
	var canvas = createCanvas(windowWidth, windowHeight, P2D);
	canvas.parent('sketch');
	frameRate(FPS);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initAudio(){
	prev = color(255, 255, 255, 255);
	next = color(255, 255, 255, 255);
	randR = random(50, 120);
	randG = random(50, 120);
	randB = random(50, 120);
	next = color(random(180, 250), random(180, 250), random(180, 250))
}

function drawAudio() {
	// background(0, 0, 255);
	// textFont("Baskerville")
	// textSize(windowHeight/15);
	// fill(255, 255, 255)
	// textAlign(CENTER, CENTER)
	// text(saying, windowWidth/2, windowHeight/2);

	// return;

	if (frameCount % 100 == 0){
		prev = next;
		next = color(random(180, 250), random(180, 250), random(180, 250))
	}
	prev = lerpColor(prev, next, (frameCount % 100)/100.0)
	background(prev)

	// Get the overall volume (between 0 and 1.0)
	var vol = mic.getLevel();

	// Draw an ellipse with height based on volume
	var h = map(vol, 0, 1, height/2, 0);
	translate(windowWidth/2, windowHeight/2);
	noStroke();

	push()
	fill(randR, randG, randB, 40);
	rotate(radians(frameCount)/12)
	for (var i = 0; i < 10; i ++) {
		ellipse(0, 30, h/4, h);
		rotate(PI/5);// +radians(frameCount)/10)
	}
	pop()

	push()
	fill(randR, randG, randB, 50);
	rotate(radians(frameCount)/10)
	for (var i = 0; i < 10; i ++) {
		ellipse(0, 30, h/4, h);
		rotate(PI/5);// +radians(frameCount)/10)
	}
	pop()

	push()
	fill(randR, randG, randB, 60);
	rotate(radians(frameCount)/8)
	for (var i = 0; i < 10; i ++) {
		ellipse(0, 30, h/4, h);
		rotate(PI/5);// +radians(frameCount)/10)
	}
	pop()

	textFont("Baskerville")
	textSize(h/6);
	fill(255, 255, 255)
	textAlign(CENTER, CENTER)
	// text(saying, -windowWidth/2 + ((windowWidth/2)/2), -windowHeight/2 + ((windowHeight/2)/2), windowWidth/2, windowHeight/2);
	text(saying, -h, -h/2, h*2, h);

}

function initBlob(){
	t = 0;
	background(random(180, 250), random(180, 250), random(180, 250));
	stroke(0, 15);
	noFill();
}

function drawBlob() {
	// background(0, 255, 0);
	// textFont("Baskerville")
	// textSize(windowHeight/15);
	// fill(255, 255, 255)
	// textAlign(CENTER, CENTER)
	// text(saying, windowWidth/2, windowHeight/2);

	var vol = mic.getLevel();
	var d = map(vol, 0, 1, height*0.67, 0);

	translate(width/2, height/2);
	beginShape();
	for (var i = 0; i < 200; i++) {
		var ang = map(i, 0, 200, 0, TWO_PI);
		var rad = d * noise(i * 0.01, t * 0.005);
		if (i % 9 == 0){
			// rad = rad/4;
			rad = rad - 5;
		}
		if (i % 10 == 0){
			// rad = rad/4;
			rad = rad - 10;
		}
		if (i % 11 == 0){
			// rad = rad/4;
			rad = rad - 5;
		}
		var x = rad * cos(ang);
		var y = rad * sin(ang);
		curveVertex(x, y);
	}
	endShape(CLOSE);

	t += 1;

	// // clear the background every 600 frames using mod (%) operator
	// if (frameCount % 600 == 0) {
	// 	nextBlobColor = color(random(180, 250), random(180, 250), random(180, 250))
	// 	background(nextBlobColor)
	// }

	push()
	textFont("Baskerville");
	textSize(50);
	fill(100);
	textAlign(CENTER, CENTER);
	// text(saying, -2, +2)
  	text(saying, (-windowWidth/4)-2, (-windowHeight/4)+2, windowWidth/2, windowHeight/2);
	pop()

	push()
	textFont("Baskerville");
	textSize(50);
	fill(255);
	textAlign(CENTER, CENTER);
	// text(saying, 0, 0)
  	text(saying, -windowWidth/4, -windowHeight/4, windowWidth/2, windowHeight/2);
	pop()
}

function initBouncing(){
	background(random(10, 30), random(10, 30), random(10, 30));
	x = 180;
	y = 180;
	xspeed = 2;
	yspeed = 2;
}

function drawBouncing() {
	// background(255, 0, 0);
	// textFont("Baskerville")
	// textSize(windowHeight/15);
	// fill(255, 255, 255)
	// textAlign(CENTER, CENTER)
	// text(saying, windowWidth/2, windowHeight/2);

	noStroke()

	//distance from center of the screen
	var vol = mic.getLevel();
	var d = map(vol, 0, 1, windowHeight/3, 0);

	fill (random(200, 250), random(200, 250), random(200, 250));
	push()
	translate(x, y)
	for (var i = 0; i < 10; i ++) {
		ellipse(0, 30, d/4, d);
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
	text(saying, (windowWidth/4)-2, (windowHeight/4)+2, windowWidth/2, windowHeight/2)
  	// text(saying, (-windowWidth/2)-2, (-windowHeight/2)+2, windowWidth/2, windowHeight/2);

	pop()

	push()
	textFont("Baskerville");
	textSize(50);
	fill(255);
	textAlign(CENTER, CENTER);
	text(saying, windowWidth/4, windowHeight/4, windowWidth/2, windowHeight/2)
  	// text(saying, -windowWidth/2, -windowHeight/2, windowWidth/2, windowHeight/2);
	pop()
}

function initVid(){
	// var path = 'assets/vids/lotus_reg';
	// // var path = assetPath;//getURL().replace("index.html", assetPath);
	// vid = createVideo([path+".mov", path +".mp4", path+".webm"])
	// vid.loop();
}

function drawVid(){
	background(255, 0, 0)
}

function draw(){
	// Randomly swap every 5 seconds
	if (tick == (60*5)){
		clear();
		randomChange();
		tick = 0;
	}
	if (sketch == 0){
		drawBlob();
	}else if (sketch == 1){
		drawAudio();
	}else if (sketch == 2){
		drawBouncing();
	}else if (sketch == 3){
		drawVid();
	}

	tick += 1;
}

function initNew(){
	if (sketch == 0){
		initBlob();
	}else if (sketch == 1){
		initAudio();
	}else if (sketch == 2){
		initBouncing();
	}else if (sketch == 3){
		initVid();
	}
}

function randomChange(){
	sketch = sketches[getRandomInt(0, sketches.length-1)];
	// sketch = 3;
    saying = sayings[getRandomInt(0, sayings.length-1)];
    initNew();
}

// function keyPressed(){
// 	clear()
// 	if (keyCode === 49){
// 		initAudio();
// 		sketch = 1;
// 	}else if (keyCode === 50){
// 		initBlob()
// 		sketch = 2;
// 	}else if (keyCode === 51){
// 		initBouncing();
// 		sketch = 3;
// 	}
// }