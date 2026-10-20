



class Bullet2 {
  constructor(x, y, target) {
    this.pos = createVector(x, y);
    this.target = target;
    this.speed = 25;
    this.hit = false;
  }

  update() {
    if (this.target && !this.target.isFinished) {
      let direction = p5.Vector.sub(this.target.pos, this.pos);
      if (direction.mag() < this.speed) {
        this.hit = true;
        this.target.takeDamage(2);
      } else {
        direction.setMag(this.speed);
        this.pos.add(direction);
      }
    } else {
      this.hit = true;
    }
  }

  display() {
    fill('rgb(221,181,24)');
    ellipse(this.pos.x, this.pos.y, 12, 12);
  }
}