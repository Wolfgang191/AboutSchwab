



class Enemy {
  constructor(waypoints, speed) {
    this.waypoints = waypoints;
    this.currentIndex = 0;
    this.pos = createVector(waypoints[0].x, waypoints[0].y);
    this.speed = speed; //3 1.6
    this.isFinished = false;
    this.health = 260;
		this.wave = wave;
		// this.e2 = e2;
		
  }
	
	
	


  update() {
		if (windowWidth - 0.5 === this.pos.x) {
this.end();
		}
    if (this.currentIndex < this.waypoints.length - 1) {
      let target = createVector(
        this.waypoints[this.currentIndex + 1].x,
        this.waypoints[this.currentIndex + 1].y
      );

      let direction = p5.Vector.sub(target, this.pos);
      if (direction.mag() < this.speed) {
        this.pos = target;
        this.currentIndex++;
      } else {
        direction.setMag(this.speed);
        this.pos.add(direction);
      } 
    } else {
      this.isFinished = true;
	 }  
		 
	 if (game === false) {
		   this.speed = 0;
		 this.pos.x = width + 500
	 }			if (key === 's'){
			this.speed = 8;
		}
		// if (emptyWave === true) {
			
		// }
	
		 
	
}


  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
			this.NLife();
		// let index = e.indexOf(this);
		// if (index !== -1) e.splice(index, 1){
		
		// } 
		}
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 25);
		// print(this.pos.x)
  }


	
	
	reset() {	

		emptyWave = false;
		
}
	
	end()	{
		    this.isFinished = true;
		this.speed = 1.8;
				//e.pop();
		// 				if (cash > 26)	{
		// 				cash = cash - 26;
		// }

				life = life - 1
	}
	
	NLife() {
		    this.isFinished = true;
		

		this.speed = 1.8;
		
		elims = elims + 1;
			

						cash = cash + 5;
		
		
	}

	
}//end class


		// this.waypoints = waypoints;
		// this.currentIndex = 0;
		// this.pos = createVector(waypoints[0].x, waypoints[0].y);
		// this.speed = 2.2;
		// this.isFinished = false;
		// this.health = 300;