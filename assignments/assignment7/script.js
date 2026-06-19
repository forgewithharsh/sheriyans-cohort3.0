const input = document.querySelector("#task-input");
const btn = document.querySelector("#add-task-btn");
const ul = document.querySelector("#task-list");
const searchInput = document.querySelector("#search-input");

window.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    ul.innerHTML = savedTasks;
  }
});

function addingElement() {
  const inputValue = input.value.trim();

  if (inputValue === "") return;

  const li = document.createElement("li");

  const status = document.querySelector("#status-select").value;

  li.innerHTML = `
  <input type="checkbox">
  <span>${inputValue}</span>
  <small class="${status}">${status}</small>
  <button class="delete-btn">Delete</button>
`;

  ul.append(li);

  input.value = "";
  localStorage.setItem("tasks", ul.innerHTML);
}

btn.addEventListener("click", addingElement);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addingElement();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    localStorage.setItem("tasks", ul.innerHTML);
  }
});
