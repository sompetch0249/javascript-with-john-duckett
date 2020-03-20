var firstItem = document.getElementById("one"); // Find first list item
var showTextContent = firstItem.textContent; // Get value of textContent
var showInnerText = firstItem.innerText; // Get value of innerText

// Show the content of these two properties at the end of the list
var msg = "<p>textContent: " + showTextContent + "</p>";
msg += "<p>innerText: " + showInnerText + "</p>";
var el = document.getElementById("scriptResults");
el.innerHTML = msg;

firstItem.textContent = "sourdough bread"; // Update the first list item
