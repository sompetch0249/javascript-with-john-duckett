function Hotel(name, price, discount) {
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.sale = function() {
    return this.price - this.discount;
  };
}

var parkHotel = new Hotel("Park", 240, 36);

var hotel1 = parkHotel.name;
var elHotel1 = document.getElementById("hotel1");
elHotel1.textContent = hotel1;

var price1 = parkHotel.price;
var elPrice1 = document.getElementById("price1");
elPrice1.textContent = "$" + price1;

var sale1 = parkHotel.sale();
var elsale1 = document.getElementById("sale1");
elsale1.textContent = "$" + sale1;
