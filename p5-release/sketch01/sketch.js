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

function setup() {
  createCanvas(640, 480);
  color = 255;
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}