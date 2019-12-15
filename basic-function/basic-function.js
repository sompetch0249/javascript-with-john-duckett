var msg = "Sign up to receive our newletter for 10% off";

function updateMessage() {
  var el = document.getElementById("message");
  el.textContent = msg;
}
updateMessage();

function sayHello() {
  document.write("Hello!");
}
sayHello();

function calculateArea(width, height) {
  var area = width * height;
  return area;
}

var wallTwo = calculateArea(2, 6);
var elWallTwo = document.getElementById("wallTwo");
elWallTwo.textContent = wallTwo;
