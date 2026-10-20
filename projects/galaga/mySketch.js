//Zach Schwab
//9/16/25



let img;
let img2;
let img3;
let img4;
let goon;
var playerX, playerY, playerSizeX, playerSizeY, playerSpeed, loopControl, playerName, playerName2, playerName3;



//let s = 0;

let scene = 0;

let timeLimit = 30.5;

let bullets = [];

let eBullets = [];

let gass = [];

let stars = [];

let lbScores = [];

let highScore = 0;

let score2 = 0;

let score3 = 0;

// let playerName = "";

let currScore = 0;

let lives = 3;

let playerSheild = true;

let eFrames = false;

let eFramesDuration = 3.5;

let paused = false;
 

bulletBounds = false;
bulletBounds2 = false;
urBoyDead = false;
urBoyDead2 = false;
urBoyDead3 = false;

gameOver = false;

start = false;

playerDeath = false;

bossA = false;

inputCreated = false;








function preload() {
	 img = loadImage('GalagaShip.png');
	 img2 = loadImage('Bee.png');
	 img3 = loadImage('Moth.png');
	 img4 = loadImage('thisThing.png');
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	
	frameRate(60);
	
	percX = width / 100;
	percY = height / 100;
	perc = 0;
	
	playerX = width/2;
	playerY = height * 0.8;
	// playerSpeed = 2;
	// playerSpeed = percX * 0.25; 
	playerSpeed = percX * 0.1;


		//deltaTime / frameRate;
	
	playerSizeX = percX * 1.5
	playerSizeY = percX * 1.5
	 
	globalTextSize = percX * 1.5;
	startSize = width * 0.035;
	
	sheildSize = width * 0.05

	
	bulletY = playerY;
	
	// lives
	loopControl = width * 0.3;

	// not needed

	
	
	goon = new Goon(width / 2, height / 2, percX * 1.5, percX * 1.5);
	
	moth = new Moth(width / 2, height / 2, percX * 1.5, percX * 1.5);
	
	boss = new Boss(width / 2, height * 0.3, percX * 1.5, percX * 1.5);
	
	bossAttack = new BossAttack(width * 0.06, height * 0.3);
	
	// Ebullet = new eBullet(playerX, playerY, percX * 0.22, percY * 2.8));
		rectMode(CENTER);
		imageMode(CENTER);
	
	
	
	
	ranNum = (random(1) < 0.5);	
	ranNum2 = (random(1) < 0.5);	
	ranNum3 = (random(1) < 0.5);	



// player sheild
		r = 0;
		g = 128;
		b = 0;
	 	strokeEW = 2;

	
	loadData();


} 	// end of setup

