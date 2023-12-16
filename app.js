const panel = document.getElementsByClassName("panel")[0];
const decBtn = document.querySelector("div.decrement button");
const incBtn = document.querySelector("div.increment button");

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
