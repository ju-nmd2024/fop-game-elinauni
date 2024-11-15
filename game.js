function setup() {
  createCanvas(800, 800);
}

setup();

// function draw() {
//   background(255, 140, 0);
// }

// ////////////////

background(255, 255, 255);

let gameRunning = true;
let gameState = "start";
let landingY = 595;
let result;

// Setting for elevator
let victim = {
  x: 400,
  y: 140,
  velocity: 0.5,
  acceleration: 0.15,
};

function backgroundElements() {
  //background color
  background(19, 20, 62);

  //moon
  fill(246, 239, 233);
  ellipse(width / 2, height / 2 + 100, 700);
  fill(241, 227, 215);
  strokeWeight();
  push();
  translate(240, 280);
  rotate(2.5);
  ellipse(0, 0, 140, 80);
  pop();

  push();
  translate(130, 390);
  rotate(2.2);
  ellipse(0, 0, 100, 60);
  pop();

  push();
  translate(200, 370);
  rotate(1.5);
  ellipse(0, 0, 50, 30);
  pop();

  //ground
  fill(0, 0, 0);
  ellipse(width / 2, 1930, 2500);

  //house
  triangle(300, 235, 400, 0, 500, 235);
  rect(345, 235, 110, 250 * 0.5);

  quad(265, 360, 280, 600, 520, 600, 510, 340);
  triangle(255, 410, 275, 290, 360, 395);

  triangle(530, 395, 490, 270, 450, 390);

  triangle(210, 585, 255, 470, 340, 580);
  triangle(600, 555, 540, 425, 480, 560);
  quad(230, 580, 220, 720, 570, 720, 580, 550);

  quad(580, 550, 600, 420, 560, 410, 560, 515);
  triangle(610, 423, 590, 270, 550, 410);

  //gravestone
  beginShape();
  vertex(175, 710);
  vertex(170, 670);
  bezierVertex(170, 640, 210, 660, 210, 670);
  vertex(220, 700);
  endShape(CLOSE);

  quad(180, 655, 165, 615, 177, 610, 186, 658);
  quad(155, 630, 154, 637, 195, 623, 195, 615);

  //windows
  fill(224, 122, 37);
  quad(280, 418, 287, 467, 340, 460, 333, 405);
  quad(498, 400, 505, 450, 450, 455, 447, 397);
  quad(247, 590, 250, 670, 310, 670, 310, 580);
  quad(550, 580, 555, 670, 475, 670, 477, 575);
  quad(565, 430, 590, 430, 588, 453, 563, 449);

  strokeWeight(2);
  fill(0, 0, 0);
  line(302, 411, 309, 463);
  line(284, 442, 335, 432);
  line(475, 395, 480, 455);
  line(500, 425, 450, 427);
  line(277, 585, 277, 670);
  line(515, 577, 518, 668);
  line(577, 430, 575, 450);
  line(565, 440, 588, 442);
}


function gameOver() {
  push();
  background(255, 255, 255);
  strokeWeight();
  text("Game Over", 200, 100);
  pop();
}

function gameWon() {
  push();
  background(255, 255, 255);
  text("You saved Steve!", 200, 100);
  pop();
}



  // the code of the victim stickman and elevator
function victimStickman(x, y, s) {

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


  //GAME STATES
  if (gameState === "start") {
    backgroundElements();
    strokeWeight(0);
    text("Start", 200, 100);
  } else if (gameState === "game") {
    backgroundElements();
    victimStickman(victim.x, victim.y, 0.5);
    savior(400, 140, 0.7);

    //Game mechanics
    if (gameRunning) {
      victim.y = victim.y + victim.velocity;
      victim.velocity = victim.velocity + victim.acceleration;

      if (victim.y > landingY && victim.velocity > 3) {
        gameOver();
        gameRunning = false;
        gameState = "end";
        result = "Steve fell out and crashed :( Be more careful next time!";
      } else if (victim.y > landingY && victim.velocity <= 3) {
        gameWon();
        gameRunning = false;
        gameState = "end";
        result = "Yippie! You won! Slay!";
      }

      let thrustAcceleration = 0.4;

      if (keyIsDown(UP_ARROW)) {
        victim.velocity = victim.velocity - thrustAcceleration;
      }
    }
  } else if (gameState === "end") {
    backgroundElements();
    strokeWeight(0);
    text(result, 50, 100);
  }






/*
    y+=speed;
    if (y>500 || y<200) {
        speed = speed * -1;
        console.log("Bounce");
    }
*/
}

function mouseClicked() {
  if (gameState === "start") {
    gameState = "game";
  } else if (gameState === "game") {
    gameState = "end";
  } else if (gameState === "end") {
    gameState = "game";
    gameRunning = true;
    victim.x = 400;
    victim.y = 140;
    victim.velocity = 0.5;
    victim.acceleration = 0.15;

  }
}


