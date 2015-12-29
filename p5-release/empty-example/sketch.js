// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  width = 1000;
  height = 400;
  createCanvas(width, height);
  background(0);

}

function draw() {
  fill(random(color), random(color), random(color));
  ellipse(random(width), random(height), size, size_two);

  size += 1
}