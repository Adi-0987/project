// Add scrolling bar on top
window.addEventListener("scroll", function() {
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

// assume `results` is an array of search results
if (results.length === 0) {
  document.querySelector('.search-results').classList.add('hidden');
} else {
  document.querySelector('.search-results').classList.remove('hidden');
  var responseTable = document.querySelector(".search-results table");
  responseTable.querySelector("tbody").innerHTML = ""; // Clear existing rows
  for (var i = 0; i < results.length; i++) {
    var row = results[i];
    var rowElement = document.createElement("tr"); // Create new table row element
    for (var j = 0; j < row.length; j++) {
        var cellElement = document.createElement("td"); // Create new table cell element
        cellElement.textContent = row[j];
        rowElement.appendChild(cellElement); // Append cell to row
    }
    responseTable.querySelector("tbody").appendChild(rowElement); // Append row to table body
  }
}

// Add animation to logo
const logo = document.querySelector(".logo img");
logo.addEventListener("mouseover", function() {
	logo.classList.add("animated");
});

logo.addEventListener("animationend", function() {
	logo.classList.remove("animated");
});

// initialize the Speech Recognition API
const recognition = new window.webkitSpeechRecognition();

// set the properties of the Speech Recognition object
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'en-US';

// add an event listener to the voice input button
document.getElementById('voice-btn').addEventListener('click', () => {
  recognition.start();
});

// add an event listener for the speech recognition result
recognition.addEventListener('result', (e) => {
  const transcript = e.results[0][0].transcript;
  document.getElementById('search-input').value = transcript;
});

// add an event listener for the speech recognition end event
recognition.addEventListener('end', () => {
  recognition.stop();
});
