// not currently in use

class Gas	{
	constructor(playerX, playerY, sizeX, sizeY)	{	
		this.x = playerX;
		this.y = playerY;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.speed = 4;
		this.dmg = 1;
		this.goon = goon;
		this.moth = moth;
		this.boss = boss;
	}
	
	
	
	
	display()	{
			strokeWeight(0);
			fill('rgba(222,102,40,0.86)');
	ellipse(this.x, this.y, this.sizeX, this.sizeX); //  - (this.sizeX / 2)
	}

	
	move()	{
		this.y += this.speed; 
	}
	
	
	
	update() {	
		if	(this.y >= height * 0.03)	{
			bulletBounds = true;
			}
		

		
		

	}
	
	

	
	
	
	}	// end of class