//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates
function setup() {
  createCanvas(400, 400); //Use this function to define the size of the output window

  fill(255,255,255);
  var xco;
  var yco;

}
function draw() {
  background(0); //Set your background color to black (0)
  let shape_size = 200;
  xco=mouseX;
  yco=mouseY;
  //code here...
  if (xco>255){
    xco==255
  }
  else {
    xco=mouseX
  }
  if (yco>255){
    yco==255
  }
  else {
    yco=mouseY
  }
  fill(xco,yco,xco)
  rect(0,0,shape_size,shape_size)
  noFill();
  fill(xco,200,yco)
  rect(200,0,shape_size,shape_size)
  noFill();
  fill(200,xco,yco)
  rect(0,200,shape_size,shape_size)
  noFill();
  fill(xco,yco,200)
  rect(200,200,shape_size,shape_size)
  noFill();
}
