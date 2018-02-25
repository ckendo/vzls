var sketch = 0;
var mic;
var FPS = 60;
var tick = 0;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var imgsucc;
var background_color;
var imgstranger;
var saying;
var slide;
var sketches = [0, 1, 2, 3];
var slides = [];
var sayings = [
			  "the lip smackers golden age / the lip smackers renaissance",
              // "The Punch is Dry WTF How Is That Possible",
              "swipe right for more",
              "what’s your favorite color",
              "don't use ABBA's name in vain",
              "i can't stop thinking about toast",
              "Everyone Is Wearing Their Seatbelt But Its Like Behind Your Shoulder Which Isn't Very Safe",
              // "We're All Crammed In The Backseat",
              "You Had A Nip Slip All Night And No One Told You Sorry",
              "game on, brotato",
              "fill out a when2meet for my heart",
              "what's your five year career plan?",
              // "Open Face Apple Pie The Convertible of Apple Pies",
              "wow you are dusty!!!",
              "biddiness casual",
              "yeah, we met on brown connect",
              "sweaty and not ready",
              // "have you listened to enough ABBA today",
              // "hit em with that good ol razzmatazz",
              // "i lost my alt-pin",
              // "eggs bacon grits SAUSAGE",
              "Sorry for Not Answering the Phone I'm Too Busy Trying to Fly Away",
              "seriously, why are you so dusty how does that happen",
              "am i good enough now? is my dog good enough?",
              "endorse me on linkedin so i know it's real",
              // "I Need a Cup of Coffee and Some Bread to Wake Up",
              "do you have any siblings",
              "do you want to do.... Guy Stuff?",
              "rebate? more like rebae 😍",
              "call me by your 401k",
              "you've got a lovely pair of w-2s",
              "let's commit tax fraud together",
              "i'd love to amortize your discount on bonds payable",
              "are you a 1040EZ? cause i need to fill you in",
              "calc-you-later!",
              "your ti-84 plus is really sexy",
              "*points to your ti-84 plus* 'u got games on that thing?'",
              "In my office, ‘I.R.S.’ stands for ‘I’m really sexy.",
              "Death and Taxes One-Liners Jokes - IRS Jokes",
              "Beware This Incredibly Silly—But Still Effective—Tax Scam",
              "The Biggest Tax Scam Ever",
              "Listen, I'd love to sleep with you, but it's tax day and I feel like I've already been screwed by an entire government agency.",
              "You know, my return this year was huge…like, huuuuge.",
              "So do you file electronically around here often?",
              "how do i file for my bitcoin assets",
              "tax day, but make it kinky",
              "tax cut more like tax slut",
              "Best 25+ Taxes humor ideas on Pinterest | Accounting humor ...",
              "Tax Jokes and One Liners. Clean Short Good Bad.",
              "high strung, looking for same",
              "It’s accrual world out there but I’m willing to invest in you",
              "government slutdown",
              "6 Solid Pick Up Lines To Use On An Accountant - Float Blog",
              "cryptocurrency daddy, looking for same",
              ];
// Audio
var prev = color(255, 255, 255, 255)
var next = color(255, 255, 255, 255)
var randR;
var randG;
var randB;

// Bouncing
var x = 180;
var y = 180;
var x1;
var x2;
var x3;
var x4;
var x5;
var y1;
var y2;
var y3;
var y4;
var y5;
var xspeed1;
var xspeed2;
var xspeed3;
var xspeed4;
var xspeed5;
var yspeed1;
var yspeed2;
var yspeed3;
var yspeed4;
var yspeed5;
var xspeed = 2;
var yspeed = 2;

// Blob
var t;

// Video
var vid;
var gif;

function setup() {
	initCanvas();
	background(25);

    mic = new p5.AudioIn();
    mic.start();

    tick = 0;

	initAudio();
	initBouncing();
	initBlob();
	// initSucc();
	initSlides();
	randomChange();
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
	// randR = random(50, 120);
	// randG = random(50, 120);
	// randB = random(50, 120);
	randR = random(0, 50);
	randG = random(0, 50);
	randB = random(0, 50);

	// next = color(random(180, 250), random(180, 250), random(180, 250))

	background(random(200, 250), random(200, 250), random(200, 250));
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
		// next = color(random(180, 250), random(180, 250), random(180, 250))
		next = color(random(200, 250), random(200, 250), random(200, 250));
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
		rect(0, 30, h, h);
		rotate(PI/5);// +radians(frameCount)/10)
	}
	pop()

	push()
	fill(randR, randG, randB, 50);
	rotate(radians(frameCount)/10)
	for (var i = 0; i < 10; i ++) {
		rect(0, 30, h/2, h/2);
		rotate(PI/5);// +radians(frameCount)/10)
	}
	pop()

	push()
	fill(randR, randG, randB, 60);
	rotate(radians(frameCount)/8)
	for (var i = 0; i < 10; i ++) {
		rect(0, 30, h*3, h*3);
		rotate(PI/5);// +radians(frameCount)/10)
	}
	pop()

	textFont("Palatino")
	textSize(h/6);
	fill(50, 50, 50)
	textAlign(CENTER, CENTER)
	// text(saying, -windowWidth/2 + ((windowWidth/2)/2), -windowHeight/2 + ((windowHeight/2)/2), windowWidth/2, windowHeight/2);
	text(saying, -h-2, -h/2+2, h*2, h);

	textFont("Palatino")
	textSize(h/6);
	fill(255, 255, 255)
	textAlign(CENTER, CENTER)
	// text(saying, -windowWidth/2 + ((windowWidth/2)/2), -windowHeight/2 + ((windowHeight/2)/2), windowWidth/2, windowHeight/2);
	text(saying, -h, -h/2, h*2, h);

}

