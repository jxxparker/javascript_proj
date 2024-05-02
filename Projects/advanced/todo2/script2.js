const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputHours = document.getElementById("input-number");
let hours = 168;
let productiveHours = 0;

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else if (
    inputHours.value === "" ||
    isNaN(inputHours.value) ||
    parseInt(inputHours.value) < 0 ||
    parseInt(inputHours.value) > 24
  ) {
    alert("Please enter a valid number of hours between 0 and 24");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value + " (" + inputHours.value + " hours)";
    li.draggable = true; // Set the draggable attribute to true
    li.addEventListener("dragstart", handleDragStart); // Add a dragstart event listener
    li.addEventListener("dragover", handleDragOver); // Add a dragover event listener
    li.addEventListener("drop", handleDrop); // Add a drop event listener
    listContainer.appendChild(li);
    hours -= parseInt(inputHours.value);
    document.querySelector(".hours").textContent = hours;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  inputHours.value = ""; // Clear the number input field as well
  saveData();
}

// Placeholder functions for drag and drop
function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id); // Set the drag's data to the element's ID or other identifier
}

function handleDragOver(e) {
  e.preventDefault(); // Necessary to allow dropping
}

function handleDrop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  e.target.appendChild(document.getElementById(data));
}

// Add existing event listeners and other functions here...
