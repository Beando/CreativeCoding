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
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Draw the background shapes
      fill(215, 200, 170);
      rect(tileSize * x, tileSize * y, tileSize, tileSize);
}
}
}
