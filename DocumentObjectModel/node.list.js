var hotItems = document.querySelectorAll("li.hot");
if (hotItems.length > 0) {
  for (var i = 0; i < hotItems.length; i++) {
    hotItems[i].className = "cool";
  }
}

var coolItems = document.querySelectorAll("li.cool");
if (coolItems.length > 0) {
  for (var i = 4; i < coolItems.length; i++) {
    coolItems[i].className = "hot";
  }
}
