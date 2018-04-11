var heigh = prompt("how high Christmas tree you want? ?");

function drawTree(heigh) {
	var space = "";
	for (var p = 0; p < heigh; p++) {
		space +=" "
		
	}
	console.log(space + "*")
	space = space.substring(1,space.legth);
	for (var i = 0; i < heigh; i++) {
		var star = "*";
		for (var j = 0; j <= i; j++) {
			
			star += "**";
		}

		console.log(space + star);
		space = space.substring(1,space.legth);
	}
}

drawTree(heigh);