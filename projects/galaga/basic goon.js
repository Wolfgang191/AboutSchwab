

class Goon	{
	constructor(x, y, sizeX, sizeY)	{
		this.x = x;
		this.y = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.bulletY = bulletY;
		this.speedX = percX * 0.05; // 0.8
		this.speedY = percY * 0.02; // 0.5
		this.percX = width / 100;
		this.health = 1;
		
	}
	
	
	
	
	display()	{
		if (urBoyDead === false)	{
		image(img2, this.x, this.y, this.sizeX, this.sizeY);
		}
	}
	
	
	update()	{

		this.y += this.speedY;
		
			
		if (gameOver) 	{
			this.speedY = 0;
			this.speedX = 0;
		} 
		// else {
		// 	this.speedX = 0.8;
		// 	this.speedY = 0.5;
		// }
		
		 if (ranNum < 0.5) {	
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
			urBoyDead = true;
			ranNum = (random(1) < 0.5);		
		}
		
	}
	
	
	
	
} // end of class