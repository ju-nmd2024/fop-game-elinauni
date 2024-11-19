function setup() {
  createCanvas(800, 800);
}

setup();


let gameRunning = true;
let gameState = "start";
let landingY = 595;
let result;

// Setting for victim
let victim = {
  x: 400,
  y: 140,
  velocity: 0.5,
  acceleration: 0.15,
};

//background
function backgroundElements(x, y, s) {
  //background color
  background(19, 20, 62);
  strokeWeight();
  //moon
  push();
  strokeWeight();
  fill(246, 239, 233);
  ellipse(width / 2, height / 2 + 100, 700);
  fill(241, 227, 215);

  translate(width / 2 - 160, height / 2 - 120);
  rotate(2.5);
  ellipse(0, 0, 140, 80);
  pop();

  push();
  fill(241, 227, 215);
  strokeWeight();
  translate(width / 2 - 270, height / 2 - 10);
  rotate(2.2);
  ellipse(0, 0, 100, 60);
  pop();

  push();
  fill(241, 227, 215);
  strokeWeight();
  translate(width / 2 - 200, height / 2 - 30);
  rotate(1.5);
  ellipse(0, 0, 50, 30);
  pop();

  //house
  triangle(x - 100 * s, y - 165 * s, x, 0, x + 100 * s, y - 165 * s);
  rect(x - 55 * s, y - 165 * s, 110 * s, 250 * 0.5 * s);
    
  quad(x - 135 * s, y - 40 * s, x - 120 * s, y + 200 * s, x + 120 * s, y + 200 * s, x + 110 * s, y - 60 * s);
  triangle(x - 145 * s, y + 10 * s, x - 125 * s, y - 110 * s, x - 40 * s, y - 5 * s);
    
  triangle(x + 130 * s, y - 5 * s, x + 90 * s, y - 130 * s, x + 50 * s, y - 10 * s);
    
  triangle(x - 190 * s, y + 185 * s, x - 145 * s, y + 70 * s, x - 60 * s, y + 180 * s);
  triangle(x + 200 * s, y + 155 * s, x + 140 * s, y + 25 * s, x + 80 * s, y + 160 * s);
  quad(x - 170 * s, y + 180 * s, x - 180 * s, y + 320 * s, x + 170 * s, y + 320 * s, x + 180 * s, y + 150 * s);
    
  quad(x + 180 * s, y + 150 * s, x + 200 * s, y + 20 * s, x + 160 * s, y + 10 * s, x + 160 * s, y + 115 * s);
  triangle(x + 210 * s, y + 23 * s, x + 190 * s, y - 130 * s, x + 150 * s, y + 10 * s);
  
  //gravestone
  beginShape();
  vertex(x - 225 * s, y + 310 * s);
  vertex(x - 230 * s, y + 270 * s);
  bezierVertex(x - 230 * s, y + 240 * s, x - 190 * s, y + 260 * s, x - 190 * s, y + 270 * s);
  vertex(x - 180 * s, y + 300 * s);
  endShape(CLOSE);
    
  quad(x - 220 * s, y + 255 * s, x - 235 * s, y + 215 * s, x - 223 * s, y + 210 * s, x - 214 * s, y + 258 * s);
  quad(x - 245 * s, y + 230 * s, x - 246 * s, y + 237 * s, x - 205 * s, y + 223 * s, x - 205 * s, y + 215 * s);

  strokeWeight();
  //windows
  fill(224, 122, 37);
  quad(x - 120 * s, y + 18 * s, x - 113 * s, y + 67 * s, x - 60 * s, y + 60 * s, x - 67 * s, y + 5 * s);
  quad(x + 98 * s, y, x + 105 * s, y + 50 * s, x + 50 * s, y + 55 * s, x + 47 * s, y - 3 * s);
  quad(x - 153 * s, y + 190 * s, x - 150 * s, y + 270 * s, x - 90 * s, y + 270 * s, x - 90 * s, y + 180 * s);
  quad(x + 150 * s, y + 180 * s, x + 155 * s, y + 270 * s, x + 75 * s, y + 270 * s, x + 77 * s, y + 175 * s);
  quad(x + 165 * s, y + 30 * s, x + 190 * s, y + 30 * s, x + 188 * s, y + 53 * s, x + 163 * s, y + 49 * s);
  
  //lines on windows
  stroke(0);
  strokeWeight(2);
  fill(0, 0, 0);
  line(x - 98 * s, y + 11 * s, x - 91 * s, y + 63 * s);
  line(x - 116 * s, y + 42 * s, x - 65 * s, y + 32 * s);
  line(x + 75 * s, y - 5 * s, x + 80 * s, y + 55 * s);
  line(x + 100 * s, y + 25 * s, x + 50 * s, y + 27 * s);
  line(x - 123 * s, y + 185 * s, x - 123 * s, y + 270 * s);
  line(x + 115 * s, y + 177 * s, x + 118 * s, y + 270 * s);
  line(x + 177 * s, y + 30 * s, x + 175 * s, y + 50 * s);
  line(x + 165 * s, y + 40 * s, x + 188 * s, y + 42 * s);
  }

