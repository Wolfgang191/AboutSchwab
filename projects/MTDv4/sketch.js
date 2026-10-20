//Micro TD
//Zach Schwab
//Start: Feb 20th / 2025

//Use of AI (Random dots, tower limit, title screen starting fix, make dots stay the same after clicked to start, pathing)


// Copyright © Zach Schwab 2025.

// All rights reserved.

// This game and its source code may not be copied, redistributed, or modified without written permission from the author.

// All assets are protected by copyright law and may not be used without permission.



let tower = []; // Array to store type 1 towers
let tower2 = []; // Array to store type 2 towers
let tower3 = [];
let towerS = [];

let place = false;
let place2 = false;
let place3 = false;
let placeS = false;

let scene = 0;
let scene2 = 0;

let dots = []; // Store random dots
let inUIM = false;
let start = false;

let bullets = [];
let bullets2 = [];
let bullets3 = [];
let bulletsS = [];

let e = [];
let e2 = [];
let e3 = [];
let e4 = [];
let e5 = [];

let waypoints = [];


let wave = 0;

let wave0 = false;
let wave3 = false;
let wave5 = false;
let wave10 = false;
let wave15 = false;
let wave20 = false;
let wave25 = false;
let wave30 = false;
let wave35 = false;
let wave40 = false;

let emptyWave = false;

let cash = 135
let elims = 0;
let score = 0;
let life = 5;

pewpew = false;

let LBA = [];
LBb = false; //Draw Leader Board
game = true;
dd = false; //dev display

let input1, name;
load = false;

t1 = 5
t2 = 5
t3 = 3

displayInfo = true; //dev display info
// var LB, Over, Hearts, Dev;





//????
//et pathing = X; 0, Y: height * 0.4 + 35
//let buttonP = false


//?????
function mousePressed() {
	if (inUIM === true) {
		inUIM = false;
		
		return;
	}
}





function toggleUIM() {
	if (start === true) {
	let place = false;
let place2 = false;
let place3 = false;
let placeS = false;
  inUIM = !inUIM;
 }
}

function drawLB(){
	LBb = true;
	//toggleUIM();
}
	

	 


function setup() {
  createCanvas(windowWidth , windowHeight);	//, WEBGL

  	GO = new Over();

  	LB = new Leader();
	
	// Life = new Hearts();

	
	dev = new Dev();
	
	
	 waypoints = [
    { x: 0, y: height * 0.45 +  - 10},
    { x: width * 0.35 + 35, y: height * 0.4 + 35},
    { x: width * 0.35 + 35, y: height * 0.7 + 35 },
    { x: width * 0.65 + 35, y: height * 0.7 + 35 },
    { x: width * 0.65 + 35, y: height * 0.2 + 35 },
    { x: width - 0.5, y: height * 0.2 + 35 }
  ];
	
  generateDots(); // Generate dots once
  drawBackground(); // Draw background once
	let button = createButton('Pause'); 
  button.position(windowWidth - 400, windowHeight - 650,);
  button.size(100, 30);
	button.mousePressed(toggleUIM);
	
	
	
	 //e.push(new Enemy(waypoints));
	
			
			
			//e2.push(new Enemy2(waypoints));
		
	

	
	
// 	OPC.button('SaveB', 'Save');
// OPC.button('LoadB', 'Load');
// 	OPC.button('drawLBb', 'Leader Board')

// 	OPC.text('Leaderboard', '', 'Initials');
	
// 	OPC.toggle({
// 		name: 'Toggle',
// 		label: 'Toggle Info',
// 		value: true,
// 		description: 'Dispays Game Info'
// 	});
	
// 		OPC.toggle({
// 		name: 'Toggle2',
// 		label: 'Toggle Advanced Info',
// 		value: false,
// 		description: 'Dispays Advanced Game Info'
// 	});



// let button2 = createButton('Upgrade'); 
// 	button2.size(65, 22);
// 	button2.position(275 + 30 /2, 170);
// 	button2.mousePressed(toggleUIM);
	
// 	let button3 = createButton('Upgrade');
// 	button3.size(65, 22);
// 	button3.position(375 + 30 / 2, 170);
// 	button3.mousePressed(toggleUIM);
	
// 	let button4 = createButton('Upgrade'); 
// 	button4.size(65, 22);
// 	button4.position(475 + 30 / 2, 170);
// 	button4.mousePressed(toggleUIM);


	
}  // end of setup




