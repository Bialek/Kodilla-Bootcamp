function Phone(brand, price, color, os) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.os = os;
}
Phone.prototype.printInfo = function(){
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price);
}
Phone.prototype.osInfo = function(){
	console.log(this.brand + ' have ' + this.os);
}
var iPhone6S = new Phone ('Apple', 2250, 'silver', 'Ios'),
	SamsungS6 = new Phone ('Samsung', 2000, 'gray', 'Android'),
	OnePlusOne = new Phone ('OnePlus', 1700, 'black', 'Android');


iPhone6S.printInfo();
SamsungS6.printInfo();
OnePlusOne.printInfo();


iPhone6S.osInfo();
SamsungS6.osInfo();
OnePlusOne.osInfo();