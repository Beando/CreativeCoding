//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//02_Nested For-Loop - Console

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      //Print result to the console
      //Open Chrome > View > Developer > Javascript Console
      console.log("X: " + x + ", Y: " + y)
    }
  }
}