function draw() {
	background(0);
		
	switch (scene) 	{
	
		case 0:
		// stroke('rgb(0,255,0)');
		// strokeWeight(3);
			stroke('white');
			strokeWeight(3);
			fill('rgba(255,255,255,0.51)');
	rect(width / 2, height / 1.5, width * 0.2, height * 0.5);
			
			// start 
			strokeWeight(0);
			fill('white');
	rect(width / 2, height * 0.25, width * 0.15, height *0.1, 20);
	
		// textFont(fontR);
			fill('black');
		textSize(startSize);
			textAlign(CENTER);
		text("s t a r t", width / 2, height * 0.2 + startSize);
	
	// button check
	if (!start && mouseX > width / 2 - width * 0.15 / 2 && mouseX < width / 2 + width * 0.15 / 2 && mouseY > height * 0.2 && mouseY < height * 0.2 + height *0.1 && mouseIsPressed === true) 	{
		scene = 1;
	}
		textSize(width * 0.02);
	text("leaderBoard:", width / 2, height * 0.4 + startSize);
			
				for (let i = 1; i < 4; i++) {
  // let heartX = width * 0.25 + i * (percX * 2);
  // image(img, heartX, height * 0.85, percX * 1.5, percX * 1.5); 
					
					let lbY = height * 0.45 + i * (percY * 8); 	// * (percY * 8)
	text(i + ".", width / 2.2 - startSize, lbY);
	// text(highScore, width * 0.5, lbY);
	// text(playerName, width * 0.45, lbY);
} // end loop
			
	text(highScore, width * 0.5, height * 0.45 + 1 * (percY * 8));
	text(playerName, width * 0.45, height * 0.45 + 1 * (percY * 8));
			
	text(score2, width * 0.5, height * 0.45 + 2 * (percY * 8));
	text(playerName2, width * 0.45, height * 0.45 + 2 * (percY * 8));
			
	text(score3, width * 0.5, height * 0.45 + 3 * (percY * 8));
	text(playerName3, width * 0.45, height * 0.45 + 3 * (percY * 8));
			
			
			
			
			
			fill('white');
				text("Press 'f' for fullscreen", width * 0.7, height * 0.2);

 
			break; 
			
		case 1:
		textAlign(LEFT);
		
	if (!paused) 	{
	
		

	// play area
		if (gameOver) 	{
			stroke('red');
		} else {
			stroke('white');

		}
	strokeWeight(2);
	fill('black');
	rect(width / 2, height / 2, width * 0.35, height * 0.9); //  - width * 0.35 / 2,  - height * 0.45
	
	// height/2 - percY * 90
	
	
	// stars
		for (let i = 0; i < 15; i++) {
		stars.push(new Star(random(width * 0.325, width * 0.645), random(height * 0.06, height * 0.94), 0.8, random(width * 0.002, width * 0.003))); // random(0.5, 2)
		stars[i].display();
  	stars[i].update();	
	} 	// end of for loop
	
	
	// commeted for further use in the near future
// 		gass.push(new Gas(playerX, playerY, percX * 0.5)); //  + ((percX * 3) / 2)

// 		for (let i = 0; i < gass.length; i++) {
//  		gass[i].move();
//   		gass[i].display();
//   		gass[i].update();
// 	}
	
	
		goon.display();
		goon.update();

		moth.display();
		moth.update();
		
		bossAttack.update();
	
	// boss attack
	// 	if (bossA) 	{
	// 	bossAttack.display();
	// }
			// bossAttack.display();

		boss.display();
		boss.update();
	
	
	
	// player
		image(img, playerX, playerY, playerSizeX, playerSizeY);
	
	
	
		for (let i = 0; i < bullets.length; i++) {
 		  bullets[i].move();
  		bullets[i].display();
  		bullets[i].update();
	}
	

	
	
	// moving player
	if (keyIsDown (37) && !gameOver || keyIsDown (65) && !gameOver)	{
		if (playerX >= width * 0.335) 	{
		playerX -= playerSpeed;
		}
	}
		
	if (keyIsDown (39) && !gameOver || keyIsDown (68) && !gameOver)	{
		if (playerX <= width * 0.665) 	{
		playerX += playerSpeed;
		}
	}
	

	// bullet on space
	if (!gameOver && keyIsDown (32) && bullets.length < 1 && !eFrames && start === true|| !gameOver && keyIsDown (38) && bullets.length < 1 && !eFrames && start === true)	{
		bulletY += 5
		bullets.push(new Bullet(playerX, playerY, percX * 0.22, percY * 2.8)); //  + ((percX * 3) / 2)
		strokeEW = 0;
		playerSheild = false;
	}
	
	
	// bullet on mouse
  if (!gameOver && mouseIsPressed === true && bullets.length < 1 && !eFrames && start === true) {
		bulletY += 5
		bullets.push(new Bullet(playerX, playerY, percX * 0.22, percY * 2.8)); //  + ((percX * 3) / 2)
		strokeEW = 0;
		playerSheild = false;
	}
	
	
	let s = second();
	if (s % 2 && eBullets < 1) 	{
	eBullets.push(new eBullet(moth.x, moth.y, percX * 0.3, percY * 2.8)); //  + ((percX * 3) / 2)	
	} else if (eBullets < 1 && !gameOver) 	{
		eBullets.push(new eBullet(goon.x, goon.y, percX * 0.3, percY * 2.8)); //  + ((percX * 3) / 2)	
	}
	
		for (let i = 0; i < eBullets.length; i++) {
 		  eBullets[i].move();
  		eBullets[i].display();
  		eBullets[i].update();
		}

		// bullet indicator
	// strokeWeight(2);
	// stroke('white');
			//ellipse(playerX, height * 0.85, width * 0.008);

	
	if (bulletBounds)	{
		bulletY = playerY;
		bullets.splice(0, 1);		
		bulletBounds = false;
		//strokeE = stroke('green');
	 	strokeEW = 2;
		playerSheild = true;
	}
	
	if (bulletBounds2)	{
		bulletY = playerY;
		eBullets.splice(0, 1);		
		bulletBounds2 = false;
		//strokeE = stroke('green');
	 	// strokeEW = 2;
		playerSheild = true;
	}
	
		stroke(r, g, b);
		strokeWeight(strokeEW);
		fill('rgba(255,255,255,0.20)');
				ellipse(playerX, playerY, sheildSize);


	
	// case if dead
	if (urBoyDead)	{
		goon = new Goon(width / 2, height / 2, percX * 1.5, percX * 1.5);

		urBoyDead = false;
	}
	
	if (urBoyDead2)	{
		moth = new Moth(width / 2, height / 2, percX * 1.5, percX * 1.5);

		urBoyDead2 = false;
	}
	
	if (urBoyDead3)	{
		boss = new Boss(width / 2, height * 0.3, percX * 1.5, percX * 1.5);

		urBoyDead3 = false;
	}
	
	if (timeLimit > 0 && !gameOver) 	{
		timeLimit -= deltaTime / 1000;
	// timeLimit -= 1 / frameRate;
	} 
	

	if (playerDeath) 	{
		lives -= 1;
		loopControl -= width * 0.02; // width * 0.02
		playerDeath = false
		eFrames = true;
	}	
	

		
	// displays
		gameUI();
	
	
	} // end of paused
	
			if (paused) 	{
			text("paused", width / 2, height / 2);
		}
	
	if (keyCode === 192) 	{
		s = second();
		text(s, width/2, height * 0.9);
	}
	
	// if (devDisplay = true)
			// s = second();

			// text(s, width/2, height * 0.9);
		start = true;
	} // end of switch	
}	// end of main





