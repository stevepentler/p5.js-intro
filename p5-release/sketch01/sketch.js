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
  createCanvas(1200, 800);
}

function draw() {
  var c = color('magenta');
  if (mouseIsPressed) {
    fill(c);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 20, 50);
}