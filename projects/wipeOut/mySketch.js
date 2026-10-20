
// JAM GAME
// Zach Schwab
// 1/29/26
// 2026 copyright



function preload() {
	// small tree
	// img = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/New%20Piskel-1.png%20(1).png');
	img = loadImage('images/New Piskel-1.png (1).png');
	// // start
	// img2 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Finish_StartLine-1.png%20(2).png');
	img2 = loadImage('images/Finish_StartLine-1.png (2).png');
	// // large tree
	// img3 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/BigTree-1.png.png');
	// // mid tree
	// img4 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/BigTree-1.png%20(1).png');
	img4 = loadImage('images/BigTree-1.png (1).png');
	// //player
	// img5 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/SnowBoard-2.png%20(1).png');
	//img5 = loadImage('images/SnowBoard-2.png (1).png');
	//img5 = loadImage('images/snowboard-1.png.png');
	img5 = loadImage('images/snowboard2-2.png (1).png');
	// // snow?
	// //img6 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Snow-1.png.png');
	// // ice
	// img7 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Snow-1.png%20(1).png');
	img7 = loadImage('images/Snow-1.png (1).png');
	// // ice2
	// img8 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Ice2-2.png.png');
	img8 = loadImage('images/Ice2-2.png.png');
	// // logo
	// gif = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/WhipeOut%20(2).gif');
	gif = loadImage("images/WhipeOut (2).gif");
	// // PRESS START
	// //img9 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/pixel-text%20(2).png');
	// // press start 2
	// img10 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/PressStart-1.png.png');
	// // arrow left
	// img11 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Arrow-1.png.png');
	// // arrow right
	// img12 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/ArrowRight-2.png.png');
	// // w
	// img13 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs-1.png.png');
	img13 = loadImage('images/Inputs-1.png.png');
	// // a
	// img14 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs-2.png.png');
	img14 = loadImage('images/Inputs-2.png.png');
	// // d
	// img15 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs-4.png.png');
	img15 = loadImage('images/Inputs-4.png.png');
	// // s
	// img16 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs-3.png.png');
	// // space left
	// img17 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs-5.png%20(1).png');
	// // space right
	// img18 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs-6.png%20(1).png');
	// // skull
	// img19 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs-9.png.png');
	// // skull crying
	// gif2 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs%20(2).gif');
	// // lives
	// img20 =loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs-1.png%20(1).png');
	// // crying skull no bg
	// gif3 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs%20(3).gif');
	gif3 = loadImage('images/Inputs (3).gif');
	// // skull lives
	// img21 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/Inputs-1.png%20(2).png');
	img21 = loadImage('images/Inputs-1.png (2).png');
	// // cry no bg 10fps
	// gif4 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/CryNBG.gif');
	// // skull no bg
	// img22 = loadImage('https://deckard.openprocessing.org/user499060/visual2859834/h8b1b9fde9ea872e6e29458a45dcee655/CryNBG-1.png.png');
	img22 = loadImage('images/CryNBG-1.png.png');
	// retro font
	bytesized = loadFont('Bytesized-Regular.ttf');
	// log
	img23 = loadImage('images/Log-2.png.png');
	// slightly smaller log
	img24 = loadImage('images/Log2-2.png.png');
	// left speed bar
	img25 = loadImage('images/SpeedBar-10.png.png');
	// middle bar
	img26 = loadImage('images/SpeedBar-11.png.png');
	// right bar
	img27 = loadImage('images/SpeedBar-12.png.png');
	// left full
	img28 = loadImage('images/SpeedBarFull-10.png.png');
	// middle full
	img29 = loadImage('images/SpeedBarFull-11.png.png');
	// right full
	img30 = loadImage('images/SpeedBarFull-12.png.png');
	// fullscreen
	img31 = loadImage('images/FullScreen-13.png.png');
	// fullscreen 2
	img32 = loadImage('images/FullScreen2-13.png.png');
	// death
	audio = loadSound('audio/jingles_NES00.ogg');
	// bg music
	music = loadSound('audio/7-SET_SAIL.wav');
	//music = loadSound('audio/song-cool_snowboarding_loop.mp3');
	// wood / hurt
	//audio2 = loadSound('audio/impactWood_light_002.ogg');
	audio2 = loadSound('audio/hurt.wav');
	// coin
	audio3 = loadSound('audio/coin.wav');
	// whoosh
	audio4 = loadSound('audio/whoosh_shortest_06.mp3');
} // end preload



