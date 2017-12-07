//Sets variables up for rest of the program
//LineArr is the Array holding the Line positions, circleArr is for the circles
let lineArr = [];
let circleArr = [];
//Arraysize will be the size of the Array LineArr
let arraySize = 50;
//backg holds the value for background colour
let backg = 0;
//setup sets up the arrays filling them with the positions etc
function setup() {
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");
  for (let i=0; i<arraySize; i++){
    lineArr[i] = new Lines(width/2, height/2, random(-5, 5), random(-5, 5));
  }
  for (let i=0; i<arraySize; i++){
    circleArr[i] = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(5,15));
  }
}

function draw() {
  background(backg);

  for (let i=0; i<lineArr.length; i++){
    lineArr[i].lmoveFunction();
    lineArr[i].displayLine();
  }
  for (let i=0; i<circleArr.length; i++){
    circleArr[i].cmoveFunction();
    circleArr[i].displayCircle();
  }
}
//Changes the background colour on mouse button release
function mouseReleased() {
  backg+=random(0,255)
  if (backg>255){
    backg=0
  }
  }
//Definition of the class Circle
class Circle{

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
//Class function that takes care of motion and collision

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

//Class function that displays the Circle
displayCircle(){
  noStroke();
  this.fillcol = color(this.red, this.green, this.blue, this.opac)
  fill(this.fillcol);
  ellipse(this.x, this.y, this.size, this.size);
}
}

//Definition of the class Lines
class Lines{

  constructor(x, y, speedX, speedY){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }
//Class function that takes care of motion and collision

lmoveFunction(){
  //Motion system - current position and speed
  this.x = this.x + this.speedX
  this.y = this.y + this.speedY
  this.x1 = abs(this.x);
  this.y1 = abs(this.y);
  if (this.x1 > width || this.x1<0){
    stroke(255,random(255))
    this.y1 *= -1;
  }
  if (this.y1 > height || this.y1<0){
    stroke(255,random(255))
    this.x1 *= -1;
  }
  //Based on boundaries collision, reverse direction for x and y
  if (this.x > width || this.x<0){
    stroke(255,random(255))
    this.speedX *= -1;
  }
  if (this.y > height || this.y<0){
    stroke(255,random(255))
    this.speedY *= -1;
  }
  }
//Class function that displays the line
displayLine(){
    strokeWeight(10)
    line(this.x, this.y, this.y1, this.x1);
  }
}
