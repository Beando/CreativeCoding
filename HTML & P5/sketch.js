
let lineArr = [];
let arraySize = 50;

function setup() {
  var canvas = createCanvas(594, 841);
  //canvas.position(25,0);
  canvas.parent("myContainer")
  for (let i=0; i<arraySize; i++){
    lineArr[i] = new Lines(width/2, height/2, random(-5, 5), random(-5, 5), random(5,15));
  }
}

function draw() {
  background(160);
  strokeWeight(random(15));
  for (let i=0; i<lineArr.length; i++){
    lineArr[i].moveFunction();
    lineArr[i].displayLine();
  }
}

//Definition of the class Circle
class Lines{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = random(10,255);
  }
  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    this.x1= abs(this.x)
    this.y1= abs(this.y)

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

  //Class function that displays the ellipse
  displayLine(){
    //noFill();
    //this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    //fill(this.fillcol);
    line(this.x, this.y, this.y1 ,this.x1 );
  }
}
