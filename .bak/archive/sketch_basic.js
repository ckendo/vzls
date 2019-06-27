var sketch = 0;
var mic;
var FPS = 60;
var saying;
var sketches = [1, 2, 3];
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

function setup() {
	initCanvas();
	background(25);

    mic = new p5.AudioIn();
    mic.start();

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
}

function drawAudio() {
	background(0, 0, 255);
	textFont("Baskerville")
	textSize(windowHeight/15);
	fill(255, 255, 255)
	textAlign(CENTER, CENTER)
	text(saying, windowWidth/2, windowHeight/2);
}

function initBlob(){
}

function drawBlob() {
	background(0, 255, 0);
	textFont("Baskerville")
	textSize(windowHeight/15);
	fill(255, 255, 255)
	textAlign(CENTER, CENTER)
	text(saying, windowWidth/2, windowHeight/2);
}

function initBouncing(){
}

function drawBouncing() {
	background(255, 0, 0);
	textFont("Baskerville")
	textSize(windowHeight/15);
	fill(255, 255, 255)
	textAlign(CENTER, CENTER)
	text(saying, windowWidth/2, windowHeight/2);
}

function draw(){
	// Randomly swap every 5 seconds
	if (frameCount % (60*5) == 0){
		randomChange();
	}
	if (sketch == 1){
		drawBlob();
	}else if (sketch == 2){
		drawAudio();
	}else if (sketch == 3){
		drawBouncing();
	}
}

function randomChange(){
	sketch = sketches[getRandomInt(0, sketches.length)];
    saying = sayings[getRandomInt(0, sayings.length)];
}

function keyPressed(){
	clear()
	if (keyCode === 49){
		initAudio();
		sketch = 1;
	}else if (keyCode === 50){
		initBlob()
		sketch = 2;
	}else if (keyCode === 51){
		initBouncing();
		sketch = 3;
	}
}