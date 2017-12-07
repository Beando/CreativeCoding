//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405

let x;
let xReverse;

function setup() {
  createCanvas(500, 500);
  textSize(18)
}

function draw() {
  background(255)

  x=mouseX;
  xReverse=map(mouseX,0,500,500,0)

  fill(255,0,0)
  rect(x,0,10,200)
  rect(xReverse,200,10,200)

  text(x,x+20,100)
  text(xReverse,xReverse+20,300)
}
