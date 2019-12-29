var score3 = 8;
var score4 = 8;
var pass3 = 6;
var pass4 = 6;

var minBoth = score3 >= pass3 || score4 >= pass4;

var msg1 = "Resit required: " + !minBoth;

var el = document.getElementById("answer3");
el.textContent = msg1;
