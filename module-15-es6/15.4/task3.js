const numbersArray = [];
let x = (parseInt(prompt('put number')));
while (!(isNaN(x))) {
  numbersArray.push(x);
  x = (parseInt(prompt('put number')));
}
x = 0;
numbersArray.forEach((element)=>{x += element;});

console.log(x/numbersArray.length);