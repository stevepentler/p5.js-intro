// function setup() {
//   width = 1000;
//   height = 400;
//   createCanvas(width, height);
//   background(0);
//   size = 40;
//   size_two = 40;
//   color = 255;
//   count = 0;

// }

// function draw() {
//   fill(random(color), random(color), random(color));
//   ellipse(random(width), random(height), size, size_two);
// }
 // ----------------------------------------

// function setup() {
//   createCanvas(1280, 680);
//   background('black');
// }

// function draw() {
//   if (mouseIsPressed) {
//     fill('magenta');
//     ellipse(mouseX, mouseY, 30, 30);
//   }
//   else {
//     fill(255);
//     ellipse(mouseX, mouseY, 20, 20);
//   }
// }
// -------------------------------------------
//  Crazy random colors, moves to the right 
// function setup() {
//   createCanvas(1280, 680);
//   background('black');
// }

// function draw() {
//   r = random(255)
//   g = random(255)
//   b = random(255)
//   if (mouseIsPressed) {
//     fill('magenta');
//     ellipse(mouseX, mouseY, 30, 30);
//   }
//   else {
//     fill(r, g, b);
//     ellipse(mouseX, mouseY, 40, 20);
//     mouseX+=5;
//   }
// }
// ---------------------------------------------

// // Crazy rotating cylinder thing 
// function setup(){
//   createCanvas(1200, 800, WEBGL);
// }

// function draw(){
//   background('black');
//   // rotateX(frameCount * 0.01);
//   rotateZ(frameCount * 0.01);
//   cone(200, 300);
//   torus(100, 60);
//   cylinder(150, 20);
// }


// -----------------------------------
// //  Wicked XY rotation
// function setup(){
//   createCanvas(1200, 800, WEBGL);
// }

// function draw(){
//   background('black');
//   rotateX(frameCount * 0.01);
//   rotateZ(frameCount * .9);
//   cone(200, 300);
//   torus(100, 60);
//   cylinder(150, 20);
//   ellipsoid(100, 100, 50);
// }

// --------------------------------------
function preload() {
  mySound = loadSound('/assets/Get Lucky (Vanderway Edit).mp3');
}

function setup() {
  createCanvas(100, 100);
  background(0, 255, 0);
  
  textAlign(CENTER);
  text('click here to play', width/2, height/2);

  mySound.setVolume(0.9);
}

// play sound on mouse press over canvas
function mousePressed() {
  if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
    mySound.play();
  }
}





