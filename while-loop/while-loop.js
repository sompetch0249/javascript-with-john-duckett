var msg = "";
var i = 1;

while (i < 10) {
  msg += i + " x 5 =" + i * 5 + "<br/>";
  i++;
}

document.getElementById("number").innerHTML = msg;
