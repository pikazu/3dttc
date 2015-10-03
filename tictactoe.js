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
	if(count >= 8) {
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

var winningCombos = [[1,2,3],[4,5,6],[7,8,9],
					 [1,4,7],[2,5,8],[3,6,9],
					 [1,5,9],[3,5,7]];
					 
function checkWin(symbol) {
	for(var i = 0; i < winningCombos.length; i++) {
		if (document.getElementById(winningCombos[i][0]).textContent == symbol &&
			document.getElementById(winningCombos[i][1]).textContent == symbol &&
			document.getElementById(winningCombos[i][2]).textContent == symbol){
				document.getElementById("win").textContent = symbol + " WINS!!";
				hasWon = true;
				
				document.getElementById(winningCombos[i][0]).style.backgroundColor = "yellow";
				document.getElementById(winningCombos[i][1]).style.backgroundColor = "yellow";
				document.getElementById(winningCombos[i][2]).style.backgroundColor = "yellow";
			}
	}
}