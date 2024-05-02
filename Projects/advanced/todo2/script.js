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
    // Checks if inputHours is empty, not a number, less than 0 or greater than 24
    alert("Please enter a valid number of hours between 0 and 24");
  } else {
    let li = document.createElement("li");
    li.setAttribute("draggable", "true");
    // Add input-number's value next to the task text, assuming it's an integer like "hours"
    li.innerHTML = inputBox.value + " (" + inputHours.value + " hours)";

    listContainer.appendChild(li);

    hours = hours - parseInt(inputHours.value);

    document.querySelector(".hours").textContent = hours;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  inputHours.value = ""; // Clear the number input field as well
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      const hourText = e.target.innerText.match(/\((\d+) hours\)/);
      if (hourText && hourText[1]) {
        const taskHours = parseInt(hourText[1]);
        if (e.target.classList.contains("checked")) {
          productiveHours += taskHours;
        } else {
          productiveHours -= taskHours;
        }
        document.querySelector(".productiveHours").textContent =
          productiveHours;
        document.querySelector(".hours").textContent = hours; // Update the display of hours
      }
      saveData();
    } else if (e.target.tagName === "SPAN") {
      const parentLi = e.target.parentElement;
      const hourText = parentLi.innerText.match(/\((\d+) hours\)/);
      if (hourText && hourText[1]) {
        const taskHours = parseInt(hourText[1]);
        if (parentLi.classList.contains("checked")) {
          // If task was checked, subtract from productiveHours and add back to hours
          productiveHours -= taskHours;
          document.querySelector(".productiveHours").textContent =
            productiveHours;
        }
        hours += taskHours; // Add the hours back whether checked or not
        document.querySelector(".hours").textContent = hours;
      }
      parentLi.remove(); // Remove the task
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  localStorage.setItem("hours", hours); // Save the current hours to localStorage
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  hours = parseInt(localStorage.getItem("hours")) || 168; // Retrieve hours from localStorage or use 168 if not found
  document.querySelector(".hours").textContent = hours; // Update the display of hours
}
showTask();

function resetSaveData() {
  localStorage.removeItem("data"); // Remove the saved tasks from local storage
  localStorage.removeItem("hours"); // Remove the saved hours from local storage
  hours = 168; // Reset hours to the default value
  productiveHours = 0; // Reset productive hours to zero

  // Update the display of hours and productiveHours on the UI
  document.querySelector(".hours").textContent = hours;
  document.querySelector(".productiveHours").textContent = productiveHours;

  // Clear the task list visually by setting the inner HTML of the list container to an empty string
  listContainer.innerHTML = "";

  // Optionally, you could also call saveData() to save the reset state, or leave the local storage clear until new data is added
  // saveData();
}
