//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
let x;
let y;
let speedX;
let speedY;
let r;
let g;
let b;

function setup() {
  var canvas = createCanvas(500, 500);
  //canvas.position(25,0);
  canvas.parent("myContainer")
  x=width/2
  y=height/2
  speedX=random(-5,5)
  speedY=random(-5,5)
}

function draw() {
  background(100)

  x+=speedX;
  y+=speedY;
  if (x+25>width) {
    //x=0
    r = random(255)
    g = random(255)
    b = random(255)
    speedX=speedX*-1
    }
  if (x-25<0){
    //x=width
    r = random(255)
    g = random(255)
    b = random(255)
    speedX=abs(speedX)

  }
  if (y+25>height){
    //y=0
    r = random(255)
    g = random(255)
    b = random(255)
    speedY=speedY*-1
  }
  if (y-25<0){
    //y=height
    r = random(255)
    g = random(255)
    b = random(255)
    speedY=abs(speedY)
  }
  fill(r,g,b)
  ellipse(x,y,50,50)

  noFill()
  fill(255)
  //text(x,width/2,height/2-20)
  //text(y,width/2,height/2+20)
}