let trees = [];
let ices = [];
let particles = [];
let logs = [];

//playerSpeed = 4;
//playerIdleSpeed = 2.5;
//camY = 0;

//scene = 0;
//a2 = 0;


//gameStart = false;
//death = false;

devScore = 50;
savedHighScore = 0;
//savedTutorialFinished = false


function setup() {
	createCanvas(windowWidth, windowHeight);

	//frameCount = 30;
	
	rectMode(CENTER);
	imageMode(CENTER);
	textAlign(CENTER);

	//sketchMode(CENTER);

	//playerX = width / 2;
	//playerY = height / 2;

	//treeX = random(0, width);
	//treeY = random(0, height);

	// customs
	sizez = (width + height); 
	percX = width / 100;
	percY = height / 100;
	perc = 0;

	reset();

	textFont(bytesized);

	


} // end setup


function reset() {

	death = false;
	scene = 0;

	tutorialFinished = false;

	loadData();

	
	playerSpeed = 3;
	playerIdleSpeed = playerSpeed / 2;

	spawnY = -420;
	spawnY2 = 0;
	spawnDist = 600; // x
	spawnDistY = 400; // y
	spawnYLogs = -500;
	spawnAmt = 2;
	spawnAmt2 = 1;
	spawnAmtLogs = 1;
	deleteDist = 600;
	spawnSpacing = 300; // x
	spawnSpacingY = 200; // y
	
	camY = 0;
	//scene = 0;
	a2 = 0;
	a3 = 0;
	flip = false;

	gameStart = false;
	//death = false;
	lives = 3;

	playerX = width / 2;
	playerY = height / 2;
	playerSize = sizez * 0.04;
	cam = playerY;
	shakeAmount = 0;
	shakeDecay = 0.9; 
	zoom = 1;
	jumpOffset = 0;

	eFrames = false;
	eFramesDuration = 2;

	angle = 0;
	hit = false;

	speedLimit = 1;
	iceHit = false;
	logHit = false;
	treeHit = false;
	airTime = 0;

	score = 0;
	textTime = 0;

	playerScore = 0;

	tutorialSpawns = false;

	audio.setVolume(0.1); // death
	audio2.setVolume(0.5); // hurt 
	music.setVolume(0.01); // bg
	audio3.setVolume(0.1);// coin
	audio4.setVolume(0.5); // whoosh

	audioPlayed = false;
	audio2Played = false;
	audio3Played = false;
	audio4Played = false;

	sceneChangeTime = 5;
	sceneChange = false;

	linkCreated = false;

} // reset


function audioController() {
	// if (treeHit && !eFrames && !audio2Played && lives > 0) {
	// 	audio2.play();
	// 	treeHit = false;
	// 	audio2Played = true;
	// }
	if (death && !audioPlayed) {
		audio2.stop();
		music.stop();
		music.setVolume(0);
		audio.play();
		audioPlayed = true;
	}
	if (iceHit && !audio4Played) {
		audio4.play();
		audio4Played = true;
	}

} // end audioController




