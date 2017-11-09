var t;
var sketch = 0;
var mic;
var FPS = 60;
var prev = color(255, 255, 255, 255)
var next = color(255, 255, 255, 255)
var tick = 100;
var flowerR;
var flowerG;
var flowerB;
var saying;

function setup() {
	initCanvas();
	background(random(180, 250), random(180, 250), random(180, 250));
	stroke(0, 15);
	noFill();
	t = 0;

	// prev = color(255, 255, 255, 255);
	// next = color(255, 255, 255, 255);

	// flowerR = random(50, 120);
	// flowerG = random(50, 120);
	// flowerB = random(50, 120);

    mic = new p5.AudioIn();
    mic.start();
	var sayings = ["we want a sumptuous drizzling please",
                  "just cooking up a nice batch of sabotage",
                  "oil separation is normal",
                  "hey there, sexy garden gnome",
                  "you bet your garden",
                  "The Punch is Dry WTF How Is That Possible",
                  "do you... want to go to the Prom with me? no pressure",
                  "garden hoe",
                  "who's that hottie over by the hydrangeas???",
                  "Good evening nice to meet you unfortunately I can't stay for long because i don't want to be here",
                  "i love making pickles, do you?",
                  "i love your... muscular smile",
                  "what's your ideal harvest season?",
                  "Everyone Is Wearing Their Seatbelt But Its Like Behind Your Shoulder Which Isn't Very Safe",
                  "your organic garden or mine?",
                  "one-way ticket to flavortown",
                  "We're All Crammed In The Backseat",
                  "You Had A Nip Slip All Night And No One Told You Sorry",
                  "game on, brotato",
                  "why are these bees so muscular, what are they eating?",
                  "you're like a, uh, sexy... flower pot",
                  "hit em with that g! cal! invite!",
                  "fill out a when2meet for my heart",
                  "i think you're my... Swolemate",
                  "existential dread and chill",
                  "i am, objectively, so sweaty",
                  "vulnerable and unbothered",
                  "overcooked, but palatable",
                  "what's your five year career plan?",
                  "did you go to philips or exeter?",
                  "hey, I like your zip-off pants",
                  "wow you are dusty!!!",
                  "seriously, why are you so dusty how does that happen",
                  "ask the cutie before you touch the booty",
                  "what's your alignment?",
                  "it’s funny how slippery this jam is!",
                  "i'm just not that into you",
                  "what are you doing after this?",
                  "all is fair in love and war",
                  "i need to do some trimming",
                  "mushrooms?",
                  "it's tuber time",
                  "sweet sweet nectar",
                  "am i good enough now? is my dog good enough?",
                  "endorse me on linkedin so i know it's real",
                  "hot n juicy?",
                  "sound the alarm",
                  "i don't think about you",
                  "we should hang out sometime?",
                  "do you want to do.... Guy Stuff?",
                  "rip vine and chill?",
                  "haha, then what??",
                  "you're like a sweet honeybee stinging my heart",
                  "all natural horticultural hijinks",
                  "no one installs a fence post quite like you"];
    saying = sayings[getRandomInt(0, sayings.length)];

}

function initCanvas(){
	var canvas = createCanvas(windowWidth, windowHeight, P2D);
	canvas.parent('sketch');
	frameRate(FPS);
	// noSmooth();
	// strokeWeight(WEIGHT);
	// stroke(FOREGROUND, OPACITY);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initAudio(){
	prev = color(255, 255, 255, 255);
	next = color(255, 255, 255, 255);
	// prev = get(width/2, height/2)

	flowerR = random(50, 120);
	flowerG = random(50, 120);
	flowerB = random(50, 120);

	// var sayings = ["we want a sumptuous drizzling please",
	//             "just cooking up a nice batch of sabotage",
	//             "oil separation is normal",
	//             "you bet your garden",
	//             "garden hoe",
	//             "who's that hottie over by the hydrangeas???",
	//             "i love making pickles, do you?",
	//             "what's your ideal harvest season?",
	//             "your organic garden or mine?",
	//             "you're like a sweet honeybee stinging my heart",
	//             "all natural horticultural hijinks",
	//             "i'm just not that into you",
	//             "what are you doing after this?",
	//             "we should hang out sometime",
	//             "haha, then what??",
	//             "rip vine and chill?",
	//             "no one installs a fence post quite like you"];
	// saying = sayings[getRandomInt(0, sayings.length)];
}

