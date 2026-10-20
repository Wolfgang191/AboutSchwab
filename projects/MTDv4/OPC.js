


//OPC


// needs to be in set-up



function buttonPressed(variableName) {
	if (variableName == 'SaveB') {
		
		saveData();

	} else if (variableName == 'LoadB') {

		loadData();

	}	else if (variableName == 'drawLBb')	{
		drawLB();
	}
}


function saveData(){	
		name = Leaderboard;
	// text(name, 200, 350);	
	lbScore = score;
	storeItem('userName', name);
	storeItem('LBscore', lbScore);

	LBA.push(name);
	LBA.push(lbScore);
	
	storeItem('ugh', [LBA[0], LBA[1]]);
}

	//load from local browser
function loadData() {
	
load = true;
	
	//var savedScore = getItem('LBscore')
	// print("test");
	//var savedName = getItem('userName')
	

	
}





