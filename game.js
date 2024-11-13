function setup() {
  createCanvas(900, 800);
}

setup();

// function draw() {
//   background(255, 140, 0);
// }

// ////////////////

background(255, 255, 255);

let y = 140;
let x = 400;

function victim(x, y, s) {
  // the code of the victim stickman

  //ropes for the elevator
  push();
  strokeWeight(4 * s);
  stroke(150);
  line(x - 85 * s, y - 60 * s, x, y - 140 * s);
  line(x + 85 * s, y - 60 * s, x, y - 140 * s);
  line(x, y - 140 * s, x, 0);
  pop();

  //elevator
  push();
  fill(168, 116, 88);
  strokeWeight(3 * s);
  rect(x - 85 * s, y - 60 * s, 170 * s, 250 * s);
  pop();

  fill(105, 72, 54);
  quad(x - 85 * s, y + 190 * s, x - 50 * s, y + 150 * s, x + 50 * s, y + 150 * s, x + 85 * s, y + 190 * s);
  quad(x - 85 * s, y - 60 * s, x - 50 * s, y - 20 * s, x + 50 * s, y - 20 * s, x + 85 * s, y - 60 * s);

  push();
  strokeWeight(2 * s);
  stroke(77, 53, 44);
  line(x - 84 * s, y + 189 * s, x - 50 * s, y + 150 * s);
  line(x - 50 * s, y + 150 * s, x + 50 * s, y + 150 * s);
  line(x + 50 * s, y + 150 * s, x + 84 * s, y + 189 * s);
  line(x - 84 * s, y - 59 * s, x - 50 * s, y - 20 * s);
  line(x - 50 * s, y - 20 * s, x + 50 * s, y - 20 * s);
  line(x + 50 * s, y - 20 * s, x + 84 * s, y - 59 * s);
  line(x - 50 * s, y + 150 * s, x - 50 * s, y - 20 * s);
  line(x + 50 * s, y + 150 * s, x + 50 * s, y - 20 * s);
  pop();

  // THE VICTIM STICKMAN

  push();
  fill(0, 0, 0);
  strokeWeight(5 * s);

  // arms
  line(x, y + 50 * s, x + 60 * s, y - 20 * s);
  ellipse(x + 60 * s, y - 20 * s, 4 * s, 3 * s);
  line(x, y + 50 * s, x - 60 * s, y - 20 * s);
  ellipse(x - 60 * s, y - 20 * s, 4 * s, 3 * s);

  // body and head
  fill(255, 255, 255);
  rect(x - 20 * s, y + 10 * s, 40 * s, 90 * s);
  ellipse(x, y, 60 * s);

  // legs
  line(x + 20 * s, y + 100 * s, x + 20 * s, y + 170 * s);
  ellipse(x + 22 * s, y + 170 * s, 4 * s, 3 * s);
  line(x - 20 * s, y + 100 * s, x - 20 * s, y + 170 * s);
  ellipse(x - 22 * s, y + 170 * s, 4 * s, 3 * s);
  pop();

  // eyes
  fill(0, 0, 0);
  ellipse(x - 12 * s, y - 4 * s, 7 * s);
  ellipse(x + 12 * s, y - 4 * s, 7 * s);

  //mouth
  ellipse(x, y + 12 * s, 30 * s, 20 * s);
}

let speed = 3;

function draw() {
  background(255, 255, 255);
  victim(x, y, 0.7);

/*
  if (y <= 800) {
    y += 3;
  }
*/

/*
    y+=speed;
    if (y>500 || y<200) {
        speed = speed * -1;
        console.log("Bounce");
    }
*/
}

function savior(x, y) {
  //the code for the savior stickman

  //the switch control for the savior


}