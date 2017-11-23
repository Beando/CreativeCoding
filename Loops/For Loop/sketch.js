//https://p5js.org
//https://p5js.org/learn/

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
let size =50;
//Initialization function
function setup() {

  createCanvas(500,500);
  noLoop();
}

//Rendering function
function draw() {
  //Set a background color
  background(255);
  fill(215,200,170);
  for(let x=0;x<10;x++){
    rect(size*x,height/2,size,size)
  }
}
