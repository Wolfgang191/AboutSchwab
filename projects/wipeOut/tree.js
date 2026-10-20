



class Tree	{
	constructor(treeX, treeY)	{	
		this.x = treeX;
		this.y = treeY;
		
		
		
		this.treeSize = random([img, img4]);
	}



	display() {
		//this.treeSizeRandom = int(random(1, 3));
		//print(this.treeSizeRandom);
		
		//switch(this.treeSizeRandom)	{
			//case 1: 
				//image(img, this.x, this.y);
				//this.treeSize = img

				//break;
		 	//case 2:
				//image(img4, this.x, this.y);
				//this.treeSize = img4

				//break;
		 //} // end switch

					
		image(this.treeSize, this.x, this.y);
		//rect(this.x, this.y, 65, 90);
	}


	update()	{
		//print("yay");
		this.playerX = playerX;
		this.playerY = playerY;

		this.touching =
			this.playerX > this.x - 45 &&
			this.playerX < this.x + 45 &&
			this.playerY > this.y - 45 &&
			this.playerY < this.y + 110;

		/// hit detect, needs refactoring
		//if (this.playerX > this.x - 45 && this.playerX < this.x + 45 && this.playerY > this.y - 45 && this.playerY < this.y + 110) {
			
			if (!eFrames && this.touching && !this.wasTouching) {
				if (!audio2Played && lives > 0) {
					audio2.play();
					//treeHit = false;
					audio2Played = true;
				} // end if

				//treeHit = true;
				//rotateText();
				//if (playerSpeed < 4)	{
					playerSpeed = 3;
				//}
				eFrames = true;
				eFramesDuration = 2;
				lives--;
				shakeAmount = 15;
				if (lives == 0) {
					death = true;
				}
			}


			this.wasTouching = this.touching;

			


		

		//} // end hit
		
		if (eFrames) {
			if (lives >= 1) {
				//fill('white');
				tint(255, 60); 
				image(img22, width / 2, playerY - height * 0.3);
				tint(255,255);
			}
			eFramesDuration -= deltaTime / 1000;
			if (eFramesDuration <= 0 && eFrames) 	{
				eFrames = false;
				audio2Played = false;
			}
		} // end if



		

	} // end update




} // end class