document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]; // Array of days
  for (let i = 0; i < daysOfWeek.length; i++) {
    const div = document.createElement("div");
    div.className = "todo-app";
    div.textContent = daysOfWeek[i]; // Sets the text to the day of the week
    container.appendChild(div);
  }
});