function draw() {   //drawTag
	// print(mouseX, mouseY)
	
				
frameRate(59);
	// print(frameRate);
	
score = wave + elims;
	
	  if (inUIM) {
    drawUIM();
			// full();
    return;
  }
		//Life.display();
	
	

	
	// 				if (LBb) {
	// 	LB.display();
				

	// 				return;
	// } 
	
	
  switch (scene) {
    case 0:

						//drawTowerLogos();


			stroke('black')
			strokeWeight(1.5)
      fill(255);
      textSize(50);
      textAlign(CENTER);
			textStyle(BOLD)
      text("Micro TD", width / 2, height / 2);  //- 225
      textSize(30);
      text("Click to start", width / 2, height - 200)
      break;

    case 1:
   //   drawUI(); // Draw UI without refreshing background
			start = true;
      drawBackground();
      drawTowers();

			
									updateEnemies3();
			drawEnemies3();
			
							updateEnemies2();
		drawEnemies2();
			
			      updateEnemies();
      drawEnemies();
			
									updateEnemies4();
			drawEnemies4();
			
			drawEnemies5();
							updateEnemies5();

				

			

			
				//stroke('black')
			//strokeWeight(1.5)
      fill(255);
      textSize(30);
      textAlign(CENTER);
			textStyle(NORMAL)
			
				fill('white');
			text(wave, 150, 75);
			text("wave:", 80, 75);
			
		text("elims:", 80, 100);
			text(elims, 150, 100)
			
			text("score:", 80, 125);
			text(score, 150, 125)
			
			
			
			text("cash:$", 80, 50)
			text(cash, 155, 50)
			
text("Life:", width / 2, height / 12);
			text(life, width / 2 + 50, height / 12)
			
				if (life <= 0) {
			 	//LB.display();
		GO.display();	
					game = false;
		
		}	


			if (dd === true) {
						dev.displayD();
		
			}
			
		
			
						if (load) {
							
							var savedUgh = getItem('ugh');
								var savedScore = getItem('LBscore');
								var savedName = getItem('userName');
							// item1 = 
							
							
							
				// for debugging			
						
		// 			fill('black');
		// textSize(30);
		// text(savedName, width / 2, height / 2);
			}		

			

			
			
				// for old wave system
			
			// if (wave === 5 && wave5 === false) {
			// 	 e.push(new Enemy(waypoints));
			// 	wave5 = true;
			// } if (wave === 10 && wave10 === false) {
			// 					 e2.push(new Enemy2(waypoints));
			// 	wave10 = true;
			// }	if (wave === 20 && wave20 === false) {
			// 					 e.push(new Enemy(waypoints));
			// 								 e2.push(new Enemy2(waypoints));
			// 			 e4.push(new Enemy4(waypoints));
			// 	wave20 = true;
			// }	if (wave === 30 && wave30 === false)	{
			// 									 e.push(new Enemy(waypoints));
			// 								 e2.push(new Enemy2(waypoints));
			// 								e3.push(new Enemy3(waypoints));
			// 	wave30 = true;
			// }	if (wave === 40 && wave40 === false) {
			// 													 e.push(new Enemy(waypoints));
			// 								 e2.push(new Enemy2(waypoints));
			// 								e3.push(new Enemy3(waypoints));
			// 								e4.push(new Enemy4(waypoints));
			// 	wave40 = true;
			// }
			
			drawTowerLogos();
			
	waveCleared();
			
	if(displayInfo === true) {
					dev.displayI();
	}
	
	// 			if (Toggle) {
	// 	dev.displayI();
	// } else {

	// }
			
	// 		if (Toggle2)	{
	// 			dev.displayAI();
	// 		}	else	{
			
	// 		}
			
			

			break;
  }
} // end of draw drawEndTag

function drawUIM() {
		place = false; place2 = false; place3 = false; placeS = false;
			stroke('black')
			strokeWeight(3)
      fill(255);
      textSize(60);
      textAlign(CENTER);
      text("Paused", width / 2, height / 2 - 100);
	
		strokeWeight(1)
	textSize(25)
	
	

      textAlign(CENTER);

		   fill(255);
					stroke('black');
			strokeWeight(2);
		
				      textSize(30);
      text("Press Z to exit", width / 2, height - 200);
}


function mousePressed() {
  if (scene === 0) {
    scene = 1; // Move to next scene when clicking
    drawBackground(); // Ensure background stays when transitioning
  } else {
    // Place towers with limits
    if (place && tower.length < 5 && cash >= 40 && freeSpot(mouseX, mouseY)) {
      tower.push({ x: mouseX, y: mouseY });
			cash = cash - 40
			t1 = t1 - 1
      if (tower.length === 5) place = false;
			
    } else if (place2 && tower2.length < 5 && cash >= 90 && freeSpot(mouseX, mouseY)) {
      tower2.push({ x: mouseX, y: mouseY });
			cash = cash - 90
			t2 = t2 - 1
      if (tower2.length === 5) place2 = false;
			
    } else if (place3 && tower3.length < 3 && cash >= 180 && freeSpot(mouseX, mouseY)) {
      tower3.push({ x: mouseX, y: mouseY });
			cash = cash - 180
			t3 = t3 - 1
      if (tower3.length === 3) place3 = false;
			
    } else if (placeS && towerS.length < 10 && freeSpot(mouseX, mouseY)) {
      towerS.push({ x: mouseX, y: mouseY });
      if (towerS.length === 10) placeS = false;
    }
  }
}