function draw() {
	audioController();

	switch(scene) {
		case 0:
			// if (!tutorialFinished) {
			// 	scene = 2;
			// } else {
			// 	StartScene();
			// }
			StartScene();

			//if (keyIsPressed || mouseIsPressed) {
			//	scene = 1;
			//	gameStart = true;
			//}
			


			break;
		case 1:

			

			//break;
		//case 2:
			
	background('white');
	//image(img6, width/2, height/2, width, height);


	// debugging
	//print(trees.length);
	//print(mouseY);
	//print(playerY);
			// print(lives);
			// print(eFramesDuration);
			// print(playerSpeed);


			

			



	//image(img19, width/2, height/2)

	
	push();
	
	translate(width/2, height/2); // move origin to canvas center
	scale(zoom);                  // scale from center
	translate(-width/2, -height/2); // move origin back
			
			if (playerY < height * 0.2) {
				camY = lerp(camY, playerY - height * 0.8, 0.15); // smooth slide
				//camY = playerY - height * 0.7;
			} else {
				camY = playerY - height / 2;
			}
			
	translate(0, -camY);
	let shakeX = random(-shakeAmount, shakeAmount);
	let shakeY = random(-shakeAmount, shakeAmount);
	translate(shakeX, shakeY);


	
	move();
	spawnIce();
	spawnTrees();
	spawnLogs();
	cleanupOldTrees();
	cleanupOldIce();
	cleanupOldLogs();





			
		
		//print(playerY);
		//spawnAmt = 20

	for (let ice of ices) {
		ice.display();
		ice.update();
	}

	for (let log of logs) {
		log.display();
		log.update();
	}
	
	for (let tree of trees) {
		tree.display();
		tree.update();
	}


	
	image(img2, width / 2, height * 0.2, sizez * 0.1, sizez * 0.1); // start line
	drawUI();

			
	
	//for(i = 0; i < spawnAmt; i++) {
		//playerY = playerY
		//trees.push(new Tree(random(0, width), random(0, height)));
		////trees[i].update();
		//trees[i].display();
	//}

  // draw player (world space)
	fill('lightBlue');
	strokeWeight(0);
	//rect(playerX, playerY, 40, 50);
	if (!death) {
		image(img5, playerX, playerY - jumpOffset, playerSize, playerSize); // player
		//rotateText();
		//cam = lerp(playerY - (height * 0.2), playerY, 0.01);
		cam = playerY;
	} else {
		playerSpeed = 0;
		playerIdleSpeed = 0;
		camSpeed = 1;
		cam -= camSpeed;
		camY = cam - height / 2;
	}
			shakeAmount *= shakeDecay;
	pop();

	//image(img7, width/2, height/2);


		

	screenFlash();


	// image(img, playerX, playerY)
	//circle(mouseX, mouseY, 20);
	drawOverlay();
			particles.push(new Particle(playerX, playerY));

			break;

		case 2:
			tutorial();
			break;	

		case 3:
			credits();

			
	} // end switch scene
} // end draw





function move() {

	
	if (playerY < 150 && !death)	{
		playerY -= playerSpeed;
		//playerSpeed = 5;
	}

	// if (playerX >= Tree.x)	{
	// 	print("yay");
	// }


	//print(Tree.x)

	if (gameStart == true) {
	// up
		if (keyIsDown (87) || keyIsDown(38))	{
			playerY -= lerp(0, playerSpeed, 1);
			//playerY -= playerSpeed;
		}  
	 // down
		//if (keyIsDown (83) && playerY < height)	{
				//playerIdleSpeed = 1.5;
		//} else {
			//playerIdleSpeed = playerSpeed / 2;
		//}
	// left
		if (keyIsDown (65) || keyIsDown(37) && playerX > 0)	{
			playerX -= playerSpeed / 1.15;
		}
	// right
		if (keyIsDown (68) || keyIsDown(39 )&& playerX < width)	{
			playerX += playerSpeed / 1.15;
		}
	} // end if
} // end move


function spawnIce() {
  // keep spawning rows behind the player only
  while (spawnY2 > playerY - height) {
    for (let i = 0; i < spawnAmt2; i++) {
      //let x = random(40, width - 40);
		let x = random(spawnSpacing, width - spawnSpacing);
      let y = spawnY2 + random(-40, 40);
      ices.push(new Ice(x, y));
    }
    spawnY2 -= spawnDist; // move spawn point backward
  }
}


