



class Bullet3 {
  constructor(x, y, target) {
    this.pos = createVector(x, y);
    this.target = target;
    this.speed = 1.54; //1.54
    this.hit = false;
  }

  update() {
    if (this.target && !this.target.isFinished) {
      let direction = p5.Vector.sub(this.target.pos, this.pos);
      if (direction.mag() < this.speed) {
        this.hit = true;
        this.target.takeDamage(50);
      } else {
        direction.setMag(this.speed);
        this.pos.add(direction);
      }
    } else {
      this.hit = true;
    }
  }

  display() {
    fill('darkgreen');
    ellipse(this.pos.x, this.pos.y, 32);
		fill('yellow')
		rect(this.pos.x - 16, this.pos.y - 4, 32, 8, 25, 25, 25, 25);
		rect(this.pos.x - 4, this.pos.y - 16, 8, 32, 25, 25, 25, 25);
  }
}

