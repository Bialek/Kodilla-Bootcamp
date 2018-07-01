//task 1
{
	const hello = 'hello';
	const world = 'world';

	console.log(`${hello} ${world}`)
}
//task 2 
{
	const multiply = (x=1,y=1) => console.log(x*y);

	multiply(2, 5);
	multiply(6, 6);
	multiply(5);
}
//task 3
{
	const average = (...numbers) =>  numbers.reduce((a, b) => a+b)/numbers.length;

	console.log(average(1));
	console.log(average(1, 3));
	console.log(average(1, 3, 6, 6));


// task 4 

	const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
	console.log(average(...grades));
}
//task 5 
{
	const array = [1, 4, 'Iwona', false, 'Nowak'];
	const [ , , firstName, , lastName] = array;
	console.log(`${firstName} ${lastName}`);
}