function groundForStartAndEnd() {
    fill(0, 0, 0);
    beginShape();
    vertex(900, 470);
    bezierVertex(900, 300, 494, 250, 480, 500);
    bezierVertex(480, 800, 280, 720, 250, 650);
    bezierVertex(160, 400, 50, 400, 0, 530);
    vertex(0, height);
    vertex(width, height);
    endShape(CLOSE);
}

function ground() {
    fill(0, 0, 0);
    ellipse(width / 2, 1930, 2500);
}

// the code of the victim stickman AND elevator
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
  strokeWeight();
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

// the code of the victim stickman BUT elevator
function victimStickmanNoElevator(x, y, s) {
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

  //code for dead victim stickman
  function victimDead(x, y, s) {
    // DEAD VICTIM STICKMAN
    translate(350, 720);
    rotate(4.7);

    //pumpkin juice
    push();
    fill(224, 122, 37);
    strokeWeight();
    ellipse(x, y + 50, 100, 200);
    pop();
        
    push();
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
    fill(0, 0, 0);
    push();
    strokeWeight(2);
    line(x - 13, y - 7, x - 5, y - 2);
    line(x - 13, y - 2, x - 5, y - 7);
    line(x + 13, y - 7, x + 5, y - 2);
    line(x + 13, y - 2, x + 5, y - 7);
    pop();
    
    //mouth
    strokeWeight(2 * s);
    ellipse(x, y + 12 * s, 30 * s, 20 * s);
    pop();

  }


function savior(x, y, s, saviorIsNotActive) {
  //code for the animation of the savior's position
  if (saviorIsNotActive === true) {
// the code for the savior stickman in DEFAULT position

  // the switch control for the savior
  push();
  stroke(150);
  strokeWeight(3);
  noFill();
  triangle(x + 200, y + 595, x + 230, y + 560, x + 260, y + 595);
  line(x + 230, y + 560, x + 260, y + 530);
  pop();

  // arm goes behind the switch
  push();
  stroke(0);
  strokeWeight(4 * 0.7);
  line(x + 260, y + 520, x + 310, y + 495);
  pop();

  // green part of the switch
  push();
  fill(0, 255, 0);
  stroke(35, 103, 35);
  strokeWeight(3);
  ellipse(x + 260, y + 530, 20);
  pop();
  
  // THE SAVIOR STICKMAN
  // body
  push();
  strokeWeight(4 * 0.7);  
  fill(255, 255, 255);
  translate(x + 320, y + 520);
  rotate(2.9);
  rect(-14, -32, 40 * s, 85 * s);
  pop();

  // arms
  push();
  stroke(0, 0, 0);
  strokeWeight(4 * 0.7);  
  line(x + 270, y + 530, x + 310, y + 500);
  ellipse(x + 270, y + 530, 4 * s, 3 * s);
  pop();

  // head
  push();
  strokeWeight(4 * 0.7);  
  fill(255, 255, 255);
  ellipse(x + 308, y + 478, 60 * s);
  pop();


  // legs
  push();
  strokeWeight(4 * 0.7);  
  line(x + 340, y + 545, x + 350, y + 595);
  line(x + 313, y + 553, x + 300, y + 575);
  line(x + 300, y + 575, x + 305, y + 595);
  ellipse(x + 348, y + 595, 4 * s, 3 * s);
  ellipse(x + 303, y + 595, 4 * s, 3 * s);
  pop();

  // eyes
  push();
  strokeWeight(2 * 0.7);
  fill(0, 0, 0);
  ellipse(x + 295, y + 475, 7 * s);
  ellipse(x + 295 + (24 * s), y + 475, 7 * s);
  pop();
  
  // mouth
  push();
  strokeWeight(3);
  line(x + 295, y + 485, x + 295 + (24 * s), y + 485);
  pop();

  } else {
  // the code for the savior stickman in ACTIVE position

  // the switch control for the savior
  push();
  stroke(150);
  strokeWeight(3);
  noFill();
  triangle(x + 200, y + 595, x + 230, y + 560, x + 260, y + 595);
  line(x + 230, y + 560, x + 200, y + 530);
  pop();

  // arm goes behind the switch
  push();
  stroke(0);
  strokeWeight(3);
  line(x + 200, y + 520, x + 247, y + 495);
  pop();

  // red part of the switch
  push();
  fill(255, 0, 0);
  stroke(132, 8, 8);
  strokeWeight(3);
  ellipse(x + 200, y + 530, 20);
  pop();
  
  // THE SAVIOR STICKMAN
  // body
  push();
  strokeWeight(4 * 0.7);  
  fill(255, 255, 255);
  translate(x + 270, y + 520);
  rotate(5.5);
  rect(-14, -32, 40 * s, 85 * s);
  pop();

  // arms
  push();
  stroke(0, 0, 0);
  strokeWeight(4 * 0.7);
  line(x + 210, y + 530, x + 247, y + 500);
  ellipse(x + 210, y + 530, 4 * s, 3 * s);
  pop();

  // head
  push();
  strokeWeight(4 * 0.7);
  fill(255, 255, 255);
  ellipse(x + 238, y + 484, 60 * s);
  pop();


  // legs
  push();
  strokeWeight(3);
  line(x + 298, y + 528, x + 330, y + 595);
  line(x + 278, y + 550, x + 275, y + 575);
  line(x + 275, y + 575, x + 280, y + 595);
  ellipse(x + 328, y + 595, 4 * s, 3 * s);
  ellipse(x + 279, y + 595, 4 * s, 3 * s);
  pop();

  // eyes
  push();
  strokeWeight(2 * 0.7);
  fill(0, 0, 0);
  ellipse(x + 225, y + 483, 7 * s);
  ellipse(x + 225 + (24 * s), y + 483, 7 * s);
  pop();
  
  // mouth
  push();
  strokeWeight(3);
  line(x + 225, y + 495, x + 225 + (24 * s), y + 495);
  pop();
  }
}


function draw() {
  //GAME STATES
  //gotten from Garrit's videos and a floppy bird
  if (gameState === "start") {
    backgroundElements(680, 200, 0.5);
    groundForStartAndEnd();
    push();
    strokeWeight();
    textSize(20);
    fill(255, 255, 255);
    text("Saving Steve out of a haunted house!", 50, 50);
    textSize(13);
    text("Steve and Alex were trapped inside a haunted house. Alex was able to run away, but Steve is trapped inside the elevator. Help Alex save Steve and stay alive!", 
    50, 80, 500, 80);
    text("Press [SPACE] to contol the switch ", 50, 137);
    text("Click the mouse to start the game", 50, 167);
    pop();
  } else if (gameState === "game") {
    backgroundElements(400, 400, 1);
    ground();
    victimStickman(victim.x, victim.y, 0.5);
    savior(400, 140, 0.7, keyIsDown(32));


    //Game mechanics
    if (gameRunning) {
      victim.y = victim.y + victim.velocity;
      victim.velocity = victim.velocity + victim.acceleration;

      if (victim.y > landingY && victim.velocity > 3) {
        gameRunning = false;
        gameState = "end";
        result = "Steve fell out and crashed :( Be more careful next time!";
      } else if (victim.y > landingY && victim.velocity <= 3) {
        gameRunning = false;
        gameState = "end";
        result = "Congratulation! You won and saved Steve and Alex!";
      }
      let thrustAcceleration = 0.4;

      if (keyIsDown(32)) {
        victim.velocity = victim.velocity - thrustAcceleration;
      }

    }
  } else if (gameState === "end") {
  // different screens for win or lose
  // the idea for the next 7 lines was taken from this video in youtube https://www.youtube.com/watch?v=hC36SiGuBfs
  if (result.includes("crashed")) {
    backgroundElements(400, 400, 1);
    ground();
    push();
    victimDead(0, 0, 0.7);
    pop();

  }  else if (result.includes("won")) {
    backgroundElements(680, 200, 0.5);
    groundForStartAndEnd();
    victimStickmanNoElevator(65, 380, 0.5);
    victimStickmanNoElevator(115, 380, 0.5);
  }
    push();
    strokeWeight();
    fill(255, 255, 255);
    text(result, 50, 100);
    pop();
  }
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