function spawnTrees() {
  // keep spawning rows behind the player only
  if (score >= 15) {
	spawnAmt = 3;
  }
  while (spawnY > playerY - height) {
    for (let i = 0; i < spawnAmt; i++) {
      //let x = random(40, width - 40);
		//let x = random(spawnSpacing, width - spawnSpacing); // 
		let x = random(0 + 35, width - 35);
		let y = spawnY + random(-40, 40); // spawnSpacingY, height - spawnSpacing
      //let y = spawnY + random(-40, 40);
      trees.push(new Tree(x, y));
    }
    spawnY -= spawnDist; // move spawn point backward
  }
}


function spawnLogs() {
  // keep spawning rows behind the player only
  while (spawnYLogs > playerY - height) {
    for (let i = 0; i < spawnAmtLogs; i++) {
      //let x = random(40, width - 40);
		//let x = random(spawnSpacing, width - spawnSpacing); // 
		let x = random(0 + 35, width - 35);
		let y = spawnY + random(-40, 40); // spawnSpacingY, height - spawnSpacing
      //let y = spawnY + random(-40, 40);
      logs.push(new Log(x, y));
    }
    spawnYLogs -= spawnDist; // move spawn point backward
  }
}



function cleanupOldIce() {
  ices = ices.filter(ice => {
    return ice.y < playerY + deleteDist;
  });
}



function cleanupOldTrees() {
  trees = trees.filter(tree => {
    return tree.y < playerY + deleteDist;
  });
}


function cleanupOldLogs() {
  logs = logs.filter(log => {
    return log.y < playerY + deleteDist;
  });
}







function drawUI()	{
	textSize(percX * 5);
	//text("W", width * 0.25, height * 0.65);
	//w
	//print(frameRate)

	if (gameStart == true) {
		image(img13, width * 0.25, height * 0.65, sizez * 0.03, sizez * 0.03); // w
	
			if (int(frameCount / 30) % 2 == 0) {
				a = 50;
			} else {
				a = 0;
			} // end elif
			fill(255, 255, 255, a);
	
				strokeWeight(0);
				rect(width * 0.25, height * 0.65, sizez * 0.0275, sizez * 0.0275);
			image(img14, width * 0.22, height * 0.75, sizez * 0.03, sizez * 0.03);
			image(img15, width * 0.28, height * 0.75, sizez * 0.03, sizez * 0.03);

		strokeWeight(5);
		stroke('black');
		fill('lightGray');
		rect(width * 0.8, height * 0.35, width * 0.2, height * 0.2, 20);
		strokeWeight(0);
		textSize(percX * 2.5);
		fill('black');
		text("DEV SCORE: " + devScore, width * 0.8, height * 0.3);
		text("YOUR SCORE: " + savedHighScore, width * 0.8, height * 0.4);
			// s
			//image(img16, width * 0.25, height * 0.75);
			//text("A", width * 0.2, height * 0.75);
			//text("D", width * 0.3, height * 0.75);
	} // end if




	// character select
	// if (gameStart == false) {
	// 	strokeWeight(0);
	// 	if (int(frameCount / 30) % 2 == 0) {
	// 		a = 50;
	// 	} else {
	// 		a = 0;
	// 	} // end elif
		
	// 	fill(255, 255, 255, a);

	// 	// character select arrows
	// 	image(img11, width * 0.45, height / 2);
	// 	image(img12, width * 0.55, height / 2);
		
	// 	image(img17, width * 0.48, height * 0.65);
	// 	image(img18, width * 0.52, height * 0.65); // + 63.5
	// 	rect(width * 0.48, height * 0.65, 60, 60);
	// 	rect(width * 0.48 + 60, height * 0.65, 60, 60);
	// 	if (keyCode == 32) {
	// 		gameStart = true;
	// 	}
	// }
	
	
} // end drawUI

