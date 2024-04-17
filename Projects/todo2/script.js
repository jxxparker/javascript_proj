const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputHours = document.getElementById("input-number");
let hours = 168;

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
      // Toggle hours addition or subtraction based on whether the item is checked or not
      const hourText = e.target.innerText.match(/\((\d+) hours\)/); // Regex to find the hours in text
      if (hourText && hourText[1]) {
        const taskHours = parseInt(hourText[1]);
        if (e.target.classList.contains("checked")) {
          // If task is checked, add hours back to total
          hours += taskHours;
        } else {
          // If task is unchecked, subtract hours from total
          hours -= taskHours;
        }
        document.querySelector(".hours").textContent = hours; // Update the display of hours
      }
      saveData();
    } else if (e.target.tagName === "SPAN") {
      const parentLi = e.target.parentElement;
      const hourText = parentLi.innerText.match(/\((\d+) hours\)/);
      if (hourText && hourText[1]) {
        const taskHours = parseInt(hourText[1]);
        if (!parentLi.classList.contains("checked")) {
          // Only adjust hours if the task was not checked
          hours += taskHours;
        }
      }
      parentLi.remove(); // Remove the task
      document.querySelector(".hours").textContent = hours;
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
