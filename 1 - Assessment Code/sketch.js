//Sets variables up for rest of the program
//LineArr is the Array holding the Line positions, circleArr is for the circles
let lineArr = [];
let circleArr = [];
//Arraysize will be the size of the Array LineArr
let arraySize = 50;
//backg holds the value for background colour
let backg = 0;
//colour values for cursor shape and squares
let colour1 = 255;
let colour2 = 255;
let colour3 = 255;
let circleSize = 10;
//Contains the x and y for the mouse cursor shape
let x;
let y;
//setup sets up the arrays filling them with the positions etc
function setup() {
  //Creates the canvas with the size of 594x841px
  var canvas = createCanvas(594, 841);
  //creates a HTML tag for the canvas
  canvas.parent("myContainer");
  //Creates the arrays with the size of the variable arraysize
  for (let i=0; i<arraySize; i++){
    lineArr[i] = new Lines(width/2, height/2, random(-5, 5), random(-5, 5));
  }
  for (let i=0; i<arraySize; i++){
    circleArr[i] = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(5,15));
  }
}
//Draw constantly produces the images (frame rate of 60fps)
function draw() {
  // Background colour = the value of backg
  background(backg);
  //setting up of x and y positions of mouse
  x=mouseX
  y=mouseY
  //reversing the x and y positions
  xReverse=map(mouseX,0,500,500,0)
  yReverse=map(mouseY,0,841,841,0)
  //filling the shapes with colour
  fill(colour1,colour2,colour3,backg)
  //turning stroke off
  noStroke()
  //creates two circles, one follows the mouse and the other runs from it
  ellipse(x,y,circleSize,circleSize)
  ellipse(xReverse,yReverse,circleSize,circleSize)
  //Produces and runs the array creations
  for (let i=0; i<lineArr.length; i++){
    lineArr[i].lmoveFunction();
    lineArr[i].displayLine();
  }
  for (let i=0; i<circleArr.length; i++){
    circleArr[i].cmoveFunction();
    circleArr[i].displayCircle();
  }
  //produces the random squares displayed
  for(let i=0; i<50; i++){
    noFill()
    //fills the outlines of the shapes with c1,c2,c3 and sets the opacity as random
    stroke(colour1,colour2,colour3,random(255));
    //setsup the transformation
    push();
    //rotates the shape by 3.15/3
    rotate(PI/3.0);
    //creates the shapes
    rect(random(width),random(height),50,50);
    //executes the transformation
    pop();
  }
}
//Changes the background colour on mouse button release
function mouseReleased() {
  backg+=random(0,255)
  if (backg>255){
    backg=0
  }
  }
//On certain key presses this will change the colour values of the squares
function keyReleased(){
  //if key is q then change circle size by 10
  if (keyCode == 81){
    circleSize+=10
    //if circle size is greater than 200 set it to 10
    if (circleSize>200) {
        circleSize=10
    }
  }
  //if key is 1 then change red colour by 25
  if (keyCode == 49){
    colour1 +=25
    //if the red colour is greater than 255, set it to 0
    if (colour1>255){
      colour1=0
    }
  }
  //if key is 2 then change green colour by 25
  if (keyCode == 50){
    colour2 +=25
    //if the green colour is greater than 255, set it to 0
    if (colour2>255) {
      colour2=0
    }
  }
  //if key is 3 then change blue colour by 25
  if (keyCode == 51){
    colour3 +=25
    //if the blue colour is greater than 255, set it to 0
    if (colour3>255) {
      colour3=0
    }
  }
}
//Definition of the class Circle
class Circle{
//creates the element using the given input
constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.red = 255;
    this.green = 255;
    this.blue = 255;
    this.opac = random(10,255);
  }
//Function that produces the movement
cmoveFunction(){
  //Motion system - current position and speed
  this.x = this.x + this.speedX;
  this.y = this.y + this.speedY;

  //Based on boundaries collision, reverse direction for x and y
  if (this.x > width || this.x<0){
    this.speedX *= -1;
  }
  if (this.y > (height) || this.y<0){
    this.speedY *= -1;
  }
}
//Function that displays the Circle
displayCircle(){
  noStroke();
  this.fillcol = color(this.red, this.green, this.blue, this.opac)
  fill(this.fillcol);
  ellipse(this.x, this.y, this.size, this.size);
}
}
//Definition of the class Lines
class Lines{
//creates the element using the given input
  constructor(x, y, speedX, speedY){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }
//Function that produces the movement
lmoveFunction(){
  //Motion system - current position and speed
  // x and y movement
  this.x = this.x + this.speedX
  this.y = this.y + this.speedY
  //Backwards movement
  this.x1 = abs(this.x);
  this.y1 = abs(this.y);
  // if the backwards movement hits a boundary, reverse
  if (this.x1 > width || this.x1<0){
    stroke(255,random(255))
    this.y1 *= -1;
  }
  // if the backwards movement hits a boundary, reverse
  if (this.y1 > height || this.y1<0){
    stroke(255,random(255))
    this.x1 *= -1;
  }
  //Based on boundary collision, reverse direction for x and y
  if (this.x > width || this.x<0){
    stroke(255,random(255))
    this.speedX *= -1;
  }
  //Based on boundary collision, reverse direction for x and y
  if (this.y > height || this.y<0){
    stroke(255,random(255))
    this.speedY *= -1;
  }
  }
//Class function that displays the line
displayLine(){
  //stroke Weight defines the thickness of the line element
    strokeWeight(10)
    line(this.x, this.y, this.y1, this.x1);
  }
}