function updateEnemies() {
	  for (let i = e.length - 1; i >= 0; i--) {
    e[i].update();
    if (e[i].isFinished) {
			e.splice(i, 1)
		}
}
	
}

function updateEnemies2() {
	  for (let i = e2.length - 1; i >= 0; i--) {
    e2[i].update();
    if (e2[i].isFinished) {
			e2.splice(i, 1)
		}
}
}

function updateEnemies3() {
	  for (let i = e3.length - 1; i >= 0; i--) {
    e3[i].update();
    if (e3[i].isFinished) {
			e3.splice(i, 1)
		}
}
}

function updateEnemies4() {
	  for (let i = e4.length - 1; i >= 0; i--) {
    e4[i].update();
    if (e4[i].isFinished) {
			e4.splice(i, 1)
		}
}
}

function updateEnemies5() {
	  for (let i = e5.length - 1; i >= 0; i--) {
    e5[i].update();
    if (e5[i].isFinished) {
			e5.splice(i, 1)
		}
}
}

	
function drawEnemies5() {
  for (let enemy5 of e5) enemy5.display();
}

function drawEnemies() {
  for (let enemy of e) enemy.display();
}

function drawEnemies2() {
  for (let enemy2 of e2) enemy2.display();
}

function drawEnemies3() {
  for (let enemy3 of e3) enemy3.display();
}


function drawEnemies4() {
  for (let enemy4 of e4) enemy4.display();
}






function generateDots() {
  for (let i = 0; i < 100; i++) { // Adjust the number of green spots
    dots.push({
      x: random(width),
      y: random(height),
      size: random(5, 20),
    });
  }
}






function drawBackground() {
  background('rgb(71,175,71)'); // Base background color

  for (let dot of dots) { // Use stored dots instead of regenerating
    fill('rgb(227,165,242)');
    noStroke();
    ellipse(dot.x, dot.y, dot.size, dot.size);
  }

  // Draw the path
  fill('rgb(242,209,140)');
let pathWidth = 70;
noStroke()
  // auto adjust... kinda
  rect(0, height * 0.4, width * 0.35, pathWidth); // First horizontal path
  rect(width * 0.35, height * 0.4, pathWidth, height * 0.3, 0, 20, 0, 0); // First vertical path
  rect(width * 0.35, height * 0.7, width * 0.3, pathWidth, 0, 0, 0, 20); // Second horizontal path
//   rect(width * 0.65, height * 0.2, pathWidth, height * 0.5919, 20, 0, 20, 0); // Second vertical path 0.5919
rect(width * 0.65, height * 0.2, 70, height *  0.575, 20, 0, 20, 0);  //575
  rect(width * 0.68725, height * 0.2, width * 0.35, pathWidth, 0, 0, 0, 0); // Third horizontal path //rect(width * 0.60, height * 0.2, width * 0.35, pathWidth, 20, 0, 0, 0);
  //rect(width * 0.95, height * 0.4, pathWidth, height * 0.3); // Third vertical path
  //rect(width * 0.65, height * 0.7, width * 0.3, pathWidth); // Fourth horizontal path
	fill('rgb(242,209,140)')

	ellipse(0, height * 0.4 + 35, 25, 25)
	ellipse(width * 0.35 + 35, height * 0.4 + 35, 25, 25)
	ellipse(width * 0.35 + 35, height * 0.7 + 35, 25, 25)
	ellipse(width * 0.65 + 35, height * 0.7 + 35, 25, 25)
	ellipse(width * 0.65 + 35, height * 0.2 + 35, 25, 25)
	ellipse(width - 0.5, height * 0.2 + 35, 25, 25)


	
}



