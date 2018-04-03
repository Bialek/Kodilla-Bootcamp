var a = prompt("Enter a");
var b = prompt("Enter b");

var value = ((a * a) - (2 * a * b) - (b * b));

if (value > 0) {
	console.log("positive result");
} else if (value < 0) {
	console.log("negative result");
} else {
	console.log("zero result");
}