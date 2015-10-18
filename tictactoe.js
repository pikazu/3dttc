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
	document.getElementById('b5').style.backgroundColor = "transparent";
	document.getElementById("win").textContent = "";
	hasWon = false;
	count = 0;
}

var winningCombos = [['a1','a2','a3'],['a4','a5','a6'],['a7','a8','a9'], ['a1','a4','a7'],['a2','a5','a8'],['a3','a6','a9'], ['a1','a5','a9'],['a3','a5','a7'],
					 ['b1','b2','b3'],['b4','b5','b6'],['b7','b8','b9'], ['b1','b4','b7'],['b2','b5','b8'],['b3','b6','b9'], ['b1','b5','b9'],['b3','b5','b7'],
					 ['c1','c2','c3'],['c4','c5','c6'],['c7','c8','c9'], ['c1','c4','c7'],['c2','c5','c8'],['c3','c6','c9'], ['c1','c5','c9'],['c3','c5','c7'],
					 ['a1','b1','c1'],['a2','b2','c2'],['a3','b3','c3'], ['a1','b2','c3'],['a3','b2','c1'],
					 ['a4','b4','c4'],['a5','b5','c5'],['a6','b6','c6'], ['a4','b5','c6'],['a6','b5','c4'],
					 ['a7','b7','c7'],['a8','b8','c8'],['a9','b9','c9'], ['a7','b8','c9'],['a9','b8','c7'],
					 ['a1','b4','c7'],['a7','b4','c1'], ['a2','b5','c8'],['a8','b5','c2'], ['a3','b6','c9'],['a9','b6','c3'],
					 ['a1','b5','c9'],['a3','b5','c7'],['a7','b5','c3'],['a9','b5','c1']];
					 
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