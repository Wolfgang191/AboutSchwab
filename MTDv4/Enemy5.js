



class Enemy5 {
  constructor(waypoints, speed) {
    this.waypoints = waypoints;
    this.currentIndex = 0;
    this.pos = createVector(waypoints[0].x, waypoints[0].y);
    this.speed = speed; //3
    this.isFinished = false;
    this.health = 5800;
		this.wave = wave;
		// this.e2 = e2;
		
  }
	
	
	


  update() {
		if (windowWidth - 0.5 === this.pos.x) {
this.end()
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
	 }
		 
	
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
	
	// pickColor()	{
	// 	this.r = 150;
	// }

  display() {
		// this.pickColor();
		// fill(this.r);
		
		fill('rgba(175,0,237,0.55)');
    rect(this.pos.x - 22, this.pos.y - 22, 44, 44, 10);
		// print(this.pos.x)
		
		// if (this.r > 200)	{
		// 	this.r = 100;
		// }
  }


// reset(){
// 	e
	
// }

	
		// if (this.isFinished === true) {
		// e.push(new Enemy(waypoints));
			
		// }
	
	
end()	{
	      this.isFinished = true;
		// 						if (cash > 999)	{
		// 				cash = cash - 999;
		// }

				life = life - 10
	

			
}
	
	
	NLife() {
      this.isFinished = true;
		
		cash = cash + 999
		
		elims = elims + 1;
		
		
	}
	
	
	
}//end class