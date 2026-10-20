

class Moth	{
	constructor(x, y, sizeX, sizeY) 	{
		this.x = x;
		this.y = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.bulletY = bulletY;
		this.speedX = percX * 0.04; // 1
		this.speedY = percY * 0.01; // 0.2
		this.percX = width / 100;
		this.health = 1;
	}
	
	
	display()	{
		if (urBoyDead2 === false)	{
		image(img3, this.x, this.y, this.sizeX, this.sizeY);
		}
	}
	
	
	update()	{
		
		this.y += this.speedY;
		
		if (gameOver) 	{
			this.speedY = 0;
			this.speedX = 0;
		} 
		// else {
		// 	this.speedX = 1; // 1
		// 	this.speedY = 0.2; // 0.2
		// }
		
		 if (ranNum2 < 0.5) {	
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
		if (this.health === 0)	{
			urBoyDead2 = true;
			ranNum2 = (random(1) < 0.5);		
		}
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
} // end of class
	
	



