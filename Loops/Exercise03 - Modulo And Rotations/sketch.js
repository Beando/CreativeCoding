//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//Exercise 3 Modulo and Rotations

function setup() {
  createCanvas(500, 500);
  frameRate(5)
  noFill()
  strokeWeight(8)
  let size =50;
}

function draw() {
  background(0);

  for(let i=0; i<100; i++){
    stroke(random(255),random(255),random(255));
    push();
    translate(width*size,height*size);
    rotate(PI/3.0);
    rect(random(width),random(height),50,50);
    pop();
  }
}
