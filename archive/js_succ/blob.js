var t;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(random(180, 250), random(180, 250), random(180, 250));
	stroke(0, 15);
	noFill();
	t = 0;
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
                  "one-way ticket to flavortown",
                  "ask the cutie before you touch the booty",
                  "what's your alignment?",
                  "It’s funny how slippery this jam is!",
                  "Want to cross pollinate?",
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