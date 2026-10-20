



class Ice	{
	constructor(iceX, iceY)	{	
		this.x = iceX;
		this.y = iceY;
		this.a = 0;
		this.flip = false
		this.a = 0;
		this.a2 = 0;
		this.flip2 = false;
		
		
		this.randomIce = random([img7, img8]);
	}



	display() {



		//treeSize = randomInt(1, 2);

		//switch(treeSize)
			//case 1: 
		image(this.randomIce, this.x, this.y);
		// this.a += 0.1;
		if (this.flip == false) {
			this.a += 3;
			if (this.a >= 120) {
				this.flip = true;
			}
		} 
		if (this.flip == true) {
			this.a -= 3;
			if (this.a <= 0) {
				this.flip = false;
			}
		}
			// if (int(frameCount / 30) % 2 == 0) {
			// 	this.a = 100;
			// } else {
			// 	this.a = 0;
			// } // end elif
		fill(255, 255, 255, this.a)
		strokeWeight(0);
		rect(this.x, this.y, 112, 112);
		//rect(this.x, this.y, 65, 90);

	}


	update()	{
		this.playerX = playerX;
		this.playerY = playerY;

		this.touching =
			this.playerX > this.x - 45 &&
			this.playerX < this.x + 45 &&
			this.playerY > this.y - 45 &&
			this.playerY < this.y + 110;


					
		if (this.touching && !this.wasTouching) {
			textTime = 0.6;
			iceHit = true;
			//playerSpeed *= 1.5;
			if (playerSpeed < 8) {
				playerSpeed += 0.5;
			}
			if (playerSpeed > 8) {
				playerSpeed = 8;
			}
			//score++;
			speedLimit = 1;
		} // end if

		if (iceHit && playerSpeed < 8) {
			// if (this.flip2 == false) {
			// 	this.a2 += 5;
			// if (this.a2 >= 120) {
			// 	this.flip2 = true;
			// }
			// } 
			// if (this.flip2 == true) {
			// 	this.a2 -= 5;
			// if (this.a2 <= 0) {
			// 	this.flip2 = false;
			// }
			// }

			// fill(0, 150, 255, this.a2);
			// rect(width / 2, playerY, width * 2, height * 2);
			speedLimit -= deltaTime / 1000;
			if (speedLimit <= 0) {
				//playerSpeed = playerSpeed /= 1.5;
				iceHit = false
				audio4Played = false;
			}
		} // end if


			this.wasTouching = this.touching;

	} // end update




} // end class