function drawOverlay() {
	//rect(width * 0.125, height * 0.045, sizez * 0.030, sizez * 0.030, 0, 0, 20, 20);

	if (gameStart) {
		//image(img21, width * 0.125, height * 0.1);
		for (let i = 0; i < lives; i++) {
			let heartX = width * 0.05 + i * (percX * 2.5);
			image(img21, heartX, height * 0.05, sizez * 0.015, sizez * 0.015); 
			fill('black');
			textSize(percX * 3.5);
			strokeWeight(0);
			//text("SPEED: " + playerSpeed, width * 0.8, height * 0.8);
			text("SCORE: " + score, width / 2, height * 0.05);

			if (playerSpeed > 3) {
				image(img28, (width / 2) - (sizez * 0.03) / 2 - sizez * 0.03, height * 0.9, sizez * 0.03);
			} else {
				image(img25, (width / 2) - (sizez * 0.03) / 2 - sizez * 0.03, height * 0.9, sizez * 0.03);
			}
			//image(img26, width / 2, height * 0.9, sizez * 0.03);
			if (playerSpeed > 3.5) {
				image(img29, (width / 2) - (sizez * 0.03) / 2, height * 0.9, sizez * 0.03);
			} else {
				image(img26, (width / 2) - (sizez * 0.03) / 2, height * 0.9, sizez * 0.03);
			}

			if (playerSpeed > 5.5) {
				image(img29, (width / 2) + (sizez * 0.03) / 2, height * 0.9, sizez * 0.03); // right middle 
			} else {
				image(img26, (width / 2) + (sizez * 0.03) / 2, height * 0.9, sizez * 0.03);
			}

			if (playerSpeed > 7.5) {
				image(img30, (width / 2) + (sizez * 0.03) / 2 + sizez * 0.03, height * 0.9, sizez * 0.03); // right
			} else {
				image(img27, (width / 2) + (sizez * 0.03) / 2 + sizez * 0.03, height * 0.9, sizez * 0.03); // right
			}
		}
	} // end if
		
	if (death) {
		// if (!audioPlayed) {
		// 	music.setVolume(0);
		// 	audio.play();
		// 	audioPlayed = true;
		// }

		saveData();
		
		a2 += 2;
		fill(0, 0, 0, a2);
		strokeWeight('5');
		rect(width / 2, height / 2, width, height);
		
		// death
		image(gif3, width / 2, height / 2, sizez * 0.2, sizez * 0.2);

		if (a2 >= 200) {
			fill('white');
			fill('black');
			stroke('white');
			strokeWeight('5');
			rect(width / 2, height * 0.9, width * 0.15, height * 0.1);
			fill('white');
			textSize(percX * 3);
			strokeWeight(0);
			text("RESTART", width / 2, height * 0.915);
			text("SCORE: " + score, width / 2, height * 0.05);
			// if (mouseX > (width / 2) - (width * 0.15) && mouseX < (width / 2) + (width * 0.15) && mouseY < (height * 0.925) + (height * 0.1) && mouseY > (height * 0.925) - (height * 0.1) && mouseIsPressed === true) {
			// 	//print("yay");/
			// 	reset();
			// }
		}
	}
} // end 