function initBlob(){
	t = 0;
	// background(random(180, 250), random(180, 250), random(180, 250));
	background(random(0, 100), random(0, 100), random(0, 100));

	// background(random(150, 255), random(150, 255), random(150, 255), 127);
	stroke(255, 15);
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
	textFont("Palatino");
	textSize(50);
	fill(100);
	textAlign(CENTER, CENTER);
	// text(saying, -2, +2)
  	text(saying, (-windowWidth/4)-2, (-windowHeight/4)+2, windowWidth/2, windowHeight/2);
	pop()

	push()
	textFont("Palatino");
	textSize(50);
	fill(255);
	textAlign(CENTER, CENTER);
	// text(saying, 0, 0)
  	text(saying, -windowWidth/4, -windowHeight/4, windowWidth/2, windowHeight/2);
	pop()
}

function initBouncing(){
	background(random(160, 200), random(160, 200), random(160, 200));
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

	fill (random(80, 150), random(80, 150), random(80, 150));
	// push()
	// translate(x, y)
	// for (var i = 0; i < 10; i ++) {
	// 	ellipse(0, 30, d/4, d);
	// 	rotate(PI/5);// +radians(frameCount)/10)
	// }
	// pop()
	push()
	translate(x, y)
	ellipse(0, 0, d, d);
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
	textFont("Palatino");
	textSize(50);
	fill(100);
	textAlign(CENTER, CENTER);
	text(saying, (windowWidth/4)-2, (windowHeight/4)+2, windowWidth/2, windowHeight/2)
  	// text(saying, (-windowWidth/2)-2, (-windowHeight/2)+2, windowWidth/2, windowHeight/2);

	pop()

	push()
	textFont("Palatino");
	textSize(50);
	fill(255);
	textAlign(CENTER, CENTER);
	text(saying, windowWidth/4, windowHeight/4, windowWidth/2, windowHeight/2)
  	// text(saying, -windowWidth/2, -windowHeight/2, windowWidth/2, windowHeight/2);
	pop()
}

function preload()
{
	img1 = loadImage("https://ckendo.github.io/vzls/js/assets/slides/1.jpg");
	img2 = loadImage("https://ckendo.github.io/vzls/js/assets/slides/2.jpg");
	img3 = loadImage("https://ckendo.github.io/vzls/js/assets/slides/3.jpg");
	img4 = loadImage("https://ckendo.github.io/vzls/js/assets/slides/4.jpg");
	img5 = loadImage("https://ckendo.github.io/vzls/js/assets/slides/5.jpg");
	img6 = loadImage("https://ckendo.github.io/vzls/js/assets/slides/6.jpg");
	img7 = loadImage("https://ckendo.github.io/vzls/js/assets/slides/7.jpg");
	img8 = loadImage("https://ckendo.github.io/vzls/js/assets/slides/8.jpg");

	slides = [img1, img2, img3, img4, img5, img6, img7, img8]
}

function initSucc(){

	background_color = color(random(10, 70), random(10, 70), random(10, 70));

	x1 = random(0, windowWidth);
	y1 = random(0, windowHeight);
	x2 = random(0, windowWidth);
	y2 = random(0, windowHeight);
	x3 = random(0, windowWidth);
	y3 = random(0, windowHeight);
	x4 = random(0, windowWidth);
	y4 = random(0, windowHeight);
	x5 = random(0, windowWidth);
	y5 = random(0, windowHeight);

	xspeed1 = 2;
	yspeed1 = 2;
	xspeed2 = 2.1;
	yspeed2 = -2.1;
	xspeed3 = 1.5;
	yspeed3 = 1.5;
	xspeed4 = -1.8;
	yspeed4 = -1.8;
	xspeed5 = -2.2;
	yspeed5 = 2.2;
}

