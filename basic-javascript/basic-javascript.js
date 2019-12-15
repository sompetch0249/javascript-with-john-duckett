//Hello Molly

var greet = "Howdy";
var name = "Molly";
var welcomeMessage = greet + " " + name + ", please check your order:";

var elGreeting = document.getElementById("welcomeMessage");
elGreeting.textContent = welcomeMessage;

//Custom Sign

var customSign = "Montague House";
var elCustomSign = document.getElementById("customSign");
elCustomSign.textContent = customSign;

//Total tittle

var totalTitle = "Montague House";
var countTitle = totalTitle.length;
var subTotal = countTitle * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var elCountTitle = document.getElementById("countTitle");
elCountTitle.textContent = countTitle;

var elSubTitle = document.getElementById("subTotal");
elSubTitle.textContent = "$" + subTotal;

var elShipping = document.getElementById("shipping");
elShipping.textContent = "$" + shipping;

var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = "$" + grandTotal;