function keyPressed() {
	if (key === 'f') {
		let fs = fullscreen();
		fullscreen(!fs);
	}
	if (key === 'p') 	{
		paused = !paused;
	}
	if (key === 'l') 	{
		loadData();
	}
	if (keyCode === 49) 	{
		lives = 0;
	}
}



//save to local browser
function saveData(){

	  loadData();

	
	// for (i = 0; i < 3; i++) 	{
	// 	if (lbScores[i] > highScore) 	{
	// 		lbScores.push(currScore);
	// 		print(lbScores);
	// 	}
	// } // end of loop

	
	if (currScore > highScore) 	{
		// playerName  = input1.value().substring(0, 2);
		// storeItem('lbName', playerName);

		// need to resave names when highscore is beat

		
		// moves score down one
		score3 = score2;
		storeItem('Score3', score3);
		playerName3 = playerName2;
		storeItem('lbName3', playerName3);

		
		score2 = highScore;
		storeItem('Score2', score2);
		playerName2 = playerName;
		storeItem('lbName2', playerName);

		// highscore
		playerName  = input1.value().substring(0, 2);
		storeItem('lbName', playerName);
		highScore = currScore;
		storeItem('HighScore', highScore);

	}	else if (currScore > score2) {
		playerName2  = input1.value().substring(0, 2);
		storeItem('lbName2', playerName2);

		score3 = score2;
		storeItem('Score3', score3);

		playerName3 = playerName2;
		storeItem('lbName3', playerName3);


		
		score2 = currScore;
		storeItem('Score2', score2);
	} else if (currScore > score3) {
		playerName3  = input1.value().substring(0, 2);
		storeItem('lbName3', playerName3);
		
		score3 = currScore;
		storeItem('Score3', score3);
	} else {
		
	} // end if statment
	
	if (gameOver) 	{
		input1.remove();
		button1.remove();
		restart();
	}
} // end saveData

//load from local browser
function loadData(){
	var savedHighScore = getItem('HighScore');
	var savedName = getItem('lbName');
	
	var savedScore2 = getItem('Score2');
	var savedName2 = getItem('lbName2');
	
	var savedScore3 = getItem('Score3');
	var savedName3 = getItem('lbName3');
	
	  if (savedHighScore === null) {
			highScore = 0;
		} else {
			highScore = savedHighScore;	
		}
	
		if (savedScore2 == null) {
			savedScore2 = 0;
		} else {
			score2 = savedScore2;
		}
		
		if (savedScore3 == null) {
			savedScore3 = 0;
		} else {
			score3 = savedScore3;
		}
	
 		if (savedName === null) {
    	playerName = "";
 		} else {
    	playerName = savedName;
	  	}
	
		if (savedName2 == null) {
			playerName2 = ""
		} else {
			playerName2 = savedName2
		}
	
		if (savedName3 == null) {
			playerName3 = "";
		} else {
			playerName3 = savedName3;
		}
	
			
		// text(savedName, 700, 350);
}