function StartScene() {

	sceneChangeTime = 5;

	// if (sceneChangeTime > 0) {
	// 	sceneChange = true;
	// 	sceneChangeTime -= deltaTime;
	// } else {
	// 	sceneChange = false;
	// }


	background('lightBlue');
	//print("test");
	image(gif, width / 2, height * 0.35, sizez * 0.2, sizez * 0.2);
	strokeWeight('5');
	stroke('black')
	fill('white');
	rect(width / 2, height * 0.735, width * 0.15, height * 0.08, 50);
	//if (mouseX > (width / 2) - (width * 0.15) && mouseX < (width / 2) + (width * 0.15) && mouseY < (height * 0.735) + (height * 0.08) && mouseY > (height * 0.735) - (height * 0.08) && mouseIsPressed === true) {
	if (mouseX > width/2 - width*0.15/2 && mouseX < width/2 + width*0.15/2 && mouseY > height*0.735 - height*0.08/2 && mouseY < height*0.735 + height*0.08/2 && mouseIsPressed) {
		scene = 1;
		gameStart = true;
	}
	// rect(width / 2, height * 0.835, width * 0.15, height *0.08, 50);
	// if (mouseX > width/2 - width*0.15/2 && mouseX < width/2 + width*0.15/2 && mouseY > height*0.835 - height*0.08/2 && mouseY < height*0.835 + height*0.08/2 && mouseIsPressed) {
	// 	scene = 2;
	// 	gameStart = true; // tutorial
	// }

	rect(width * 0.1, height * 0.9, width * 0.1, height *0.05, 50);
	if (mouseX > width * 0.1 - width * 0.1 / 2 && mouseX < width * 0.1 + width * 0.1 / 2 && mouseY > height * 0.9 - height * 0.05 / 2 && mouseY < height * 0.9 + height * 0.05 / 2 && mouseIsPressed) { 
		scene = 3;
		sceneChangeTime = 5;
	}

	image(img32, width * 0.95, height * 0.9, sizez * 0.03, sizez * 0.03);
	//if(mouseX > width * 0.95 - width * 0.95 / 2 && mouseX < width * 0.95 + width * 0.95 / 2 && mouseY > height * 0.9 - height * 0.09 / 2 && mouseY < height * 0.9 + height * 0.09 / 2 && mouseIsPressed) {
	// if (mouseX > width*0.95 - (sizez*0.03)/2 && mouseX < width*0.95 + (sizez*0.03)/2 && mouseY > height*0.9 - (sizez*0.03)/2 && mouseY < height*0.9 + (sizez*0.03)/2 && mouseIsPressed) {
	// 	let fs = fullscreen();
	// 	fullscreen(!fs);
	// }



	if (int(frameCount / 30) % 2 == 0) {
		a = 80;
	} else {
		a = 0;
	} // end elif
	
	fill(210, 4, 45, a);
	rect(width / 2, height * 0.835, width * 0.15, height * 0.08, 50);


	//image(img10, width / 2, height * 0.85);
	strokeWeight(2);
	textSize(percX * 2.5);
	fill('black');
	text("PLAY", width / 2, height * 0.74);
	text("TUTORIAL", width / 2, height * 0.84);
	textSize(percX * 2);
	text("CREDITS", width * 0.1, height * 0.905);
	//drawOverlay();
}



function mousePressed() {
	// fullscreen btn 
	if (mouseX > width*0.95 - (sizez*0.03)/2 && mouseX < width*0.95 + (sizez*0.03)/2 && mouseY > height*0.9 - (sizez*0.03)/2 && mouseY < height*0.9 + (sizez*0.03)/2 && scene == 0) {
    	fullscreen(!fullscreen());
  	}
    if (!music.isPlaying()) {
        music.loop();
    }
	// 			rect(width / 2, height * 0.9, width * 0.15, height * 0.1);
	// reset
	if (mouseX > (width / 2) - (width * 0.15) && mouseX < (width / 2) + (width * 0.15) && mouseY < (height * 0.9) + (height * 0.1) && mouseY > (height * 0.9) - (height * 0.1) && death && a2 >= 200) {
		reset();

		return;
	}

		// rect(width / 2, height * 0.835, width * 0.15, height *0.08, 50);
	if (mouseX > width/2 - width*0.15/2 && mouseX < width/2 + width*0.15/2 && mouseY > height*0.835 - height*0.08/2 && mouseY < height*0.835 + height*0.08/2 && scene == 0 && !death) {
		scene = 2;
		gameStart = true; // tutorial

		return;
	}
	
}






function keyPressed() {
	if (key === 'f') {
		let fs = fullscreen();
		fullscreen(!fs);
	}
	//if (key === 'p') 	{
		//paused = !paused;
	//}
} // end keyPressed



function rotateText() {
	// push();
	// 	translate(width * 0.65, height * 0.125);
	// 	angle = 0;
	// 	angle = radians(random(-67, 67));
	// 	rotate(angle);
	
	if (textTime > 0) {
		textTime -= deltaTime / 1000;
		textSize(percX * 2.25);
		fill('red');
		text("Slick!", playerX, playerY - 40);
	}

	// pop();
} // end of rotateText




