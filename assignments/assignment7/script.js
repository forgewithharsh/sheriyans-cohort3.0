const input = document.querySelector("#task-input");
const btn = document.querySelector("#add-task-btn");
const ul = document.querySelector("#task-list");
const searchInput = document.querySelector("#search-input");
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";

    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "Dark Mode";

    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("tasks");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");

    themeBtn.textContent = "Light Mode";
  }

  if (savedTasks) {
    ul.innerHTML = savedTasks;
  }
});

function addingElement() {
  const inputValue = input.value.trim();

  if (inputValue === "") return;

  const li = document.createElement("li");

  const status = document.querySelector("#status-select").value;

  li.dataset.status = status;

  li.innerHTML = `
  <input type="checkbox">
  <span>${inputValue}</span>
  <small class="${status}">${status}</small>
  <button class="edit-btn">Edit</button>
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

ul.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const li = e.target.parentElement;

    li.classList.toggle("completed");
    localStorage.setItem("tasks", ul.innerHTML);
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const li = e.target.parentElement;

    const span = li.querySelector("span");

    const newTask = prompt("Edit Task: ", span.textContent);

    if (newTask && newTask.trim() !== "") {
      e.target.textContent = newTask.trim();

      localStorage.setItem("tasks", ul.innerHTML);
    }
  }

  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    localStorage.setItem("tasks", ul.innerHTML);
  }
});
