


class Star 	{
	constructor(x, y, speed, size)	 {
		this.x = x;
		// this.y = height * 0.06;
		this.y = y;
		this.size = size;
		this.speed = speed;
		this.r = random(0, 255);
		this.g = random(0, 255);
		this.b = random(0, 255);
		
	}
	
	
	display() 	{
		
		strokeWeight(0);
		fill(this.r, this.g, this.b);
		rect(this.x, this.y, this.size, this.size);
	}
	
	
	update() 	{
		this.y += this.speed;
		
		// reset	
		if (this.y > height * 0.94) 	{
			this.x = random(width * 0.325, width * 0.645);
			this.y = height * 0.06;
			this.r = random(0, 255);
			this.g = random(0, 255);
			this.b = random(0, 255);
		}
		
	}
	
	
	
	
} 	// end of class