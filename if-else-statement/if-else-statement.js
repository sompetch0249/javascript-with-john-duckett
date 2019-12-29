var pass = 50;
var score = 35;
var msg;

if (score >= pass) {
  msg = "Congratulations!";
} else {
  msg = "Have another try!";
}

var el = document.getElementById("answer");
el.textContent = msg;