function gameUI() 	{
			// lb
		//text(playerName, width/2, height/2);

	
		if (lives === 0 || timeLimit <= 0) 	{
		gameOver = true;
		stroke('black');
		fill('red');
		text("GAME OVER", width /  2 - (globalTextSize * 2), height * 0.3);
			
			if (!inputCreated) 	{
						inputCreated = true;

		input1 = createInput();
		input1.position(width * 0.5 - (globalTextSize * 2), height * 0.5);
		input1.size(width * 0.06, height * 0.03);
		input1.attribute('placeholder', 'Enter initials');
			
	 	button1 = createButton('Confirm');
		button1.position(width * 0.5 - (globalTextSize * 2), height * 0.55);
		button1.size(width * 0.04, height * 0.025);
		button1.mousePressed(saveData);
			}
		// saveData();
	}
	
	
	// print(eFramesDuration);
	if (eFrames && !gameOver) 	{
		//
		stroke(0);
		fill('white');
		//
		text(int(eFramesDuration), width / 2, height / 2)
		eFramesDuration -= deltaTime / 1000;
		
		strokeEW = 2;
		r = 255;
		g = 255;
		b = 255;
		
		
		if (eFramesDuration <= 0) 	{
			eFrames = false;
			eFramesDuration = 3.5;
			// strokeEW = 2;
			r = 0;
			g = 128;
			b = 0;
		}
	}
	
	
	// help
	for (let i = 0; i < lives; i++) {
  let heartX = width * 0.25 + i * (percX * 2);
  image(img, heartX, height * 0.85, percX * 1.5, percX * 1.5); 
}
	

	
	// mine
	// for (let i = width * 0.25; i < loopControl; i += width * 0.02) 	{ //Loop the hearts
	// 	image(img, i, height * 0.85, percX * 1.5, percX * 1.5);
	// }
	
	
	
	fill('white');
	textSize(globalTextSize);
	strokeWeight(0);
	text("High-Score:", width * 0.1, height * 0.1);
	text(highScore, width * 0.1, height * 0.15);
	
	text("Score: ", width * 0.2, height * 0.1);
	text(currScore, width * 0.2, height * 0.15);
		
	text("Time Limit:", width * 0.1, height * 0.2);
	text(int(timeLimit), width * 0.1, height * 0.25);
	
		
		
	// text("Lives:", width * 0.1, height * 0.3);
	// text(lives, width * 0.1, height * 0.35);
		
	text("Press 'p' to pause", width * 0.7, height * 0.1);
	text("Press 'f' for fullscreen", width * 0.7, height * 0.2);
	
	
	

} // end of gameUI





function restart() 	{
	
 scene = 0;
	
 timeLimit = 30.5;

 bullets = [];
 eBullets = [];
 gass = [];
 stars = [];
 lbScores = [];
	
 highScore = 0;
 score2 = 0;
 score3 = 0;
 //playerName = "";
 currScore = 0;
 lives = 3;
	
 playerSheild = true;
 eFrames = false;
 eFramesDuration = 3.5;
 paused = false;
 
bulletBounds = false;
bulletBounds2 = false;
urBoyDead = false;
urBoyDead2 = false;
urBoyDead3 = false;
	
gameOver = false;
start = false;
playerDeath = false;
bossA = false;
inputCreated = false;

	// setup 
	playerX = width/2;
	playerY = height * 0.8;
	playerSpeed = 	playerSpeed = percX * 0.1;

	bulletY = playerY;
	
	
	goon = new Goon(width / 2, height / 2, percX * 1.5, percX * 1.5);
	
	moth = new Moth(width / 2, height / 2, percX * 1.5, percX * 1.5);
	
	boss = new Boss(width / 2, height * 0.3, percX * 1.5, percX * 1.5);
	
	bossAttack = new BossAttack(width * 0.06, height * 0.3);

	
	loadData();
	
	
} // end of restart








