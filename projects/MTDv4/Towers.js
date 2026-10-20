  


function drawTowers() {
// Draw Tower Type 1
      for (let t of tower) {
        fill('rgb(42,148,150)');
        rect(t.x - 12, t.y - 12, 35);
//        fill('rgb(25,129,131)');
//        rect(t.x + 1, t.y - 20, 9, 26);
				let target = findClosestEnemy(t.x, t.y, 150);
				let target2 = findClosestEnemy2(t.x, t.y, 150);
				let target3 = findClosestEnemy3(t.x, t.y, 150);
					let target4 = findClosestEnemy4(t.x, t.y, 150);
							let target5 = findClosestEnemy5(t.x, t.y, 150);
				if (target5) bullets.push(new Bullet(t.x, t.y, target5));
				
    if (target) bullets.push(new Bullet(t.x, t.y, target));
				
				    if (target2) bullets.push(new Bullet(t.x, t.y, target2));
				  if (target3) bullets.push(new Bullet(t.x, t.y, target3));
								  if (target4) bullets.push(new Bullet(t.x, t.y, target4));
			
      }
	
	
	  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].display();
    if (bullets[i].hit) bullets.splice(i, 1);
  }
	
	

      // Draw Tower Type 2
      for (let t2 of tower2) {
        fill('rgb(87,87,211)');
        rect(t2.x - 12, t2.y - 12, 35);
//        fill('rgb(51,51,173)');
//        rect(t2.x + 1, t2.y - 20, 9, 26);
				let target = findClosestEnemy(t2.x, t2.y, 100);
				let target2 = findClosestEnemy2(t2.x, t2.y, 100);
					let target3 = findClosestEnemy3(t2.x, t2.y, 100);
				let target4 = findClosestEnemy4(t2.x, t2.y, 100);
				let target5 = findClosestEnemy5(t2.x, t2.y, 150);
				if (target5) bullets2.push(new Bullet2(t2.x, t2.y, target5));
    if (target) bullets2.push(new Bullet2(t2.x, t2.y, target));
				
		    if (target2) bullets2.push(new Bullet2(t2.x, t2.y, target2));
						    if (target3) bullets2.push(new Bullet2(t2.x, t2.y, target3));
				 if (target4) bullets2.push(new Bullet2(t2.x, t2.y, target4));
      }

	for (let j = bullets2.length - 1; j >= 0; j--) {
    bullets2[j].update();
    bullets2[j].display();
    if (bullets2[j].hit) bullets2.splice(j, 1);
  }
	
							 // Draw Tower Type 4
      for (let tS of towerS) {
        fill('rgb(0,0,0)');
        rect(tS.x - 12, tS.y - 12, 35);
//        fill('rgb(192,141,65)');
//        rect(t3.x + 1, t3.y - 20, 9, 26);
				let target = findClosestEnemy(tS.x, tS.y, 200);
				let target2 = findClosestEnemy2(tS.x, tS.y, 200);
				let target3 = findClosestEnemy3(tS.x, tS.y, 200);
								let target4 = findClosestEnemy4(tS.x, tS.y, 200);
				let target5 = findClosestEnemy5(tS.x, tS.y, 200);
    if (target) bulletsS.push(new BulletS(tS.x, tS.y, target));
				
				    if (target2) bulletsS.push(new BulletS(tS.x, tS.y, target2));
				 if (target3) bulletsS.push(new BulletS(tS.x, tS.y, target3));
								 if (target4) bulletsS.push(new BulletS(tS.x, tS.y, target4));
				 if (target5) bulletsS.push(new BulletS(tS.x, tS.y, target5));
      }
	
	//Fix
	
		for (let j = bulletsS.length - 1; j >= 0; j--) {
	bulletsS[j].update();
	bulletsS[j].display();
	if (bulletsS[j].hit) bulletsS.splice(j, 1);
	}
	
	
	// print(bullets3);
      // Draw Tower Type 3
      for (let t3 of tower3) {
        fill('rgb(216,154,74)');
        rect(t3.x - 12, t3.y - 12, 35);
//        fill('rgb(192,141,65)');
//        rect(t3.x + 1, t3.y - 20, 9, 26);
				let target = findClosestEnemy(t3.x, t3.y, 200);
								let target2 = findClosestEnemy2(t3.x, t3.y, 200);
												let target3 = findClosestEnemy2(t3.x, t3.y, 200);
																let target4 = findClosestEnemy4(t3.x, t3.y, 200);
				let target5 = findClosestEnemy5(t3.x, t3.y, 150);
		
						//print(target)
				
				// if (t3.pewpew === true){
				// 	full()
				// }
				
    if (target && t3.pewpew === false && second() % 3  === 0 && t3.ladiesFirst === false){

			
			 bullets3.push(new Bullet3(t3.x, t3.y, target));
			t3.pewpew = true;
			t3.ladiesFirst = true;
			
      }	if (target2 && t3.pewpew === false && second() % 3  === 0 && t3.ladiesFirst === false) {
							 bullets3.push(new Bullet3(t3.x, t3.y, target2));
			t3.pewpew = true;
			t3.ladiesFirst = true;
			}
				if (target3 && t3.pewpew === false && second() % 3  === 0 && t3.ladiesFirst === false) {
							 bullets3.push(new Bullet3(t3.x, t3.y, target3));
			t3.pewpew = true;
			t3.ladiesFirst = true;
			}
								if (target4 && t3.pewpew === false && second() % 3  === 0 && t3.ladiesFirst === false) {
							 bullets3.push(new Bullet3(t3.x, t3.y, target4));
			t3.pewpew = true;
			t3.ladiesFirst = true;
			}
				
				if (target5 && t3.pewpew === false && second() % 3  === 0 && t3.ladiesFirst === false) {
							 bullets3.push(new Bullet3(t3.x, t3.y, target5));
			t3.pewpew = true;
			t3.ladiesFirst = true;
			}
				
				
				
				
						for (let l = bullets3.length - 1; l >= 0; l--) {
		bullets3[l].update();
		bullets3[l].display();
							
		if (bullets3[l].hit) {
							bullets3.splice(l, 1)
			
							t3.pewpew = false;
				t3.ladiesFirst = false;
			
		}
	}
				
				if (bullets3.length === 0) {
    t3.pewpew = false;
						t3.ladiesFirst = false;
					
				}
				
				
}

