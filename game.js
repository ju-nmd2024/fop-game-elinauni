function setup() {
  createCanvas(800, 600);
}

setup();

// function draw() {
//   background(255, 140, 0);
// }

// ////////////////

background(255, 255, 255);

let y = 200;

function victim(x, y) {
  // the code of the victim stickman

  //ropes for the elevator
  push();
  strokeWeight(4);
  stroke(150);
  line(x - 85, y - 60, x, y - 140);
  line(x + 85, y - 60, x, y - 140);
  line(x, y - 140, x, 0);
  pop();

  //elevator
  push();
  fill(168, 116, 88);
  strokeWeight(3);
  rect(x - 85, y - 60, 170, 250);
  pop();

  fill(105, 72, 54);
  quad(x - 85, y + 190, x - 50, y + 150, x + 50, y + 150, x + 85, y + 190);
  quad(x - 85, y - 60, x - 50, y - 20, x + 50, y - 20, x + 85, y + -60);

  push();
  strokeWeight(2);
  stroke(77, 53, 44);
  line(x - 84, y + 189, x - 50, y + 150);
  line(x - 50, y + 150, x + 50, y + 150);
  line(x + 50, y + 150, x + 84, y + 189);
  line(x - 84, y - 59, x - 50, y - 20);
  line(x - 50, y - 20, x + 50, y - 20);
  line(x + 50, y - 20, x + 84, y - 59);
  line(x - 50, y + 150, x - 50, y - 20);
  line(x + 50, y + 150, x + 50, y - 20);
  pop();

  // THE VICTIM STICKMAN

  push();
  fill(0, 0, 0);
  strokeWeight(5);

  // arms
  line(x, y + 50, x + 60, y - 20);
  ellipse(x + 60, y - 20, 4, 3);
  line(x, y + 50, x - 60, y - 20);
  ellipse(x - 60, y - 20, 4, 3);

  // body and head
  fill(255, 255, 255);
  rect(x - 20, y + 10, 40, 90);
  ellipse(x, y, 60);

  // legs
  line(x + 20, y + 100, x + 20, y + 170);
  ellipse(x + 22, y + 170, 4, 3);
  line(x - 20, y + 100, x - 20, y + 170);
  ellipse(x - 22, y + 170, 4, 3);
  pop();

  // eyes
  fill(0, 0, 0);
  ellipse(x - 12, y - 4, 7);
  ellipse(x + 12, y - 4, 7);

  //mouth
  ellipse(x, y + 12, 30, 20);
}

let speed = 3;

function draw() {
  background(255, 255, 255);
  victim(200, y);

  if (y <= 500) {
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
