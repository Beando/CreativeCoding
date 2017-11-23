//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color

let size = 50;

function setup() {
  createCanvas(500, 500);
  frameRate(3); //Drawing speed 3 fps
}

function draw() {
  ellipseMode(CORNER)
  //Run the nested loop for x, and y
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      //Draw the background shapes
      fill(215, 200, 170);
      console.log(x%2)
      if (x%2) {
        if (y%2){
        ellipse(size * x, size * y, size, size);
        rect(12.5+size * x, 12.5+size * y, size/2, size/2);
      }
      else {
        rect(size * x, size * y, size, size)
        ellipse(12.5+size * x, 12.5+size * y, size/2, size/2);
       }
      }
      else {
        if (y%2) {
          rect(size * x, size * y, size, size)
          ellipse(12.5+size * x, 12.5+size * y, size/2, size/2);
        }
        else {
          ellipse(size * x, size * y, size, size);
          rect(12.5+size * x, 12.5+size * y, size/2, size/2);
        }
      }

      //Draw the foreground shapes with a random RGB color
      //ellipseMode(CORNER)
      //Create a slight offeset for the x and y, to appear in the middle
      //ellipse(12.5+size * x, 12.5+size * y, size/2, size/2);
    }
  }
}