function waveCleared()	{
	if (e.length === 0 && e2.length === 0 && e3.length === 0 && e4.length === 0 && e5.length === 0){
		emptyWave = true;
		wave = wave + 1;
	}		
	
	if (wave === 25)	{
		wave15 = true;
	} if (wave === 15){
		wave10 = true;
	}	if (wave === 10) {
		wave5 = true;
	}	if (wave === 5)	{
		wave0 = true
	}
	if (wave >= 5 && emptyWave === true && wave5 === false){	// && e.length < 1 && e2.length < 1
		
								e2rs();
								ers();
//e.push(new Enemy(waypoints));

	emptyWave = false;
		
	}	if (wave >= 10 && emptyWave === true && wave10 === false){

								e2rs();
								ers();
								ers();
								e4rs();
	emptyWave = false;
	}	if (wave >= 15 && emptyWave === true && wave15 === false){
								e2rs();
								e2rs();
								ers();
								ers();
								e3rs();
								e4rs();
								e4rs();
	emptyWave = false;
	}	if (wave >= 25 && emptyWave === true)	{
		e5rs();
										e2rs();
								e2rs();

								e3rs();
								e4rs();
								e4rs();
		
	emptyWave = false;
		
	} if (wave < 5 && emptyWave && wave0 === false) {
		ers();
					

	
		
		emptyWave = false;
		
	}
}

	

// enemy random speed

function ers()	{
		e.push(new Enemy(waypoints, random(1.8, 2.8)));
	
}

function e2rs()	{
		e2.push(new Enemy2(waypoints, random(1.2, 2.2)));

}

function e3rs()	{
		e3.push(new Enemy3(waypoints, random(0.8, 1.8)));

}

function e4rs()	{
		e4.push(new Enemy4(waypoints, random(3, 5)));

}

function e5rs()	{
		e5.push(new Enemy5(waypoints, random(0.7, 0.9)));

}




function keyPressed() {
  if (inUIM || LBb && key === 'z') {
    inUIM = false;
			LBb = false;
    return;
  }	if (inUIM || LBb && key === 'z' && game === false) {
	window.location.reload();
  }

	
  if (key === '1') {
		falsePlace();
    place = true;

  } else if (key === '2') {
		falsePlace();
    place2 = true;

  } else if (key === '3') {
		falsePlace();
    place3 = true;

  } else if (key === '4') {
		falsePlace();
		placeS = true; 

	}	else if (key === 'e') {
		falsePlace();

	}
	//dev
	else if (key === 'm') {
		cash = 999
		life = 99
	} else if (key === 'f') {
		
		let fs = fullscreen();
		
	
		    fullscreen(!fs);
		//dev
	}	
	//else if (key === 'o') {
	// 	fill('white');
	// 	  rect(width * 0.65, height * 0.2, 70, height * 0.58, 20, 0, 20, 0);
	// 	//dev
	// }	
		else if (key === ',') {
		life = 0;
		//dev
	}	else if (key === '.')	{
		wave = wave + 1
		//dev
	}	else if (key === 'd') {
		dd = !dd
	}	else if (key === 'k')	{
		e.push(new Enemy(waypoints));
	}	else if (key === 'l')	{
				e2.push(new Enemy2(waypoints));
	}	else if (key === 'i')	{
		displayInfo = !displayInfo;s
	}
}

function falsePlace()	{
	place = false;
	place2 = false;
	place3 = false;
	placeS = false;
}
















function freeSpot(x, y, minDist = 41) {
  // Check all towers of all types
  for (let t of tower) {
    if (dist(x, y, t.x, t.y) < minDist) return false;
  }
  for (let t of tower2) {
    if (dist(x, y, t.x, t.y) < minDist) return false;
  }
  for (let t of tower3) {
    if (dist(x, y, t.x, t.y) < minDist) return false;
  }
  for (let t of towerS) {
    if (dist(x, y, t.x, t.y) < minDist) return false;
  }
  return true;

  
}


function freeSpot(x, y, minDist = 41) {
  // Check all towers of all types
  for (let t of tower) {
    if (dist(x, y, t.x, t.y) < minDist) return false;
  }
  for (let t of tower2) {
    if (dist(x, y, t.x, t.y) < minDist) return false;
  }
  for (let t of tower3) {
    if (dist(x, y, t.x, t.y) < minDist) return false;
  }
  for (let t of towerS) {
    if (dist(x, y, t.x, t.y) < minDist) return false;
  }

  // --- Path check ---
  // Path 1: First horizontal
  if (y > height * 0.4 && y < height * 0.4 + 70 && x < width * 0.35) return false;
  // Path 2: First vertical
  if (x > width * 0.35 && x < width * 0.35 + 70 && y > height * 0.4 && y < height * 0.7) return false;
  // Path 3: Second horizontal
  if (y > height * 0.7 && y < height * 0.7 + 70 && x > width * 0.35 && x < width * 0.65) return false;
  // Path 4: Second vertical
  if (x > width * 0.65 && x < width * 0.65 + 70 && y > height * 0.2 && y < height * 0.7) return false;
  // Path 5: Third horizontal
  if (y > height * 0.2 && y < height * 0.2 + 70 && x > width * 0.65) return false;

  return true;
}

