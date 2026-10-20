


class BossAttack {
	constructor(sizeX, sizeY) {
		// this.x = Boss.x;
		// this.y = Boss.y;
		this.boss = boss;
		this.playerX = playerX;

		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}
	
	
	// 	display() 	{
	// 	fill('rgba(0,0,255,0.36)');
	// 	rect(this.boss.x, this.boss.y + (this.sizeY / 2), this.sizeX, this.sizeY); //  - ((width * 0.035) / 2),  - (width * 0.05),  + this.sizeY	
	// }
	
	
	update() 	{
				this.boss = boss;
				this.playerX = playerX;
		
		if (bossA) 	{
		this.playerX = playerX;
		fill('rgba(0,0,255,0.36)');
		rect(this.boss.x, this.boss.y + (this.sizeY / 2), this.sizeX, this.sizeY);
		}
		
		
		// print(playerX);
		if (bossA && this.boss.x > this.playerX - (this.sizeX / 2) && this.boss.x < this.playerX + (this.sizeX / 2)) 	{ //  - (this.sizeX / 1.5)  + (this.sizeX / 1.5)
			if (!playerSheild && !eFrames) 	{
			playerDeath = true;
			//print(playerDeath);
			// print("yay");
			}
		}
	}
	
	
} // end of class