function findClosestEnemy(x, y, range) {
  let closest = null;
  let closestDist = range;

  for (let enemy of e) {
    let d = dist(x, y, enemy.pos.x, enemy.pos.y);
    if (d < closestDist) {
      closest = enemy;
      closestDist = d;
    }
  }

  return closest;
}
	
	
	//hit for e2
	function findClosestEnemy2(x, y, range) {
  let closest = null;
  let closestDist = range;

  for (let enemy2 of e2) {
    let d = dist(x, y, enemy2.pos.x, enemy2.pos.y);
    if (d < closestDist) {
      closest = enemy2;
      closestDist = d;
    }
  }

  return closest;
}
	
		function findClosestEnemy3(x, y, range) {
  let closest = null;
  let closestDist = range;

  for (let enemy3 of e3) {
    let d = dist(x, y, enemy3.pos.x, enemy3.pos.y);
    if (d < closestDist) {
      closest = enemy3;
      closestDist = d;
    }
  }

  return closest;
}
	
			function findClosestEnemy4(x, y, range) {
  let closest = null;
  let closestDist = range;

  for (let enemy4 of e4) {
    let d = dist(x, y, enemy4.pos.x, enemy4.pos.y);
    if (d < closestDist) {
      closest = enemy4;
      closestDist = d;
    }
  }

  return closest;
}
	
	
				function findClosestEnemy5(x, y, range) {
  let closest = null;
  let closestDist = range;

  for (let enemy5 of e5) {
    let d = dist(x, y, enemy5.pos.x, enemy5.pos.y);
    if (d < closestDist) {
      closest = enemy5;
      closestDist = d;
    }
  }

  return closest;
}
	
	
	
	function full() {
	    fill('rgb(0,0,0)');
    ellipse(t3.x, t3.y, 32);
		fill('red')
		rect(t3.x - 16, t3.y - 4, 32, 8);
		rect(t3.x - 4, t3.y - 16, 8, 32);

	}
	
}



function drawTowerLogos() {
  textSize(30);
  stroke('black');
  strokeWeight(1.5);
			textStyle(NORMAL);
  // Do NOT set textAlign globally


  fill('rgb(42,148,150)');
  rect(275, 50, 75, 75);
  text("$40", 275, 45);


  push();
  textAlign(CENTER, CENTER);
  fill('white');
  text(t1, 275 + 75 / 2, 50 + 75 / 2);
  pop();

	
  fill('rgb(87,87,211)');
  rect(375, 50, 75, 75);
  text("$90", 375, 45);


  push();
  textAlign(CENTER, CENTER);
  fill('white');
  text(t2, 375 + 75 / 2, 50 + 75 / 2);
  pop();


  fill('rgb(216,154,74)');
  rect(475, 50, 75, 75);
  text("$180", 475, 45);


  push();
  textAlign(CENTER, CENTER);
  fill('white');
  text(t3, 475 + 75 / 2, 50 + 75 / 2);
  pop();
	
	strokeWeight(1.2);
	 stroke('black');
		textSize(20);
	
fill('rgb(42,148,150)');
	text("key = 1", 275 + 75 / 2, 150);
	
	fill('rgb(87,87,211)');
	 text("key = 2", 375 + 75 / 2, 150);
	
	 fill('rgb(216,154,74)');
	  text("key = 3", 475 + 75 / 2, 150);
}







