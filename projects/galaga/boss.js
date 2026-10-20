

class Boss	{
	constructor(x, y, sizeX, sizeY) 	{
		this.x = x;
		this.y = y;
		this.y2 = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.bulletY = bulletY;
		this.speedX = percX * 0.02; // 0.5
		this.speedY = 0;
		this.percX = width / 100;
		this.health = 1;
		// this.s = s;
	}
	
	
	display()	{
		if (urBoyDead3 === false)	{
		image(img4, this.x, this.y, this.sizeX, this.sizeY);
		}
	}
	
	
	update()	{
		
		if (gameOver) 	{
			this.speedX = 0;
			// this.speedY = 0;
		}
	
		// this.y += this.speedY;
		 if (ranNum3 < 0.5) {	
		 this.x -= this.speedX;
		 }	else	{
		 this.x += this.speedX;
		 }

		
		if (this.y > height * 0.6)	{
			this.speedY = - this.speedY
		}
		
		if (this.y < height * 0.25)	{
			this.speedY = - this.speedY
		}

		
		if (this.x < width * 0.335)	{
			this.speedX = - this.speedX;
		}
	
		if (this.x >= width * 0.665)	{
			this.speedX = - this.speedX;
		}
		
		if (this.x === this.bulletY || this.y === bulletY)	{
							bulletBounds = true;
				}
		
		// reset
		if (this.health === 0 && bossA === false)	{
			urBoyDead3 = true;
			ranNum3 = (random(1) < 0.5);		
		}
		
		
		

		
		this.s = second();
				//print(s);
		
		strokeWeight(2);
		stroke('white');
		fill('rgb(62,189,62)');
		
		strokeWeight(0);

		
		if (this.y < height * 0.65 && this.s >= 50 && !gameOver) 	{
			// this.speedX = 0;
			this.speedY = 2;
			this.y += this.speedY;
		} if (this.y > height * 0.2 && this.s < 50 && !gameOver) 	{
			bossA = false;
			this.speedY = -1;
			this.y += this.speedY;
		} if (this.y >= height * 0.64) 	{
			bossA = true;
		}
		
		// print(s);
		// print(this.y);
	} 	// end of update
	
	
	
	
	
	
	
} // end of class
	
	
