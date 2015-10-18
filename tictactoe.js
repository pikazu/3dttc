/*
function boop(a) {
//	document.getElementById(a).style.backgroundColor = "blue";
	var colors = ["white","yellow","blue","orange"]
	var temp = document.getElementsByClassName(a);
	for(var i = 0; i < temp.length; i++) {
		temp.item(i).style.backgroundColor = colors[parseInt(Math.random()*4)];
	}
}*/

var hasWon = false;

var count = 0;
function move(cell) {
	if(cell.textContent || hasWon) {
		return;
	}
	if(count >= 27) {
		document.getElementById("win").textContent = "NO WINNER";
	}
	if(count % 2 == 0) {
		cell.textContent = "X";
		checkWin("X");
	} else {
		cell.textContent = "O";
		checkWin("O");
	}
	count++;
}

function reset() {
	var temp = document.getElementsByClassName("box");
	for(var i = 0; i < temp.length; i++) {
		temp.item(i).textContent = "";
		temp.item(i).style.backgroundColor = "white";
	}
	document.getElementById("win").textContent = "";
	hasWon = false;
	count = 0;
}

var winningCombos = [[31,32,33],[34,35,36],[37,38,39], [31,34,37],[32,35,38],[33,36,39], [31,35,39],[33,35,37],
					 [11,12,13],[14,15,16],[17,18,19], [11,14,17],[12,15,18],[13,16,19], [11,15,19],[13,15,17],
					 [21,22,23],[24,25,26],[27,28,29], [21,24,27],[22,25,28],[23,26,29], [21,25,29],[23,25,27],
					 [31,11,21],[32,12,22],[33,13,23], [31,12,23],[33,12,21],
					 [34,14,24],[35,15,25],[36,16,26], [34,15,26],[36,15,24],
					 [37,17,27],[38,18,28],[39,19,29], [37,18,29],[39,18,27],
					 [31,14,27],[37,14,21], [32,15,28],[38,15,22], [33,16,29],[39,16,23],
					 [31,15,29],[33,15,27],[37,15,23],[39,15,21]];
					 
function checkWin(symbol) {
	for(var i = 0; i < winningCombos.length; i++) {
		if (document.getElementById(''+winningCombos[i][0]).textContent == symbol &&
			document.getElementById(''+winningCombos[i][1]).textContent == symbol &&
			document.getElementById(''+winningCombos[i][2]).textContent == symbol){
				document.getElementById("win").textContent = symbol + " WINS!!";
				hasWon = true;
				
				document.getElementById(winningCombos[i][0]).style.backgroundColor = "yellow";
				document.getElementById(winningCombos[i][1]).style.backgroundColor = "yellow";
				document.getElementById(winningCombos[i][2]).style.backgroundColor = "yellow";
			}
	}
}