function saveData(){

	//loadData();

	//storeItem('TutorialFinished', tutorialFinished);

	if (score > savedHighScore) {
		storeItem('Score', score);	
	}
	
} // end saveData




function loadData(){

	
	savedHighScore = getItem('Score');

	//savedTutorialFinished = getItem('TutorialFinished');
	
	if (savedHighScore === null) {
		savedHighScore = 0;
	}
		
} // end loadData




function tutorial() {
	//reset();

	background('white');
			
			push();
			translate(width/2, height/2); // move origin to canvas center
			scale(zoom);                  // scale from center
			translate(-width/2, -height/2); // move origin back
			
			if (playerY < height * 0.2) {
				camY = lerp(camY, playerY - height * 0.8, 0.15); // smooth slide
				//camY = playerY - height * 0.7;
			} else {
				camY = playerY - height / 2;
			}

			if (playerY < height * -5.25) {
				tutorialFinished = true;
				scene = 1;
			}
			
			translate(0, -camY);
			let shakeX = random(-shakeAmount, shakeAmount);
			let shakeY = random(-shakeAmount, shakeAmount);
			translate(shakeX, shakeY);
			move();


	image(img2, width / 2, height * 0.2, sizez * 0.1, sizez * 0.1); // start line

	image(img13, width * 0.4, height * 0.4, sizez * 0.03, sizez * 0.03); // w

	if (int(frameCount / 30) % 2 == 0) {
		a = 50;
	} else {
		a = 0;
	} // end elif
	fill(255, 255, 255, a);
	strokeWeight(0);
	rect(width * 0.4, height * 0.4, sizez * 0.0275, sizez * 0.0275);



	tutorialObjects();
	
	for (let ice of ices) {
		ice.display();
		ice.update();
	}

	for (let log of logs) {
		log.display();
		log.update();
	}

	for (let tree of trees) {
		tree.display();
		tree.update();
	}


	fill('black');
	textSize(percX * 5)
	text("ICE SPEEDS YOU UP!", width * 0.7, height * -0.1);
	text("LOGS INCREASE SCORE!", width * 0.3, height * -1);
	text("WATCHOUT FOR TREES!", width * 0.7, height * -2);
	//text("CROSS THE FINISH LINE TO RETURN TO THE MAIN MENU", width * 0.3, height * -4);
	text("RELEASE  W  TO IDLE", width * 0.3, height * -4);
	text("GOOD LUCK!", width * 0.7, height * -4.75)

	image(img13, width * 0.3, height * -4.005);


	image(img14, width * 0.45, height * -2.25, sizez * 0.03, sizez * 0.03); // a
	image(img15, width * 0.55, height * -2.25, sizez * 0.03, sizez * 0.03); // d
	fill(255, 255, 255, a);
	strokeWeight(0);
	rect(width * 0.45, height * -2.25, sizez * 0.0275, sizez * 0.0275);
	rect(width * 0.55, height * -2.25, sizez * 0.0275, sizez * 0.0275);


	//image(img2, width / 2, height * -4.75, sizez * 0.1, sizez * 0.1); // finish line
			
	fill('lightBlue');
	strokeWeight(0);
	//rect(playerX, playerY, 40, 50);
	if (!death) {
		image(img5, playerX, playerY - jumpOffset, playerSize, playerSize); // player
		//rotateText();
		cam = playerY;
	} else {
		playerSpeed = 0;
		playerIdleSpeed = 0;
		camSpeed = 1;
		cam -= camSpeed;
		camY = cam - height / 2;
	}

	shakeAmount *= shakeDecay;
	pop();
	
	screenFlash();



	drawOverlay();
			//particles.push(new Particle(playerX, playerY));

} // end 


