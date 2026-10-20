


class Log {
  constructor(x, y) {
	  this.x = x;
	  this.y = y;

	  }



      display() {
        image(img24, this.x, this.y);
      }



      update()	{
		//print("yay");
		this.playerX = playerX;
		this.playerY = playerY - jumpOffset;

		this.touching =
			this.playerX > this.x - 45 &&
			this.playerX < this.x + 45 &&
			this.playerY > this.y - 45 &&
			this.playerY < this.y + 110;

			
			if (this.touching && !this.wasTouching) {
        logHit = true;
        airTime = 30; // 35
		score++
        //print("yay");
			}


			this.wasTouching = this.touching;

    //   if (airTime > 0) {
    //     airTime -= deltaTime / 1000;
    //   } else {
    //     logHit = false;
    //   }


		

	} // end update

}