var heigh = prompt("how high Christmas tree you want? ?");

function drawTree(heigh) {
	for (var i = 0; i < heigh; i++) {
		var star = "";
		for (var j = 0;j <= i; j++) {
			star += "*";
		}
		console.log(star);
	}
}

drawTree(heigh);