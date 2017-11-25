//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates

function setup() {
  createCanvas(400, 400); //Use this function to define the size of the output window

  fill(255,255,255);
}

function draw() {
  background(0); //Set your background color to black (0)
  let shape_size = 200;
  //code here...
  rect(0,0,shape_size,shape_size)
  rect(200,0,shape_size,shape_size)
  rect(0,200,shape_size,shape_size)
  rect(200,200,shape_size,shape_size)
}
