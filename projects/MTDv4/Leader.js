

class Leader {
	constructor() { 

		
		
	}
	
	
	
	
	display() {
		
		
		noStroke();
			
			
		
		fill('white');		
		
		// rectMode(CENTER);
					stroke('black');
			strokeWeight(1.5);
		
		rect(width / 2 - 160, height - 675, 350, 400); //- 160
		

		

	
      textAlign(CENTER);
		
		   fill(255);
			textStyle(NORMAL);
				      textSize(30);
      text("Press Z to exit", width / 2, height - 200);
		
				fill('black');	
		
		
		text("1.", width / 2 - 100, height - 572);
		// 			text(score, width / 2, height - 572);
		// 	text(Leaderboard, width / 2 - 50, height - 572);
		
		if (load) {
			
											var savedName = getItem('userName');
							text(savedName, width / 2 - 50, height - 572);
							var savedScore = getItem('LBscore')
				text(savedScore, width / 2, height - 572);

							//text(LBA, width / 2 - 50, height - 532);
var savedUgh = getItem('ugh');
				text(savedUgh, width / 2 - 25, height - 532);
			
										text(savedName, width / 2 - 50, height - 492);

				text(savedScore, width / 2, height - 492);
			
										text(savedName, width / 2 - 50, height - 452);

				text(savedScore, width / 2, height - 452);
			
										text(savedName, width / 2 - 50, height - 412);

				text(savedScore, width / 2, height - 412);
		
		}

		

		
		
		
				text("2.", width / 2 - 100, height - 532);
				text("3.", width / 2 - 100, height - 492);
				text("4.", width / 2 - 100, height - 452);
				text("5.", width / 2 - 100, height - 412);
		textAlign(CENTER);
			textStyle(BOLD)
      text("Leaderboard", width / 2, height - 632);
		
		
		
		
			fill('black');
		
		
			line(width / 2 - 125, height - 615, width / 2 + 125, height - 615);
	
		
	}
	
	
	
	
	
	
	
	
} // end of class