function tutorialObjects() {
	if (!tutorialSpawns) {
		ices.push(new Ice(width / 2, height * -0.4));
		logs.push(new Log(width / 2, height * -1.2))
		//ices.push(new Ice(width / 2, height * -0.8));
		//ices.push(new Ice(width / 2, height * -1.2));
		trees.push(new Tree(width * 0.4, height * -2.75)); //
		//trees.push(new Tree(width * 0.6, height * -4.5));
		trees.push(new Tree(width / 2, height * -3.5)); // back
		trees.push(new Tree(width * 0.4, height * -2.75));
		trees.push(new Tree(width * 0.6, height * -3.25));



		tutorialSpawns = true;
	}
}




function screenFlash() {
	
	if (iceHit && playerSpeed < 8) {
		textSize(percX * 3);
		text("+0.5", width / 2, height * 0.85);
		zoom = lerp(zoom, 1 / (1 + playerSpeed * 0.03), 0.05);

		// if (flip == false) {
		// 	a3 += 4;
		// 	if (a3 >= 120) {
		// 		flip = true;
		// 	}
		// } 
		// if (flip == true) {
		// 	a3 -= 4;
		// 	if (a3 <= 0) {
		// 		flip = false;
		// 	}
		// }

		// fill(0, 150, 255, a3);
		// playerY = playerY;
		//rect(width / 2, height / 2, width, height);
	} else {
		zoom = lerp(zoom, 1, 0.05); // smooth zoom
	}

	if (iceHit && playerSpeed >= 8) {
		//textSize(percX * 1.5);
		text("MAX", width / 2, height * 0.85);
	}

	if (logHit) {
		if (airTime > 0) {
			textSize(percX * 3);
			text("+1", width / 2, height * 0.1);
			if (!audio3Played) {
				audio3.play();
				audio3Played = true;
			}
    		jumpOffset = sin(map(airTime, 35, 0, 0, PI)) * 80;
   			airTime--;
 		} else {
			audio3Played = false;
    		jumpOffset = 0;
			lofHit = false;
  		}
	}


} // end 



function credits() {

	if (sceneChangeTime > 0) {
		sceneChangeTime -= deltaTime;
	}

	// if (sceneChangeTime > 0) {
	// 	sceneChange = true;
	// 	sceneChangeTime -= deltaTime;
	// } else {
	// 	sceneChange = false;
	// }

	background('lightBlue');

	fill('white');
	textSize(percX * 2.5);
	stroke('black');
	strokeWeight(5);
	rect(width * 0.1, height * 0.1, width * 0.1, height *0.05, 50); // button
	rect(width / 2, height / 2, width * 0.6, height * 0.85, 50);
	fill('black');
	strokeWeight(2);
	text("BACK", width * 0.1, height * 0.105);

	textSize(percX * 2.5);
	text("MUSIC TRACK: dancramp on itch.io", width * 0.5, height * 0.2);
	text("Death SFX: kenney.nl", width / 2, height * 0.3);
	text("Coin & hit SFX: Brackeys, Asbjørn Thirslund", width / 2, height * 0.4);
	text("Font: Baltdev", width / 2, height * 0.5);
	text("Whoosh SFX: CC-BY", width / 2, height * 0.6);
    // if (!linkCreated && scene == 3) {
    //     link = createA('https://p5js.org/', 'Visit p5.js Website', '_blank');
    //     link.position(width * 0.4, height * 0.8); // position slightly below the text
    //     link.style('color', 'blue'); // optional
    //     linkCreated = true;
    // }

	if (mouseX > width * 0.1 - width * 0.1 / 2 && mouseX < width * 0.1 + width * 0.1 / 2 && mouseY > height * 0.1 - height * 0.05 / 2 && mouseY < height * 0.1 + height * 0.05 / 2 && mouseIsPressed && sceneChangeTime <= 0) { 
		scene = 0;
		sceneChangeTime = 5;
	}
	
	fill(0, 0, 0, 0);
	stroke('white');
	strokeWeight(15);
	rect(width / 2, height / 2, width, height);

	// stokeWeight(2);
	// fill('')

	//text("Art", width * 0.)
}