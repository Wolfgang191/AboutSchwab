


class Dev {
	
	
	displayI()	{
		stroke('white');
		strokeWeight(3);
		fill('rgba(255,255,255,0.5)');
		rect(width / 2 + 450, height / 2 - 125, 400, 300);
		
		
				fill('rgb(255,255,255)');
		textSize(20);
		stroke('black');
		strokeWeight(2.5);
		
		 text("1-3 for towers, E to clear tower select", width / 2 + 650, height / 2 - 50); 
	
	//	textSize(18);
	text("Score = waves + elims", width / 2 + 650, height / 2); // and - $
	
	//	textSize(20);
		text("Keys: Press F for full screen", width / 2 + 650, height / 2 + 50);
		
		text("Press 'I' to toggle info", width / 2 + 650, height / 2 + 100);
	}
	
	displayAI()	{

		
		fill('rgba(255,255,255,0.5)');
		rect(width / 2 - 125, height / 2 - 265, 300, 400);
		
		
						textSize(20);
		fill('rgb(255,255,255)');
		stroke('black');
		strokeWeight(3);
		text("Place Holder",(width / 2 - 125) + 75, (height / 2) - 230)

		
	}
	
	displayD() {
		
		  //textAlign(CENTER);
			textStyle(BOLD);
		fill('black');
		stroke('whilte');
		strokeWeight(3);
	textSize(30);
	text("M = cash & life; , = 0 life; . = wave; D = dev menu; L = purple e; K = red e; S = speed", width / 2, height /2 - 150);
	}
	
	
	
	
	
} // end of class