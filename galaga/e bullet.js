

class eBullet	{
	constructor(playerX, playerY, sizeX, sizeY)	{	
		this.x = playerX;
		this.y = playerY;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.speed = percY * 0.2; // 2
		this.dmg = 1;
		this.goon = goon;
		this.moth = moth;
		this.boss = boss;
		this.playerSizeX = playerSizeX;
		this.playerSizeY = playerSizeY;
	}
	
	
	
	
	display()	{
			stroke('black');
			strokeWeight(1);
			fill('white');
	rect(this.x, this.y, this.sizeX, this.sizeY); //  - (this.sizeX / 2)
	}

	
	move()	{
		if (!gameOver) 	{
		this.y += this.speed; 
		}
	}
	
	
	
	update() {	
		// end of frame
		if	(this.y >= height * 0.93)	{
			bulletBounds2 = true;
			}
		
		// updating 
		this.playerX = playerX;
		this.playerY = playerY;
		
		// collision
				if (!playerSheild && !eFrames && this.x > this.playerX - this.playerSizeX * 0.7 && this.x < this.playerX + this.playerSizeX * 0.7 && abs(this.y - this.playerY) < this.playerSizeY * 0.7) {
  bulletBounds2 = true;
	playerDeath = true;
		}
		
		// collision
		if (playerSheild && this.y >= playerY - sheildSize / 1.5 && this.x > this.playerX - sheildSize / 2 && this.x < this.playerX + sheildSize / 2) 	{
			bulletBounds2 = true;
		}

		// print(mouseY);

	} // end of update
	
	

	
	
	
	}	// end of class