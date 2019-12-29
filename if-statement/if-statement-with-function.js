var score = 75;
var msg1 = "";

function congratulate() {
  msg1 += "Congratulations!";
}

if (score >= 50) {
  congratulate();
  msg1 += "Proceed to the next round2.";
}

var el = document.getElementById("answer2");
el.innerHTML = msg1;
