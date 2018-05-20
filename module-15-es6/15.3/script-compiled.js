'use strict';

var numbersArray = [];
var x = parseInt(prompt('put number'));
while (!isNaN(x)) {
  numbersArray.push(x);
  x = parseInt(prompt('put number'));
}
x = 0;
numbersArray.forEach(function (element, index, array) {
  x += element;
});

console.log(x / numbersArray.length);
