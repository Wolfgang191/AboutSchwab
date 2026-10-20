

class Bullet	{
	constructor(playerX, playerY, sizeX, sizeY)	{	
		this.x = playerX;
		this.y = playerY;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.speed = percY * 0.6; // 4
		this.dmg = 1;
		this.goon = goon;
		this.moth = moth;
		this.boss = boss;
	}
	
	
	
	
	display()	{
			stroke('black');
			strokeWeight(1);
			fill('white');
	rect(this.x, this.y, this.sizeX, this.sizeY); //  - (this.sizeX / 2)
	}

	
	move()	{
		this.y -= this.speed; 
		
		this.lives = lives;
		this.limit = timeLimit;
		if (this.lives === 0 || this.limit <= 0) 	{
			this.speed = 0;
		}
	}
	
	
	
	update() {	
		if	(this.y <= height * 0.067)	{
			bulletBounds = true;
			}
		
		// hit collision
		if (this.x > this.goon.x - this.goon.sizeX / 2 && this.x < this.goon.x + this.goon.sizeX / 2 && abs(this.y - this.goon.y) < this.goon.sizeY / 1.5) {
  bulletBounds = true;
  this.goon.health -= 1;
  currScore += 10;
		}
		
				if (this.x > this.moth.x - this.moth.sizeX / 2 && this.x < this.moth.x + this.moth.sizeX / 2 && abs(this.y - this.moth.y) < this.goon.sizeX / 1.5) {
  bulletBounds = true;
  this.moth.health -= 1;
  currScore += 10;
		}
		
				if (bossA === false && this.x > this.boss.x - this.boss.sizeX / 2 && this.x < this.boss.x + this.boss.sizeX / 2 && abs(this.y - this.boss.y) < this.boss.sizeX / 2) {
  bulletBounds = true;
  this.boss.health -= 1;
  currScore += 50;
		}
		

	}
	
	

	
	
	
	
	}	// end of class