const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const inputs = days.reduce(
  (acc, day) => ({
    ...acc,
    [day]: document.getElementById(`${day}-input-box`),
  }),
  {}
);
const lists = days.reduce(
  (acc, day) => ({
    ...acc,
    [day]: document.getElementById(`${day}-list-container`),
  }),
  {}
);

function addTask(day) {
  const inputBox = inputs[day];
  const listContainer = lists[day];
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    let option = document.createElement("option");
    option.value = inputBox.value;
    option.text = inputBox.value;
    dropdown.appendChild(option);
  }
  inputBox.value = "";
  saveData(day);
}

Object.values(lists).forEach((listContainer) => {
  listContainer.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
      }
      saveData(listContainer.id.split("-")[0]);
    },
    false
  );
});

function saveData(day) {
  localStorage.setItem(`${day}-data`, lists[day].innerHTML);
}

function showTask() {
  days.forEach((day) => {
    lists[day].innerHTML = localStorage.getItem(`${day}-data`);
  });
}

showTask();
