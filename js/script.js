$(function(){
	console.log('DOM loaded - you can have fun');

	function Phone(brand, price, color, cores) {
		this.brand = brand;
		this.price = price;
		this.color = color;
		this.cores = cores;
	}
	Phone.prototype.printInfo = function() {
		console.log("Marka telefonu:" + this.brand + ", cena wynosi " + this.price + ", kolor telefonu:" + this.color + "." + "Telefon posiada " + this.cores + " rdzeni.");
	}

	var iPhone6s = new Phone("iPhone6s", 2000, "czarny", 6);
	var samsungS8 = new Phone("SamsungS8", 2700, "niebieski", 8);
	var huaweiP10 = new Phone("HuaweiP10", 1700, "zloty", 5);

	iPhone6s.printInfo();
	samsungS8.printInfo();
	huaweiP10.printInfo();

});