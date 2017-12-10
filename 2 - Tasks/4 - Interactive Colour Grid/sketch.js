//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//10_Exercise 5 - Interactive Color Grid

let tileSize = 50;

function setup() {
  createCanvas(500, 500); //Use this function to define the size of the output window
  stroke(255);
}

function draw() {
  background(0); //Set your background color to black (0)

  //code here...
  var mouse1 = map(mouseY,0,height,0,255)
  var mouse2 = map(mouseX,0,width,0,255)
  var mouse3 = map(mouseY,0,width,255,0)

  var color1 = color(255,37,54,255)
  var color2 = color(36,194,203,mouse1)
  var color3 = color(36,194,203,mouse2)
  var color4 = color(239,108,46,mouse3)

  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      //Draw the background shapes
      //fill(215, 200, 170);

      if(mouseX>x && mouseX<x+tileSize && mouseY>y && mouseY<y+tileSize) fill(color1);
      else if (mouseX>x && mouseX<x+tileSize) fill(color2);
      else if (mouseY>y && mouseY<y+tileSize) fill(color3);
      else fill(color4);
      rect(x,y,tileSize,tileSize);
}
}

}