function drawSucc() {
	background(background_color)
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

	// fill (random(200, 250), random(200, 250), random(200, 250));
	// push()
	// translate(x, y)
	// for (var i = 0; i < 10; i ++) {
	// 	ellipse(0, 30, d/4, d);
	// 	rotate(PI/5);// +radians(frameCount)/10)
	// }
	// pop()
	// image(img1, windowWidth/2, windowHeight/2);

	push()
	translate(x1, y1)
	image(img1, 0, 0, windowWidth/2, windowWidth/4);
	pop()

	push()
	translate(x2, y2)
	image(img2, 0, 0, windowWidth/2, windowWidth/4);
	pop();

	push()
	translate(x3, y3)
	image(img3, 0, 0, windowWidth/2, windowWidth/4);
	pop();

	push()
	translate(x4, y4)
	image(img4, 0, 0, windowWidth/2, windowWidth/4);
	pop();

	push()
	translate(x5, y5)
	image(img5, 0, 0, windowWidth/2, windowWidth/4);
	pop();

	//bouncing horizontally
	x1 = x1 + xspeed1;

	if (x1 > windowWidth || x1 < 0)  {
		xspeed1 = -xspeed1;
	}

	//bouncing veritcally
	y1 = y1 + yspeed1;

	if (y1 > windowHeight || y1 < 0) {
		yspeed1 = -yspeed1;
	}

	x2 = x2 + xspeed2;

	if (x2 > windowWidth || x2 < 0)  {
		xspeed2 = -xspeed2;
	}

	//bouncing veritcally
	y2 = y2 + yspeed2;

	if (y2 > windowHeight || y2 < 0) {
		yspeed2 = -yspeed2;
	}

	x3 = x3 + xspeed3;

	if (x3 > windowWidth || x3 < 0)  {
		xspeed3 = -xspeed3;
	}

	//bouncing veritcally
	y3= y3 + yspeed3;

	if (y3 > windowHeight || y3 < 0) {
		yspeed3 = -yspeed3;
	}

	x4 = x4 + xspeed4;

	if (x4 > windowWidth || x4 < 0)  {
		xspeed4 = -xspeed4;
	}

	//bouncing veritcally
	y4 = y4 + yspeed4;

	if (y4 > windowHeight || y4 < 0) {
		yspeed4 = -yspeed4;
	}

	x5 = x5 + xspeed5;

	if (x5 > windowWidth || x5 < 0)  {
		xspeed5 = -xspeed5;
	}

	//bouncing veritcally
	y5 = y5 + yspeed5;

	if (y5 > windowHeight || y5 < 0) {
		yspeed5 = -yspeed5;
	}

	// push()
	// textFont("Palatino");
	// textSize(d/6);
	// fill(100);
	// textAlign(CENTER, CENTER);
	// text(saying, (windowWidth/4)-2, (windowHeight/4)+2, windowWidth/2, windowHeight/2)
	// // text(saying, -d-2, (-d/2)+2, d*2, d);
 //  	// text(saying, (-windowWidth/2)-2, (-windowHeight/2)+2, windowWidth/2, windowHeight/2);

	// pop()

	// push()
	// textFont("Palatino");
	// textSize(d/6);
	// fill(255);
	// textAlign(CENTER, CENTER);
	// text(saying, windowWidth/4, windowHeight/4, windowWidth/2, windowHeight/2)
	// // text(saying, -d, -d/2, d*2, d);

 //  	// text(saying, -windowWidth/2, -windowHeight/2, windowWidth/2, windowHeight/2);
	// pop()
}

function initSlides(){
	background(250, 250, 250);
	slide = slides[getRandomInt(0, slides.length-1)];
}

function drawSlides() {
	background(250)
	// if (frameCount % 100 == 0){
	// 	prev = next;
	// 	// next = color(random(180, 250), random(180, 250), random(180, 250))
	// 	next = color(random(200, 250), random(200, 250), random(200, 250));
	// }
	// Get the overall volume (between 0 and 1.0)
	var vol = mic.getLevel();

	var h = map(vol, 0, 1, windowHeight/2, 0);
	noStroke();

	push()
	// image(slide, -h/4,- h/4, windowWidth + h/2, windowHeight + h/2)
	image(slide, windowWidth/4 -h/4,windowHeight/4 - h/4, windowWidth/2 + h/2, windowHeight/2 + h/2)
	// fill(randR, randG, randB, 40);
	// rotate(radians(frameCount)/12)
	// for (var i = 0; i < 10; i ++) {
	// 	rect(0, 30, h, h);
	// 	rotate(PI/5);// +radians(frameCount)/10)
	// }
	pop()

}

// function initVid(){
// 	// var path = 'assets/vids/lotus_pinkpurple';
// 	// // var path = assetPath;//getURL().replace("index.html", assetPath);
// 	// vid = createVideo([path+".mov", path +".mp4", path+".webm"])
// 	// // vid.position(0, 0);
// 	// // vid.play();
// 	// vid.loop();
//   	// gif = loadImage(assets + '.gif');

// }

// function drawVid(){
// 	image(gif, 0, 0);
// }

function draw(){
	// Randomly swap every 15 seconds
	if (tick == (60*15)){
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
		drawSlides()
	}


	tick += 1;
}

function initNew(){
	clear()
	if (sketch == 0){
		initBlob();
	}else if (sketch == 1){
		initAudio();
	}else if (sketch == 2){
		initBouncing();
	}else if (sketch == 3){
		initSlides();
	}
}

function randomChange(){
	sketch = sketches[getRandomInt(0, sketches.length-1)];
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