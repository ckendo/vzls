var vid;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  vid = createVideo("assets/vids/lotus_pinkpurple.mp4");
  vid.position(0, 0);
} 

function draw() { 
  background(220);
  image(vid, 0, 0);
}

function mousePressed() {
  vid.play();
}