function setup() {
  createCanvas(900, 800);
}

setup();

// function draw() {
//   background(255, 140, 0);
// }

// ////////////////

background(255, 255, 255);

let x = 400;
let y = 140;

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

  push();
  fill(105, 72, 54);
  strokeWeight(0);
  quad(x - 85 * s, y + 190 * s, x - 50 * s, y + 150 * s, x + 50 * s, y + 150 * s, x + 85 * s, y + 190 * s);
  quad(x - 85 * s, y - 60 * s, x - 50 * s, y - 20 * s, x + 50 * s, y - 20 * s, x + 85 * s, y - 60 * s);
  pop();

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

    // arms
  push();
  fill(0, 0, 0);
  strokeWeight(4 * s);
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
  strokeWeight(2 * s);
  fill(0, 0, 0);
  ellipse(x - 12 * s, y - 4 * s, 7 * s);
  ellipse(x + 12 * s, y - 4 * s, 7 * s);

  //mouth
  ellipse(x, y + 12 * s, 30 * s, 20 * s);
}

/*
let x = 400;
let y = 140;
*/

function savior(x, y, s) {
  // the code for the savior stickman

  // the switch control for the savior
  push();
  stroke(150);
  strokeWeight(3);
  noFill();
  triangle(x + 200, y + 595, x + 230, y + 560, x + 260, y + 595);
  line(x + 230, y + 560, x + 260, y + 530);

  // arm goes behind the switch
  push();
  stroke(0);
  line(x + 260, y + 520, x + 310, y + 495);
  pop();

  fill(255, 0, 0);
  stroke(132, 8, 8);
  ellipse(x + 260, y + 530, 20);
  pop();
  
  // THE SAVIOR STICKMAN

  // arms
  push();
  stroke(0, 0, 0);
  strokeWeight(4 * s);

  // body
  push();
  fill(255, 255, 255);
  translate(x + 320, y + 520);
  rotate(2.9);
  rect(-14, -32, 40 * s, 85 * s);
  pop();

  line(x + 270, y + 530, x + 310, y + 500);
  ellipse(x + 270, y + 530, 4 * s, 3 * s);

  // head

  fill(255, 255, 255);
  ellipse(x + 308, y + 478, 60 * s);


  // legs
  line(x + 340, y + 545, x + 350, y + 595);
  line(x + 313, y + 553, x + 300, y + 575);
  line(x + 300, y + 575, x + 305, y + 595);
  ellipse(x + 348, y + 595, 4 * s, 3 * s);
  ellipse(x + 303, y + 595, 4 * s, 3 * s);

  // eyes
  strokeWeight(2 * s);
  fill(0, 0, 0);
  ellipse(x + 295, y + 475, 7 * s);
  ellipse(x + 295 + (24 * s), y + 475, 7 * s);
  
  // mouth
  strokeWeight(3);
  line(x + 295, y + 485, x + 295 + (24 * s), y + 485);

}

let speed = 3;

function draw() {
  background(255, 255, 255);
  victim(x, y, 0.7);

  savior(400, 140, 0.7);


  if (y <= 600) {
    y += 3;
  }



/*
    y+=speed;
    if (y>500 || y<200) {
        speed = speed * -1;
        console.log("Bounce");
    }
*/
}