function drawAudio() {
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
	// A design for a simple flower
	translate(windowWidth/2, windowHeight/2);
	noStroke();

	push()
	fill(flowerR, flowerG, flowerB, 40);
	rotate(radians(frameCount)/12)
	for (var i = 0; i < 10; i ++) {
		ellipse(0, 30, h/4, h);
		rotate(PI/5);
	}
	pop()

	push()
	fill(flowerR, flowerG, flowerB, 50);
	rotate(radians(frameCount)/10)
	for (var i = 0; i < 10; i ++) {
		ellipse(0, 30, h/4, h);
		rotate(PI/5);
	}
	pop()

	push()
	fill(flowerR, flowerG, flowerB, 60);
	rotate(radians(frameCount)/8)
	for (var i = 0; i < 10; i ++) {
		ellipse(0, 30, h/4, h);
		rotate(PI/5);
	}
	pop()

  	push()
    textFont("Baskerville");
    textSize(h/6);
    fill(100);
    textAlign(CENTER, CENTER);
    // text(saying), 0, 0);
	text(saying, (-windowWidth/4)-2, (-windowHeight/4)+2, windowWidth/2, windowHeight/2);
    pop()

  	push()
    textFont("Baskerville");
    textSize(h/6);
    fill(255);
    textAlign(CENTER, CENTER);
	text(saying, -windowWidth/4, -windowHeight/4, windowWidth/2, windowHeight/2);
    pop()
}

function initBlob(){
	background(random(180, 250), random(180, 250), random(180, 250));
	stroke(0, 15);
	noFill();
	t = 0;
	// mic = new p5.AudioIn();
	// mic.start();
	// var sayings = ["we want a sumptuous drizzling please",
	//               "just cooking up a nice batch of sabotage",
	//               "oil separation is normal",
	//               "you bet your garden",
	//               "garden hoe",
	//               "who's that hottie over by the hydrangeas???",
	//               "i love making pickles, do you?",
	//               "what's your ideal harvest season?",
	//               "your organic garden or mine?",
	//               "one-way ticket to flavortown",
	//               "ask the cutie before you touch the booty",
	//               "what's your alignment?",
	//               "It’s funny how slippery this jam is!",
	//               "Want to cross pollinate?",
	//               "i'm just not that into you",
	//               "what are you doing after this?",
	//               "we should hang out sometime",
	//               "rip vine and chill?",
	//               "haha, then what??",
	//               "you're like a sweet honeybee stinging my heart",
	//               "all natural horticultural hijinks",
	//               "no one installs a fence post quite like you"];
	// saying = sayings[getRandomInt(0, sayings.length)];
}

function drawBlob() {

  	var vol = mic.getLevel();
  	var d = map(vol, 0, 1, height*0.7, 0);

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

	// clear the background every 600 frames using mod (%) operator
	if (frameCount % 600 == 0) {
		next = color(random(180, 250), random(180, 250), random(180, 250))
  		background(next)
	}

  	push()
    textFont("Baskerville");
    textSize(50);
    fill(100);
    textAlign(CENTER, CENTER);
    // text(saying), 0, 0);
    text(saying, -2, +2)
    pop()

  	push()
    textFont("Baskerville");
    textSize(50);
    fill(255);
    textAlign(CENTER, CENTER);
    // text(saying), 0, 0);
    text(saying, 0, 0)
    pop()

}

function draw(){
	// drawAudio()
	if (sketch == 1){
		drawBlob();
	}else if (sketch == 2){
		drawAudio();
	}
}

function keyPressed(){
	clear()
	if (keyCode === 49){
		// background(255)
		initAudio();
		sketch = 1;
	}else if (keyCode === 50){
		// background(255)
		initBlob()
		sketch = 2;
	}
}