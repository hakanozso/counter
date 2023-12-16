const panel = document.getElementsByClassName("panel")[0];
const decBtn = document.getElementById("decBtn");
const incBtn = document.getElementById("incBtn");

var counter = 0;

// INIT
updateCounter(counter);

function eventListeners() {
    decBtn.addEventListener("click", () => updateCounter(counter--));
    incBtn.addEventListener("click", () => updateCounter(counter++));
}

eventListeners();

function updateCounter() {
    panel.innerHTML = counter;
}
